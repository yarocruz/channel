import React, { useState } from "react";
import parseFeed from "../utils/rssParser";

export default function Sidebar() {
    const [feeds, setFeeds] = useState([]);
    const [feedName, setFeedName ] = useState('')

    const addFeed = async (e) => {
        e.preventDefault();
        setFeeds([...feeds, feedName ]);
        console.log(feeds);
        setFeedName('');
    }

    return (
        <div className="sidebar">
            <ul className="sidebar--feed-list">
                {feeds.length ?
                    feeds.map((feed, i) => (
                        <li className='sidebar--feed-title' key={i}>{feed}</li>
                    )) :
                    <li>No feeds yet.</li>
                }
            </ul>

            <form className="sidebar-form" onSubmit={addFeed} >
                <input type="text" value={feedName} onChange={e => setFeedName(e.target.value)}/>
                <button>Add a Feed</button>
            </form>
        </div>
    )
}