import React, { useState } from "react";
import FeedContentList from "./FeedContentList";
import { v4 } from 'uuid';

export default function FeedContent({ feeds, markAsRead }) {
    const [read, setRead] = useState(false)


    return (
        <div>
            <ul className='content-links'>
                <div className='content-links--info'>
                    <h1>{feeds.title}</h1>
                    <p>{feeds.description}</p>
                </div>
                {feeds.items.length ?
                    feeds.items.map(feed => {
                        return feed.map(item => (
                            <FeedContentList markAsRead={read ? markAsRead : setRead(true)} key={v4()} item={item} read={read} />
                        ))
                    }) :
                    <li>Select a Feed</li>
                }
            </ul>
        </div>
    )
}