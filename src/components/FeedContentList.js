import React from "react";

export default function FeedContentList ({ item, onClick, isClicked }) {
    let formatedDate = item.pubDate.replace(/\d\d:\d\d:\d\d\D+/, '');
    return (
        <>
            <li onClick={!isClicked ? onClick : null} className='content-links--item' >
                <a href={item.link} target='_blank' rel='noopener noreferrer'>{item.title} <span className='content-links--item-date'>- {formatedDate}</span> </a>
            </li>
        </>
    )
}