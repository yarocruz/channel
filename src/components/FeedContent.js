import React, { useState } from "react";
import FeedContentList from "./FeedContentList";
import { v4 } from 'uuid';

export default function FeedContent({ feeds, markAsRead, items }) {
    // const [clicked, setClicked] = useState([])
    //
    // const handleSelected = (i) => {
    //     // maybe in here setup localstorage to keep track of clicked items
    //     setClicked([...clicked, clicked[i] = true])
    //     markAsRead()
    //     console.log(clicked)
    // }


    const handleSelected = (i) => {
        // maybe in here setup localstorage to keep track of clicked items
        if (items[i].items[i].read === false) {
            items[i].items[i].read = true;
            markAsRead()
        }
        console.log(items[i].items[i].read)


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
                                onClick={() => handleSelected(i)}
                                // isClicked={clicked[i]}
                            />

                        )) : <li>Select a Feed</li>
                }
            </ul>
        </div>
    )
}