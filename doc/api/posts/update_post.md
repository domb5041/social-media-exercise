# Posts API

## Update post

### PATCH /api/posts/:id

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| body | Body | false | post |
| state | State | false | post |

### Request

#### Headers

<pre>Accept: application/json
Content-Type: application/json
Host: localhost:3000
Cookie: </pre>

#### Route

<pre>PATCH /api/posts/1</pre>

#### Body

<pre>{"post":{"state":"published"}}</pre>

### Response

#### Headers

<pre>X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Download-Options: noopen
X-Permitted-Cross-Domain-Policies: none
Referrer-Policy: strict-origin-when-cross-origin
Content-Type: application/json; charset=utf-8
Vary: Accept
ETag: W/&quot;704bf6325ff761f32983bb59c237d44e&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 8ab856b7-cc3a-4153-a93f-a61dabb5e0cd
X-Runtime: 0.009360
Content-Length: 169</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "post": {
    "id": 1,
    "user_id": 1,
    "body": "My First Post",
    "state": "published",
    "image_url": null,
    "updated_at": "2021-03-12T11:29:57.185Z",
    "created_at": "2021-03-12T11:29:57.175Z"
  }
}</pre>
