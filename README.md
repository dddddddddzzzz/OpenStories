# Open Stories

Open Stories is a syndication format for distributing stories to friends and families.

Stories are small pieces of media – such as images and video clips – with a 9:16 aspect ratio.

OpenStories is a superset of [JSON Feed version 1.1](https://www.jsonfeed.org/), that means every valid OpenStories feed is a valid v1.1 JSON Feed.

You can validate a `OpenStoriesFeed` with its TypeScript definitions in [`openstories-types`](https://npmjs.com/package/openstories-types).

## Clients

- [`<open-stories>`](https://github.com/dddddddddzzzz/open-stories-element): A custom element that will display a single `OpenStoriesFeed`'s content.

## Example

A minimal `OpenStoriesFeed` may look like the following; note, specifically the required `_open_stories` object for each `item`.

```json
{
  "version": "https://jsonfeed.org/version/1.1",
  "title": "Valid feed",
  "_open_stories": {
    "version": "0.0.9"
  },
  "items": [
    {
      "id": "a1",
      "content_text": "Text",
      "authors": [{"name": "muan", "url": "https://muan.co"}],
      "_open_stories": {
        "mime_type": "image/jpg",
        "url": "https://example.com/a1.jpg",
        "alt": "Sky"
      }
    },
    {
      "id": "a2",
      "content_text": "Text 2",
      "authors": [{"name": "muan", "url": "https://muan.co"}],
      "_open_stories": {
        "mime_type": "image/jpg",
        "url": "https://example.com/a2.jpg",
        "alt": "Sky"
      }
    }
  ]
}
```

## An Open Stories feed

### Top-level

The top level object of the feed matches that of a JSON Feed with the following additions:

- `_open_stories` (required, _Open Stories Metadata_): The _Open Stories Metadata_ of this feed.
- `items`: (required, an array of _Open Stories Items_): The items of the feed.

### Open Stories Metadata

Metadata that identifies an Open Stories feed

- `preview` (optional, _Preview_): Data that helps clients display a preview of the feed while loading its items.
- `version`: (required, _String_): The version of the Open Stories used for this feed. Currently, only `0.0.9` is supported.

### Items

Items represent stories in the feed. Items in an Open Stories feed match Items of a JSON Feed with the following additions:

- `_open_stories` (required, either [_Image Story_](#image-story) or [_Video Story_](#video-story)): The story this item represents.
- `authors`: (optional, an array of [_Open Stories Authors_](#authors): The authors that created this item.

Addtionally, authoring software of Open Stories is encouraged to populate the `content_html` field of the Item with an approximation of the stories contents, e.g. an `<img>` point at the same `url` as the Item's `_open_stories.url`, with an `alt` attribute matching `_open_stories.alt`.

```html
<img src='{{ item._open_stories.url }}' alt='{{ item._open_stories.alt }}'>
{{ item._open_stories.caption }}
```

### Image Story

Common fields between Image Stories and Video Stories:

- `url`: (required, _String_): The URL of the image. Expected to be in a 9:16 aspect ratio.
- `date_expired` (optional, _String_): The date at which the story did or will expire. Clients are encouraged not to display stories after this date.
- `preview` (optional, [_Preview_](#preview)): Data that helps the client display a preview while this image is loading.
- `reactions` (optional, [_Reactions_](#reactions)): Data that describes how clients can react to this image.
- `content_warning` (optional, _String_): If present, clients should display this warning before showing the story to the user.
- `duration_in_seconds` (optional, _Number_): How long the story should be displayed for. Clients are free to adjust this number.
- `alt` (required, _String_): The alt text of the image.
- `caption` (optional, _String_): The caption of the image.

Fields unique to Image Story:

- `mime_type` (required, _String_ beginning with `image/${string}`): the MIME type of the image.

### Video Story

Common fields between Image Stories and Video Stories:

- `url`: (required, _String_): The URL of the video. Expected to be in a 9:16 aspect ratio.
- `date_expired` (optional, _String_): The date at which the story did or will expire. Clients are encouraged not to display stories after this date.
- `preview` (optional, _Preview_): Data that helps the client display a preview while this video is loading.
- `reactions` (optional, _Reactions_): Data that describes how clients can react to this video.
- `content_warning` (optional, _String_): If present, clients should display this warning before showing the story to the user.
- `duration_in_seconds` (optional, _Number_): How long the story should be displayed for. Clients are free to adjust this number.
- `alt` (required, _String_): The alt text of the video.
- `caption` (optional, _String_): The caption of the video.

Fields unique to Video Story:

- `mime_type` (required, _String_ beginning with `video/`): the MIME type of the video.
- `webvtt` (optional, _String_ beginning with `WEBVTT\n`): The VTT of the video.

### Authors

Authors represent people that created the stories in the feed. Authors in an Open Stories feed match Authors of a JSON Feed with the following additions:

- `name` (required, _String_): Unlike in JSON Feed, `name` is a required field in Open Stories feeds.
- `url` (required, _String_): Unlike in JSON Feed, `url` is a required field in Open Stories. `url` is expected to uniquely identify the author across feeds and items.

### Preview

A _Preview_ is a light-weight representation that allows clients to construct a more pleasant preview image while the actual story is loading.

- `blurhash` (optional, _String_): A [blurhash representation](https://blurha.sh/) of this item, at a 9:16 aspect ratio.
- `color` (optional, _String_): A solid color that can be used as a placeholder to this story.

### Reactions

_Reactions_ allow a client to communicate back to the authors of a story.

- `open_heart_urls` (optional, _String_): A [Open Heart](https://github.com/dddddddddzzzz/OpenHeart) URL.
