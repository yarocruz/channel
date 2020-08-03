import React from "react";

export default function FeedItem({ title, onClick, onDelete }) {
    return (
        <div>
            <li onClick={onClick} className='sidebar--feed-title'>{title}</li>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}