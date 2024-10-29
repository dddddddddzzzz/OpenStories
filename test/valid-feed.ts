import OpenStoriesFeed from "../dist/openstories"

const validFeed: OpenStoriesFeed = {
  version: 'https://jsonfeed.org/version/1.1',
  title: 'Valid feed',
  home_page_url: 'https://example.com',
  feed_url: 'https://example.com/feed.json',
  _open_stories: {
    version: '0.0.9',
  },
  items: [{
    id: 'a2',
    content_text: 'Text',
    authors: [{name: 'muan', url: 'https://muan.co'}, {name: 'robb', url: 'https://robb.is'}],
    _open_stories: {
      date_expired: '2099-01-01T00:00:00+08:00',
      mime_type: 'image/jpg',
      url: 'https://photos.muan.dev/cdn-cgi/imagedelivery/-wp_VgtWlgmh1JURQ8t1mg/9324c569-55a2-4f28-4c0e-dbf5ad04d000/public',
      alt: 'A crocodile in stuffed animal form sitting on a scooter.',
      preview: { color: 'purple' },
      reactions: {
        open_heart_urls: ['https://httpbin.org/post?id=x']
      }
    }
  },{
    id: 'a1',
    content_text: 'Text',
    authors: [{name: 'robb', url: 'https://robb.is'}],
    _open_stories: {
      content_warning: 'Apex predator',
      mime_type: 'image/jpg',
      url: 'https://photos.muan.dev/cdn-cgi/imagedelivery/-wp_VgtWlgmh1JURQ8t1mg/9324c569-55a2-4f28-4c0e-dbf5ad04d000/public',
      alt: 'A crocodile in stuffed animal form sitting on a scooter.',
    }
  },{
    id: 'a1',
    content_text: 'Text',
    _open_stories: {
      content_warning: 'Apex predator',
      mime_type: 'video/mp4',
      url: 'https://photos.muan.dev/cdn-cgi/imagedelivery/-wp_VgtWlgmh1JURQ8t1mg/9324c569-55a2-4f28-4c0e-dbf5ad04d000/public',
      title: 'A cool video.',
      tracks: [{
        url: 'https://example.com',
        kind: 'captions'
      }]
    }
  }]
}

console.log(validFeed)
