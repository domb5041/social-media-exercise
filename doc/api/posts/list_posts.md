# Posts API

## List posts

### GET /api/posts

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| page | Page | false |  |
| per_page | Per page | false |  |

### Request

#### Headers

<pre>Accept: application/json
Content-Type: application/json
Host: localhost:3000
Cookie: </pre>

#### Route

<pre>GET /api/posts</pre>

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
ETag: W/&quot;dcc6f7fcc2b5a4e77a114083fa97d013&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 8c2ea280-456e-45df-ba4d-6f352c8c1339
X-Runtime: 0.020603
Content-Length: 238</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "posts": [
    {
      "id": 1,
      "user_id": 1,
      "body": "My First Post",
      "state": "draft",
      "image_url": null,
      "updated_at": "2021-03-12T11:29:57.106Z",
      "created_at": "2021-03-12T11:29:57.106Z"
    }
  ],
  "metadata": {
    "page": 1,
    "per_page": 10,
    "total_pages": 1,
    "total_entries": 1
  }
}</pre>
