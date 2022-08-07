import JSONFeed from './jsonfeed'

interface WebStoriesFeed extends JSONFeed {
  _web_story: WebStoryItem;
  _web_storybackground_color: string;
}

interface WebStoryItem {
  story: ImageStory | VideoStory;
  video?: VideoStory;
  blur_hash?: string;
  background_color?: string;
  senstivity_warning?: string;
}

interface WebStory {
  url: string;
  mime_type: string;
}

interface ImageStory extends WebStory {
  type: 'image';
  alt: string;
  caption: string;
}

interface VideoStory extends WebStory {
  type: 'video';
  transcript?: string;
  duration_in_seconds?: number;
}

export default WebStoriesFeed;
