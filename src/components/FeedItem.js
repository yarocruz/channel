import React from "react";

export default function FeedItem({ title, onClick }) {
    return (
        <li onClick={onClick} className='sidebar--feed-title'>{title}</li>
    )
}