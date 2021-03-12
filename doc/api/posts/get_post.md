# Posts API

## Get post

### GET /api/posts/:id
### Request

#### Headers

<pre>Accept: application/json
Content-Type: application/json
Host: localhost:3000
Cookie: </pre>

#### Route

<pre>GET /api/posts/1</pre>

#### Query Parameters

<pre>{}: </pre>

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
ETag: W/&quot;57fb8d3a9ff6f16c21d3e584a35afd19&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 5fd911f4-27cd-4020-b303-cf5e066300b3
X-Runtime: 0.007575
Content-Length: 165</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "post": {
    "id": 1,
    "user_id": 1,
    "body": "My First Post",
    "state": "draft",
    "image_url": null,
    "updated_at": "2021-03-12T11:29:57.161Z",
    "created_at": "2021-03-12T11:29:57.161Z"
  }
}</pre>
