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
  hubs?: Hub[];
  items: FeedItem[];
}

interface Hub {

}

interface Author {
  name?: string;
  url?: string;
  avatar?: string;
}

interface FeedItem {
}

export default JSONFeed
