# Open Stories

OpenStories is an syndication format for distributing stories to friends and families.

Stories are small pieces of media – such as images and video clips – with a 9:16 aspect ratio.

OpenStories is a superset of [JSON Feed version 1.1](https://www.jsonfeed.org/), that means every valid OpenStories feed is a valid v1.1 JSON Feed.

You can [validate a `OpenStoriesFeed` in the TypeScript Playground](https://www.typescriptlang.org/play?target=99&jsx=0&suppressImplicitAnyIndexErrors=true#code/JYWwDg9gTgLgBAbwOoFMBGBlG1goM4BiKKAJgL5wBmUEIcA5AO7p7ZS54C0MXMAnmHz0AsACgxAYwgA7VnABuAQwA2wEkVIAuOKkxsOGknAC8iMXDgAieSih5gMy9ssALGDDB5NAem8ArPBlKYhIAOmgAc28bOwdpbwBGUITLABpzKxhgGGUUJysAARAAV0Vpejw4Vhx8NIzLYClpfNd3Tx9vCOyXYrRQqRBvErLQsGkIutELV1oUAH0wRQj54qhlFrcPL19h6X6Ib2r2fFCAx3SpqxJ8CXYwLMdnLBq8UMnp7JQQPHyAbQyLAgARYrGoWgAWACcAHYJOCAKxoSGceHg8EADk44LQADYAEycSgABhIBIAzEToWS0GgiWSUPCiUT3iDpiRFDB5mBeqo8C5SC08US8QSiZiEgkACoJcGaBJkzTwskAajFmiZaTgwOmMCWP20v0sABlgMFNZYAEIQCAAax+qSsAAlgBEXKpXTBLABdC6s6ZNTnSGBzNwgdbOAA8oAiVSgEmM9E27V8YBcEGwr12oWu8m8EhI0k4Ei63lAS1IKFUMT43k4jDAcwAahEYEhlBEQC4EgApACqACUAIromAJEBRKGwhFIlFozHY-GEknkynU2n0xlE7zctCqCT0OAqGAJgDCiigJEqZSMaGtdodAEE8Hgvru+HA0O+AHIcxR8xRwBaNCMNIDrXnAkouMAlQmu4uRwA+sAfu+ADSHIoIB7ARBEeBgcoMgxow3RVLMH53iA552oe0hGKwjQ2rYlQyIeVTYBAyihHAACy+B4OWH69Lu+BwBAMTKIo74wPycCpumEAOsA0gSMoxQkIpMYAXy0DwE0MR8Q80iHrexTwGmjBwCeokoEGUDvuBXHAMo2CGShKB8NIwnnhht7sOMcBEVJcAFH4+EXmB0jpvyUAiR5LFQCgAwgNZ7IGVQ0AQVBMHZDkGGIfA1C0EFER+PoNrACM9AAHwsqyliKCZaZ2H8CCWNIihJS0XHFJwD6GSeUEQMU5qrOGVhJtsQylHsUiWGQPralYczMGgcxHHw+RApcfqZAIeTOGWyw1X6lggKA8z8IILQHSg-iCBMvrbVYI0bG0E2yRmoRZjmeYFkWJbXdcVa2DWdYNs2rbtp2PYDsOo7jt4k5woiyKohiWK4gSxKkpwFJUjSdIMky248o0R21UeLRnheV40WRtq4Qhz6vso76fnAP66v+mEQCB4VGJB0FwLBOUIUhbNoZymEujheEEf5xGBEldM2hRUBUeBdESAxdgxSx1TsZxPHPvxaCCbkTFiRJcBSRh73yXAinKap6l641OkyHpHJxEZg2mTzFlWTZdm0w5TnMa57mefFZG+YRxHBaFJDhZFtgxRhAHxYlyVe8xlDpQLWVwblSEFXQBTFaV5V7GTIKWBIij3HELS9XAKAAB4SJWuRBnAFGOXA7J8AAhDXbLoXM7dgMA8UkIKwqiuKeLSrK8qKiqaoag922WPFigSAZ+pmFtj2WBAgjSCGKDnsGI2H4a40dKoDGZlN2YoLmAD8ajGIj04o3O6NFxYxXHjdchNmRegWhYMgC0YHHzgRYSBog4GSBkIEXIoR8IRAABRKFUOoEIABKMQQA).

## Example

A minimum `OpenStoriesFeed` may look like the following; note, specficially the required `_open_stories` object for each `item`.

```js
{
  version: 'https://jsonfeed.org/version/1.1',
  title: 'Valid feed',
  home_page_url: 'https://example.com',
  feed_url: 'https://example.com/feed.json',
  items: [{
    id: 'a1',
    content_text: 'Text',
    authors: [{name: 'muan'}],
    _open_stories: {
      type: 'image',
      mime_type: 'image/jpg',
      url: 'https://photos.muan.dev/cdn-cgi/imagedelivery/-wp_VgtWlgmh1JURQ8t1mg/9324c569-55a2-4f28-4c0e-dbf5ad04d000/public',
      alt: 'Sky'
    }
  }, {
    id: 'a2',
    content_text: 'Text 2',
    authors: [{name: 'muan'}],
    _open_stories: {
      type: 'image',
      mime_type: 'image/jpg',
      url: 'https://photos.muan.dev/cdn-cgi/imagedelivery/-wp_VgtWlgmh1JURQ8t1mg/9324c569-55a2-4f28-4c0e-dbf5ad04d000/public',
      alt: 'Sky'
    }
  }]
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
- `version`: (required, _String_): The version of the Open Stories used for this feed. Currently, only `0.0.6` is supported.

### Items

Items represent stories in the feed. Items in an Open Stories feed match Items of a JSON Feed with the following additions:

- `_open_stories` (required, either _Image Story_ or _Video Story_): The story this item represents.
- `authors`: (optional, an array of _Open Stories Authors_): The authors that created this item.

Addtionally, authoring software of Open Stories is encouraged to populate the `content_html` field of the Item with an approximation of the stories contents, e.g. an `<img>` point at the same `url` as the Item's `_open_stories.url`, with an `alt` attribute matching `_open_stories.alt`.

```html
<!-- TODO: Example -->
```

### Image Story

Common fields between Image Stories and Video Stories:

- `url`: (required, _String_): The URL of the image. Expected to be in a 9:16 aspect ratio.
- `date_expired` (optional, _String_): The date at which the story did or will expire. Clients are encouraged not to display stories after this date.
- `preview` (optional, _Preview_): Data that helps the client display a preview while this image is loading.
- `reactions` (optional, _Reactions_): Data that describes how clients can react to this image.
- `senstivity_warning` (optional, _String_): If present, clients should display this warning before showing the story to the user.
- `duration_in_seconds` (optional, _Number_): How long the story should be displayed for. Clients are free to adjust this number.
- `mime_type` (required, _String_ beginning with `image/${string}`): the mime-type of the image.
- `alt` (required, _String_): The alt text of the image.
- `caption` (optioal, _String_): The caption of the image.

Fields unique to Image Story:

- `mime_type` (required, _String_ beginning with `image/${string}`): the mime-type of the image.
- `alt` (required, _String_): The alt text of the image.
- `caption` (optioal, _String_): The caption of the image.

### Video Story

Common fields between Image Stories and Video Stories:

- `url`: (required, _String_): The URL of the video. Expected to be in a 9:16 aspect ratio.
- `date_expired` (optional, _String_): The date at which the story did or will expire. Clients are encouraged not to display stories after this date.
- `preview` (optional, _Preview_): Data that helps the client display a preview while this video is loading.
- `reactions` (optional, _Reactions_): Data that describes how clients can react to this video.
- `senstivity_warning` (optional, _String_): If present, clients should display this warning before showing the story to the user.
- `duration_in_seconds` (optional, _Number_): How long the story should be displayed for. Clients are free to adjust this number.
- `mime_type` (required, _String_ beginning with `video/${string}`): the mime-type of the video.
- `alt` (required, _String_): The alt text of the video.
- `caption` (optioal, _String_): The caption of the video.

Fields unique to Video Story:

- `mime_type` (required, _String_ beginning with `image/`): the mime-type of the video.
- `webvtt` (optional, _String_ beginning with `WEBVTT\n`): The VTT of the video.

### Authors

Authors represent people that created the stories in the feed. Authors in an Open Stories feed match Authors of a JSON Feed with the following additions:

- `name` (required, _String_): Unlike in JSON Feed, `name` is a required field in Open Stories feeds.

### Preview

A _Preview_ is a light-weight representation that allows clients to construct a more pleasant preview image while the actual story is loading.

- `blurhash` (optional, _String_): A [blurhash representation](https://blurha.sh/) of this item, at a 9:16 aspect ratio.
- `color` (optional, _String_): A solid color that can be used as a placeholder to this story.

### Reactions

_Reactions_ allow a client to communicate back to the authors of a story.

- `open_heart_urls` (optional, _String_): A Open Hearts URL.
