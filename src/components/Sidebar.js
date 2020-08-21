import React, { useState, useEffect } from "react";
import FeedItem from "./FeedItem";
import FeedContent from "./FeedContent";
import { v4 } from 'uuid';
import { fetchNewFeed, fetchDefaultFeed } from '../utils/rssParser';
//import { useBeforeFirstRender } from '../utils/useBeforeFirstRender';

/*
    feeds to test out
    http://www.aaronsw.com/2002/feeds/pgessays.rss
    https://us1.campaign-archive.com/feed?u=faa8eb4ef3a111cef92c4f3d4&id=e505c88a2e
    https://us1.campaign-archive.com/feed?u=25a34f10515c4e9393e3da856&id=280158dda1
    https://feeds.feedblitz.com/sethsblog
    https://news.ycombinator.com/rss
    https://whatthefuck.is/feed.xml
    http://feeds.feedburner.com/codinghorror?format=xml
    https://www.taniarascia.com/rss.xml
    https://cprss.s3.amazonaws.com/javascriptweekly.com.xml
    http://feeds.feedburner.com/scotthyoung/HAHx?format=xml

    posts.sort((a, b) => a.date < b.date) ?
*/



export default function Sidebar() {

    const [feeds, setFeeds] = useState([]);
    const [feedName, setFeedName ] = useState('');
    const [feedItems, setFeedItems] = useState(
        {
            id: '',
            title: '',
            description: '',
            items: [],
        }
    );

    const addDefaultFeed = () => {
        fetchDefaultFeed().then(response => {
            localStorage.setItem('feeds', JSON.stringify([response]));
            setFeeds([response])
        })
    }

   // useBeforeFirstRender(() => {
   //     addDefaultFeed()
   // })

    useEffect(() => {
        let savedFeeds;
        savedFeeds = JSON.parse(localStorage.getItem('feeds'));
        if (savedFeeds !== null) {
            savedFeeds = JSON.parse(localStorage.getItem('feeds'));
            setFeeds(savedFeeds)
        } else {
            addDefaultFeed()
        }
    }, [])

    const addFeed = (e) => {
        e.preventDefault();

        fetchNewFeed(feedName).then(response => {
            localStorage.setItem('feeds', JSON.stringify([...feeds, response]));
            setFeeds([...feeds, response ]);
        }).catch(err => alert(err));

        setFeedName('');
    }

    const markAsRead = (id) => {
        setFeeds(feeds.filter(item => {
            if (item.id === id) {

                return [...feeds, item['feedItems'] -= 1] // No sure if this is the best solution, but it's doing the count
            }

            console.log(item)
            return feedItems;
        }))
        localStorage.setItem('feeds', JSON.stringify([...feeds]));
    }

    const deleteFeed = (id) => {
        let rest = feeds.filter(item => item.id !== id);
        console.log(rest);
        setFeeds([...rest])
        localStorage.setItem('feeds', JSON.stringify([...rest]));
    }

    const renderSelectFeed = (id) => {
        let selected = feeds.filter(feed => feed.id === id);
        console.log(selected)
        fetchNewFeed(selected[0].feedRSS).then(response => {
            let titles = selected[0].items.map(obj => obj['title'])
            console.log(titles);
            response.items.forEach((obj, i) => {
                if (titles.indexOf(obj['title']) === -1) {
                    selected[0].items.unshift(obj)

                    setFeeds(feeds.filter(item => {
                        if (item.id === id) {
                            console.log(item.feedItems)
                            return [...feeds, item['feedItems'] = selected[0].items.length] // No sure if this is the best solution, but it's doing the count
                        }
                        return feedItems;
                    }))
                }
                console.log(selected[0].items.length)
            });
            //console.log(newFeeds)
            setFeedItems({
                id: selected[0].id,
                title: response.feedTitle,
                description: response.feedDesc,
                items: selected[0].items
            });

        }).catch(err => alert(err));

        localStorage.setItem('feeds', JSON.stringify([...feeds]));
    }

    return (
        <div className='main-container'>
            <div className="sidebar">
                <ul className="sidebar--feed-list">
                    {feeds.length ?
                        feeds.map(feed => (
                            <FeedItem
                                title={feed.feedTitle}
                                feedCount={feed.feedItems}
                                key={v4()}
                                onClick={() => renderSelectFeed(feed.id)}
                                onDelete={() => deleteFeed(feed.id)}
                            />
                        )) :
                        <li>No feeds yet.</li>
                    }
                </ul>

                <form className="sidebar-form" onSubmit={addFeed} >
                    <input type="text" value={feedName} onChange={e => setFeedName(e.target.value)}/>
                    <button>Add a Feed</button>
                </form>
            </div>

            <FeedContent
                feeds={feedItems}
                markAsRead={() => markAsRead(feedItems.id)}
                items={feeds}
            />
        </div>
    )
}