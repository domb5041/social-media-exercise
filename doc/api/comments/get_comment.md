# Comments API

## Get comment

### GET /api/posts/:post_id/comments/:id
### Request

#### Headers

<pre>Accept: application/json
Content-Type: application/json
Host: localhost:3000
Cookie: </pre>

#### Route

<pre>GET /api/posts/1/comments/1</pre>

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
ETag: W/&quot;6367d0b8e7fbd1ada8939c3c14eb8a51&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 2d69e9d4-f2a0-41ae-90c7-e260229bccdd
X-Runtime: 0.008510
Content-Length: 150</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "comment": {
    "id": 1,
    "body": "My First Comment",
    "post_id": 1,
    "user_id": 1,
    "created_at": "2021-03-10T20:48:08.123Z",
    "updated_at": "2021-03-10T20:48:08.123Z"
  }
}</pre>
