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
ETag: W/&quot;3e5808e6cdf87c0a559a5f0493de6635&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 18edc9ba-bb7c-4c76-a1af-0fd91caaec57
X-Runtime: 0.008244
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
    "created_at": "2021-03-12T11:29:56.912Z",
    "updated_at": "2021-03-12T11:29:56.912Z"
  }
}</pre>
