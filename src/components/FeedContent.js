import React, { useState } from "react";
import FeedContentList from "./FeedContentList";
import { v4 } from 'uuid';

export default function FeedContent({ feeds, markAsRead }) {
    const [clicked, setClicked] = useState([])

    const handleSelected = (i) => {
        // maybe in here setup localstorage to keep track of clicked items
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
                    feeds.items.map((feed, i) => (
                            <FeedContentList
                                key={v4()}
                                item={feed}
                                onClick={(i) => handleSelected(i)}
                                isClicked={clicked[i]}
                            />

                        )) : <li>Select a Feed</li>
                }
            </ul>
        </div>
    )
}