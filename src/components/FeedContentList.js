import React from "react";

export default function FeedContentList ({ item, onClick }) {
    let pubDates = new Date(item.pubDate);
    let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return (
        <>
            <li onClick={onClick} className='content-links--item' >
                <a href={item.link} target='_blank' rel='noopener noreferrer'>{item.title} <span className='content-links--item-date'>- {pubDates.toLocaleDateString('en-US', options)}</span> </a>
            </li>
        </>
    )
}