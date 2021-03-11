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
ETag: W/&quot;287bbc410e66f33152411b0f8f04ec4a&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: d3b285a3-d3a0-4b4b-adf0-4ca68e53786b
X-Runtime: 0.006983
Content-Length: 148</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "post": {
    "id": 1,
    "body": "My First Post",
    "state": "draft",
    "user_id": 1,
    "created_at": "2021-03-10T20:48:08.312Z",
    "updated_at": "2021-03-10T20:48:08.312Z"
  }
}</pre>
