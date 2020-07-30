import React from "react";
import { v4 } from 'uuid';

export default function FeedContent({ feeds, display }) {
    return (
        <div>
            {feeds.length && display ?
                feeds.map(feed => {
                    return feed.feedItems.map(item => (
                        <ul>
                            <li key={v4()}>
                                <a  href={item.link}>{item.title}</a>
                            </li>
                        </ul>
                    ))
                }) :
                <li>No feeds yet.</li>
            }
        </div>
    )
}