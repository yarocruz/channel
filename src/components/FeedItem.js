import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function FeedItem({ title, onClick, onDelete, feedCount }) {
    return (
        <div className='sidebar--feed-item'>
            <li style={{ paddingRight: '15px'}} onClick={onClick} className='sidebar--feed-title'>
                {title} <span className='sidebar--feed-count'>{feedCount}</span>
            </li>
            <FontAwesomeIcon className='sidebar--feed-delete' icon={faTrash} onClick={onDelete}/>
        </div>
    )
}