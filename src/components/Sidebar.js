import React from "react";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebar--feed-list">
                <li>Placeholder Feed</li>
            </ul>

            <form className="sidebar-form">
                <input type="text"/>
                <button>Add a Feed</button>
            </form>
        </div>
    )
}