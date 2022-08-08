import {default as JSONFeed, FeedItem, Author} from './jsonfeed'

interface WebStoriesFeed extends JSONFeed {
  _web_story: WebStorySetup;
  items: WebStoryItem[];
  authors: WebStoryAuthor[];
}

interface WebStoryAuthor extends Author {
  name: string;
  _web_story?: WebStoryAuthorMetadata;
}

interface WebStoryItem extends FeedItem {
  authors: WebStoryAuthor[];
  _web_story: WebStory
}

interface WebStorySetup {
  preview: Preview;
}

interface WebStoryAuthorMetadata {
  response_to?: ResponseProtocol
}

interface ResponseProtocol {
  twitter?: string;
  email?: string;
  imessage?: string;
  telegram?: string;
  open_heart_url?: string;
}

interface WebStory {
  story: ImageStory | VideoStory;
  preview: Preview;
  senstivity_warning?: string;
}

interface Preview {
  blurhash?: string;
  color?: string;
}

interface Media {
  url: string;
  mime_type: string;
}

interface ImageStory extends Media {
  type: 'image';
  alt: string;
  caption: string;
}

interface VideoStory extends Media {
  type: 'video';
  transcript?: string;
  duration_in_seconds?: number;
}

export default WebStoriesFeed;
