import {default as JSONFeed, FeedItem, Author} from './jsonfeed'

interface OpenStoriesFeed extends JSONFeed {
  _open_stories: OpenStoryMetadata;
  items: OpenStoryItem[];
}

interface OpenStoryAuthor extends Author {
  name: string;
  url: string;
}

interface OpenStoryItem extends FeedItem {
  authors?: OpenStoryAuthor[];
  _open_stories: ImageStory | VideoStory;
}

interface OpenStoryMetadata {
  preview?: Preview;
  version: SupportedVersions;
}

type SupportedVersions = '0.0.9'

interface OpenStory {
  url: string;
  date_expired?: string;
  preview?: Preview;
  reactions?: Reactions;
  content_warning?: string;
  duration_in_seconds?: number;
}

interface Reactions {
  open_heart_urls?: string[];
}

interface Preview {
  blurhash?: string;
  color?: string;
}

interface ImageStory extends OpenStory {
  mime_type: `image/${string}`;
  alt: string;
  caption?: string;
}

interface VideoStory extends OpenStory {
  mime_type: `video/${string}`;
  title: string;
  tracks?: Track[];
}

interface Track {
  url: string;
  srclang?: string;
  label?: string;
  kind?: 'captions' | 'subtitles' | 'chapters';
}

export default OpenStoriesFeed;
