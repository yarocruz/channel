import React from "react";
import Navbar from "../components/Navbar";
import AddFeed from '../assets/add-feed.png';
import DeleteFeed from '../assets/delete-feed.png';

export default function Guide() {
    return (
        <>
            <Navbar />
            <div className='guide-container'>
                <div className='guide-container--content'>
                    <h2>How to Add a Feed</h2>

                    <img style={{ maxWidth: '100%'}} src={AddFeed} alt="screenshot of input field"/>
                    <p>Adding a feed is pretty straight forward. All you need to do is to make sure
                        you're typing, most likely pasting, a valid rss feed link. If the feed is not
                        valid, you will get a browser alert (currently working on nicer solution) indicating that
                        the feed is not valid. A typical feed link could look like this <a href="https://whatthefuck.is/feed.xml">https://whatthefuck.is/feed.xml</a> Just make sure the link
                        is an actual rss feed address instead of the url of page. Most blogs have an
                        RSS feed link somewhere in their navigation. Be aware however some sites bury them in
                        the footer somewhere. Some sites simply don't have an RSS feed.</p>

                    <h2>Deleting a Feed</h2>
                    <img style={{ maxWidth: '100%'}} src={DeleteFeed} alt="screenshot of input field"/>
                    <p>To delete a feed simply hover and click the x.</p>

                    <h2>How this App is Working</h2>
                    <p>This app is still a work in progress and at the moment it is best viewed on desktop sized screens. It's using the browser's localStorage to make the feeds you add persist.
                        I added the feature that keeps track of the items you read, but it's currently buggy. I'm hoping
                        to keep adding features. It's built with React. If you're a coder and want to collaborate or give me
                        some pointers checkout the <a href="https://github.com/yarocruz/channel">code at Github</a> and let me know.</p>
                </div>
            </div>
        </>
    )
}