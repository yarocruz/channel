import Parser from "rss-parser";
import {v4} from "uuid";

const CORS_PROXY = `https://cors-anywhere.herokuapp.com/`;
let parser = new Parser();

const fetchDefaultFeed = async () => {
    let defaultFeed = await parser.parseURL(`${CORS_PROXY}https://news.ycombinator.com/rss`);
    return {
        id: v4(),
        feedRSS: 'https://news.ycombinator.com/rss',
        feedTitle: defaultFeed.title,
        feedDesc: defaultFeed.description,
        feedUrl: defaultFeed.link,
        feedItems: defaultFeed.items.length,
        items: defaultFeed.items.map(obj => ({...obj, read: false})) // adding property to keep track of read items
    };
}

export default fetchDefaultFeed;