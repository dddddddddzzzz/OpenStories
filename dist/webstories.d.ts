import JSONFeed from './jsonfeed'

interface WebStoriesFeed extends JSONFeed {
  _web_story: WebStoryItem
}

interface WebStoryItem {
}

export default WebStoriesFeed

