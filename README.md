# webstories-ts-types

`WebStoriesFeed` is an extended version of [`JSONFeed`](https://jsonfeed.org), which aims to standardize a feed format built speficially for a type of media similar to an Instagram story.

You can [validate a `WebStoriesFeed` in the TypeScript Playground](https://www.typescriptlang.org/play?target=99&jsx=0&suppressImplicitAnyIndexErrors=true#code/JYWwDg9gTgLgBAbwOoFMBGBlG1goM4BiKKAJgL5wBmUEIcA5AO7p7ZS54C0MXMAnmHz0AsACgxAYwgA7VnABuAQwA2wEkVIAuOKkxsOGknAC8iMXDgAieSih5gMy9ssALGDDB5NAem8ArPBlKYhIAOmgAc28bOwdpbwBGUITLABpzKxhgGGUUJysAARAAV0Vpejw4Vhx8NIzLYClpfNd3Tx9vCOyXYrRQqRBvErLQsGkIutELV1oUAH0wRQj54qhlFrcPL19h6X6Ib2r2fFCAx3SpqxJ8CXYwLMdnLBq8UMnp7JQQPHyAbQyLAgARYrGoWgAWACcAHYJOCAKxoSGceHg8EADk44LQADYAEycSgABhIBIAzEToWS0GgiWSUPCiUT3iDpiRFDB5mBeqo8C5SC08US8QSiZiEgkACoJcGaBJkzTwskAajFmiZaTgwOmMCWP20v0sABlgMFNZYAEIQCAAax+qSsAAlgBEXKpXTBLABdC6s6ZNTnSGBzNwgdbOAA8oAiVSgEmM9E27V8YBcEGwr12oWu8m8EhI0k4Ei63lAS1IKFUMT43k4jDAcwAahEYEhlBEQC4EgApACqACUAIromAJEBRKGwhFIlFozHY-GEknkynU2n0xlE7zctCqCT0OAqGAJgDCiigJEqZSMaGtdodAEE8Hgvru+HA0O+AHIcxR8xRwBaNCMNIDrXnAkouMAlQmu4uRwA+sAfu+ADSHIoIB7ARBEeBgcoMgxow3RVLMH53iA552oe0hGKwjQ2rYlQyIeVTYBAyihHAACy+B4OWH69Lu+BwBAMTKIo74wPycCpumEAOsA0gSMoxQkIpMYAXy0DwE0MR8Q80iHrexTwGmjBwCeokoEGUDvuBXHAMo2CGShKB8NIwnnhht7sOMcBEVJcAFH4+EXmB0jpvyUAiR5LFQCgAwgNZ7IGVQ0AQVBMHZDkGGIfA1C0EFER+PoNrACM9AAHwsqyliKCZaZ2H8CCWNIihJS0XHFJwD6GSeUEQMU5qrOGVhJtsQylHsUiWGQPralYczMGgcxHHw+RApcfqZAIeTOGWyw1X6lggKA8z8IILQHSg-iCBMvrbVYI0bG0E2yRmoRZjmeYFkWJbXdcVa2DWdYNs2rbtp2PYDsOo7jt4k5woiyKohiWK4gSxKkpwFJUjSdIMky248o0R21UeLRnheV40WRtq4Qhz6vso76fnAP66v+mEQCB4VGJB0FwLBOUIUhbNoZymEujheEEf5xGBEldM2hRUBUeBdESAxdgxSx1TsZxPHPvxaCCbkTFiRJcBSRh73yXAinKap6l641OkyHpHJxEZg2mTzFlWTZdm0w5TnMa57mefFZG+YRxHBaFJDhZFtgxRhAHxYlyVe8xlDpQLWVwblSEFXQBTFaV5V7GTIKWBIij3HELS9XAKAAB4SJWuRBnAFGOXA7J8AAhDXbLoXM7dgMA8UkIKwqiuKeLSrK8qKiqaoag922WPFigSAZ+pmFtj2WBAgjSCGKDnsGI2H4a40dKoDGZlN2YoLmAD8ajGIj04o3O6NFxYxXHjdchNmRegWhYMgC0YHHzgRYSBog4GSBkIEXIoR8IRAABRKFUOoEIABKMQQA).

A minimum `WebStoriesFeed` may look like the following; note, specficially the required `_web_story` object for each `item`.

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
    _web_story: {
      type: 'image',
      mime_type: 'image/jpg',
      url: 'https://photos.muan.dev/cdn-cgi/imagedelivery/-wp_VgtWlgmh1JURQ8t1mg/9324c569-55a2-4f28-4c0e-dbf5ad04d000/public',
      alt: 'Sky'
    }
  }, {
    id: 'a2',
    content_text: 'Text 2',
    authors: [{name: 'muan'}],
    _web_story: {
      type: 'image',
      mime_type: 'image/jpg',
      url: 'https://photos.muan.dev/cdn-cgi/imagedelivery/-wp_VgtWlgmh1JURQ8t1mg/9324c569-55a2-4f28-4c0e-dbf5ad04d000/public',
      alt: 'Sky'
    }
  }]
}
```

