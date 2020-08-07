import React, { useState, useEffect } from "react";
import Parser from "rss-parser";
import FeedItem from "./FeedItem";
import FeedContent from "./FeedContent";
import { v4 } from 'uuid';

/*
    feeds to test out
    http://www.aaronsw.com/2002/feeds/pgessays.rss
    https://us1.campaign-archive.com/feed?u=faa8eb4ef3a111cef92c4f3d4&id=e505c88a2e
    https://us1.campaign-archive.com/feed?u=25a34f10515c4e9393e3da856&id=280158dda1
    `https://feeds.feedblitz.com/sethsblog`,
    `https://news.ycombinator.com/rss`,
    `https://whatthefuck.is/feed.xml`,
    http://feeds.feedburner.com/codinghorror?format=xml
    https://www.taniarascia.com/rss.xml
    https://cprss.s3.amazonaws.com/javascriptweekly.com.xml
*/

export default function Sidebar() {

    const CORS_PROXY = `https://cors-anywhere.herokuapp.com/`;

    const [feeds, setFeeds] = useState([]);
    const [feedName, setFeedName ] = useState('');
    const [feedItems, setFeedItems] = useState(
        {
            id: '',
            title: '',
            description: '',
            items: []
        }
    );

    useEffect(() => {
        const savedFeeds = JSON.parse(localStorage.getItem('feeds'));
        //console.log(savedFeeds);
        if (savedFeeds === null) return;
        setFeeds(savedFeeds)
    }, []);

    const addFeed = (e) => {
        e.preventDefault();

        let parser = new Parser();
        parser.parseURL(`${CORS_PROXY}${feedName}`, (err, feed) => {
            console.log(feed);
            if (err) {
                alert('Must enter a valid RSS feed');
                throw err;
            }
            console.log(feed);
            let feedData = {
                id: v4(),
                feedRSS: feedName,
                feedTitle: feed.title,
                feedDesc: feed.description,
                feedUrl: feed.link,
                feedItems: feed.items.length
            }
            localStorage.setItem('feeds', JSON.stringify([...feeds, feedData]));
            setFeeds([...feeds, feedData ]);
        }).catch(err => {
            console.log(err);
        });
        console.log(feeds);

        setFeedName('');
    }

    const markAsRead = (id) => {
        let selected = feeds.filter(item => item.id === id);
        let read = selected[feedItems];
        console.log(read);
    }

    const deleteFeed = (id) => {
        let rest = feeds.filter(item => item.id !== id);
        console.log(rest);
        setFeeds([...rest])
        localStorage.setItem('feeds', JSON.stringify([...rest]));
    }

    const renderSelectFeed = (id) => {
        let selected = feeds.filter(feed => feed.id === id);
        //console.log(selected);
        let parser = new Parser();
        parser.parseURL(`${CORS_PROXY}${selected[0].feedRSS}`, (err, feed) => {
            if (err) throw err;
            setFeedItems({
                id: selected[0].id,
                title: feed.title,
                description: feed.description,
                items: [ feed.items]
            });
            console.log(feedItems)

        }).catch(err => console.log(err));
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

            <FeedContent feeds={feedItems} markAsRead={() => markAsRead(feedItems.id)}/>
        </div>
    )
}