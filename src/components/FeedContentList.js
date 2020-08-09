import React from "react";

export default function FeedContentList ({ markAsRead, item }) {

    return (
        <>
            <li onClick={markAsRead} className='content-links--item' >
                <a  href={item.link} target='_blank' rel='noopener noreferrer'>{item.title} </a>
            </li>
        </>
    )
}