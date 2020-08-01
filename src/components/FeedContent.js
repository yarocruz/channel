import React from "react";
import { v4 } from 'uuid';

export default function FeedContent({ feeds }) {
    return (
        <div>
            {feeds.length ?
                feeds.map(feed => {
                    return feed.map(item => (
                        <ul className='content-links'>
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