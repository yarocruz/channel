import React from "react";

export default function FeedItem({ title, onClick, onDelete, feedCount }) {
    return (
        <div className='sidebar--feed-item'>
            <li title={title} style={{ paddingRight: '15px'}} onClick={onClick} className='sidebar--feed-title'>
                {title.length > 20 ? title.substring(0, 24) + '...' : title} <span className='sidebar--feed-item-count'>{feedCount}</span>
            </li>
            <p title='Delete Feed' className='sidebar--feed-delete' onClick={onDelete} >x</p>
        </div>
    )
}