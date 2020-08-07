import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function FeedItem({ title, onClick, onDelete, feedCount }) {
    return (
        <div className='sidebar--feed-item'>
            <li title={title} style={{ paddingRight: '15px'}} onClick={onClick} className='sidebar--feed-title'>
                {title.length > 25 ? title.substring(0, 24) + '...' : title} {feedCount}
            </li>
            <FontAwesomeIcon title='Delete Feed' className='sidebar--feed-delete' icon={faTrash} onClick={onDelete}/>
        </div>
    )
}