import React, { useState } from "react";
import Parser from "rss-parser";
import FeedItem from "./FeedItem";
import FeedContent from "./FeedContent";

export default function Sidebar() {
    const [feeds, setFeeds] = useState([]);
    const [feedName, setFeedName ] = useState('');

    const addFeed = (e) => {
        e.preventDefault();
        const CORS_PROXY = `https://cors-anywhere.herokuapp.com/`;
        let parser = new Parser();
        parser.parseURL(`${CORS_PROXY}${feedName}`, (err, feed) => {
            if (err) throw err;
            console.log(feed);
            let feedData = {
                feedTitle: feed.title,
                feedUrl: feed.link,
                feedItems: feed.items
            }
            setFeeds([...feeds, feedData ]);
        })

        console.log(feeds);
        setFeedName('');
    }

    return (
        <div className='main-container'>
            <div className="sidebar">
                <ul className="sidebar--feed-list">
                    {feeds.length ?
                        feeds.map((feed, i) => (
                            <FeedItem
                                title={feed.feedTitle}
                                key={i}
                                getItems={() => console.log(feed.feedUrl)}
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
            <FeedContent feeds={feeds}/>
        </div>
    )
}