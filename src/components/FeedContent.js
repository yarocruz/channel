import React from "react";
import { v4 } from 'uuid';

export default function FeedContent({ feeds }) {
    return (
        <div>
            <ul className='content-links'>
                {feeds.length ?
                    feeds.map(feed => {
                        return feed.map(item => (
                            <li key={v4()} className='content-links--item'>
                                <a  href={item.link}>{item.title}</a>
                            </li>
                        ))
                    }) :
                    <li>Select a Feed</li>
                }
            </ul>
        </div>
    )
}