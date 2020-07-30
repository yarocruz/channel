import React from "react";

export default function FeedContent({ feeds, display }) {
    return (
        <div>
            {feeds.length && display ?
                feeds.map((feed, i) => {
                    return feed.feedItems.map(item => (
                        <ul>
                            <li key={i}>
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