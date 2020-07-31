import React, { useState } from "react";
import Parser from "rss-parser";
import FeedItem from "./FeedItem";
import FeedContent from "./FeedContent";
import { v4 } from 'uuid';

/*
            feeds to test out
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
    const [feedItems, setFeedItems] = useState([]);

    const addFeed = (e) => {
        e.preventDefault();

        let parser = new Parser();
        parser.parseURL(`${CORS_PROXY}${feedName}`, (err, feed) => {
            if (err) throw err;
            console.log(feed);
            let feedData = {
                id: v4(),
                feedRSS: feedName,
                feedTitle: feed.title,
                feedUrl: feed.link,
            }
            setFeeds([...feeds, feedData ]);
        })

        console.log(feeds);
        setFeedName('');
    }

    const renderSelectFeed = (id) => {
        let selected = feeds.filter(feed => feed.id === id);
        let parser = new Parser();
        parser.parseURL(`${CORS_PROXY}${selected[0].feedRSS}`, (err, feed) => {
            if (err) throw err;
            setFeedItems([feed.items]);
            console.log(feedItems)
        })

    }

    return (
        <div className='main-container'>
            <div className="sidebar">
                <ul className="sidebar--feed-list">
                    {feeds.length ?
                        feeds.map((feed, i) => (
                            <FeedItem
                                title={feed.feedTitle}
                                key={feed.id}
                                onClick={() => renderSelectFeed(feed.id)}
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
            <FeedContent feeds={feedItems} />
        </div>
    )
}