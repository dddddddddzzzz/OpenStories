interface JSONFeed {
  version: string;
  title: string;
  home_page_url?: string;
  feed_url?: string;
  description?: string;
  user_comment?: string;
  next_url?: string;
  icon?: string;
  favicon?: string;
  authors?: Author[];
  language?: string;
  expired?: boolean;
  hubs?: (RSSCloud | WebSubHub)[];
  items: FeedItem[];
}

interface Author {
  name?: string;
  url?: string;
  avatar?: string;
}

interface FeedItem {
  id: string;
  url?: string;
  external_url?: string;
  title?: string;
  content_html?: string;
  content_text?: string;
  summary?: string;
  image?: string;
  banner_image?: string;
  date_published?: string;
  date_modified?: string;
  authors?: Author[];
  tags?: string[];
  language?: string[];
  attachments?: Attachment[];
}

interface Attachment {
  url: string;
  mime_type: string;
  title?: string;
  size_in_bytes?: number;
  duration_in_seconds?: number;
}

// https://github.com/manton/JSONFeed/issues/136
interface RSSCloud {
  type: 'rssCloud';
  url: string;
}

// https://www.w3.org/TR/websub/#x5-1-subscriber-sends-subscription-request
interface WebSubHub {
  type: 'WebSub';
  url: string;
  topic: string;
  callback: string;
  mode: 'subscribe' | 'unsubscribe';
  lease_seconds?: number;
  secret?: string;
}

export default JSONFeed
