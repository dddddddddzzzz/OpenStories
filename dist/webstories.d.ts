import {default as JSONFeed, FeedItem, Author} from './jsonfeed'

interface WebStoriesFeed extends JSONFeed {
  _web_story?: WebStorySetup;
  items: WebStoryItem[];
}

interface WebStoryAuthor extends Author {
  name: string;
  _web_story?: WebStoryAuthorMetadata;
}

interface WebStoryItem extends FeedItem {
  authors?: WebStoryAuthor[];
  _web_story: ImageStory | VideoStory;
}

interface WebStorySetup {
  preview: Preview;
}

interface WebStoryAuthorMetadata {
  response_endpoints?: ResponseProtocol
}

interface ResponseProtocol {
  twitter?: string;
  email?: string;
  imessage?: string;
  telegram?: string;
}

interface WebStory {
  url: string;
  mime_type: string;
  date_expired?: string;
  preview?: Preview;
  reactions?: Reactions;
  senstivity_warning?: string;
}

interface Reactions {
  open_heart_urls?: string[];
}

interface Preview {
  blurhash?: string;
  color?: string;
}

interface ImageStory extends WebStory {
  type: 'image';
  alt: string;
  caption?: string;
}

interface VideoStory extends WebStory {
  type: 'video';
  transcript?: string;
  duration_in_seconds?: number;
}

export default WebStoriesFeed;
