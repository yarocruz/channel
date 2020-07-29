import Parser from "rss-parser";

const CORS_PROXY = `https://cors-anywhere.herokuapp.com/`;

let parser = new Parser();

const parseFeed = ((feedUrl) => {
    parser.parseURL(`${CORS_PROXY}${feedUrl}`, (err, feed) => {
        if (err) throw err;
        console.log(feed)
    })
});

export default parseFeed;