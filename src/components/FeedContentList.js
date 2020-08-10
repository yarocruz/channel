import React from "react";

export default function FeedContentList ({ item, onClick, isClicked }) {

    return (
        <>
            <li onClick={!isClicked ? onClick : null} className='content-links--item' >
                <a href={item.link} target='_blank' rel='noopener noreferrer'>{item.title} </a>
            </li>
        </>
    )
}