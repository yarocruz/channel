import React, { useState } from "react";
import FeedContentList from "./FeedContentList";
import { v4 } from 'uuid';

export default function FeedContent({ feeds, markAsRead }) {
    const [clicked, setClicked] = useState([])

    const handleSelected = (i) => {
        setClicked([...clicked, clicked[i] = true])
        markAsRead()
        console.log(clicked)
    }

    return (
        <div>
            <ul className='content-links'>
                <div className='content-links--info'>
                    <h1>{feeds.title}</h1>
                    <p>{feeds.description}</p>
                </div>
                {feeds.items.length ?
                    feeds.items.map((feed) => {
                        return feed.map((item, i) => (
                            <FeedContentList
                                key={v4()}
                                item={item}
                                onClick={(i) => handleSelected(i)}
                                isClicked={clicked[i]}
                            />

                        ))
                    }) :
                    <li>Select a Feed</li>
                }
            </ul>
        </div>
    )
}