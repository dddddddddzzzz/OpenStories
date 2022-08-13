import {default as JSONFeed, FeedItem, Author} from './jsonfeed'

interface WebStoriesFeed extends JSONFeed {
  _web_story: WebStoryMetadata;
  items: WebStoryItem[];
}

interface WebStoryAuthor extends Author {
  name: string;
}

interface WebStoryItem extends FeedItem {
  authors?: WebStoryAuthor[];
  _web_story: ImageStory | VideoStory;
}

interface WebStoryMetadata {
  preview?: Preview;
  version: `${number}.${number}.${number}${`-${string}` | ''}`;
}

interface WebStory {
  url: string;
  date_expired?: string;
  preview?: Preview;
  reactions?: Reactions;
  senstivity_warning?: string;
  duration_in_seconds?: number;
}

interface Reactions {
  open_heart_urls?: string[];
}

interface Preview {
  blurhash?: string;
  color?: string;
}

interface ImageStory extends WebStory {
  mime_type: `image/${string}`;
  alt: string;
  caption?: string;
}

interface VideoStory extends WebStory {
  mime_type: `video/${string}`;
  webvtt?: `WEBVTT\n${string}`;
}

export default WebStoriesFeed;
