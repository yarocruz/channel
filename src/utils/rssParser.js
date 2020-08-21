import Parser from "rss-parser";
import {v4} from "uuid";

const CORS_PROXY = `https://cors-anywhere.herokuapp.com/`;
let parser = new Parser();

export const fetchDefaultFeed = async () => {
    let defaultFeed = await parser.parseURL(`${CORS_PROXY}https://feeds.feedblitz.com/sethsblog`);
    return {
        id: v4(),
        feedRSS: 'https://feeds.feedblitz.com/sethsblog',
        feedTitle: defaultFeed.title,
        feedDesc: defaultFeed.description,
        feedUrl: defaultFeed.link,
        feedItems: defaultFeed.items.length,
        items: defaultFeed.items.map(obj => ({...obj, read: false})) // adding property to keep track of read items
    };
}

export const fetchNewFeed = async (feedName) => {
    let newFeed = await parser.parseURL(`${CORS_PROXY}${feedName}`);
    return {
        id: v4(),
        feedRSS: feedName,
        feedTitle: newFeed.title,
        feedDesc: newFeed.description,
        feedUrl: newFeed.link,
        feedItems: newFeed.items.length,
        items: newFeed.items.map(obj => ({...obj, read: false})) // adding property to keep track of read items
    };
}
