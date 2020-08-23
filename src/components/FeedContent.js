import React from "react";
import FeedContentList from "./FeedContentList";
import { v4 } from 'uuid';
import Spinner from "../utils/Spinner";

export default function FeedContent({ feeds, markAsRead, items, loading }) {

    const handleSelected = (id, i) => {
        let selected = items.filter(item => {
            return item.id === id;
        })

        if (selected[0].items[i].read === false) {
            selected[0].items[i].read = true;
            feeds.items[i].read = true;
            markAsRead()
        }
        console.log(selected[0].items[i])
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
                                onClick={() => handleSelected(feeds.id, i)}
                            />

                        )) : loading ? <Spinner /> : <li>Select a feed</li>
                }
            </ul>
        </div>
    )
}