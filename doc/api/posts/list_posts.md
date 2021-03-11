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
ETag: W/&quot;809aa5deb103047e069a206798026cc2&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: baa160e4-499d-4717-83bb-a3d7c0ebd8d9
X-Runtime: 0.010524
Content-Length: 221</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "posts": [
    {
      "id": 1,
      "body": "My First Post",
      "state": "draft",
      "user_id": 1,
      "created_at": "2021-03-10T20:48:08.280Z",
      "updated_at": "2021-03-10T20:48:08.280Z"
    }
  ],
  "metadata": {
    "page": 1,
    "per_page": 10,
    "total_pages": 1,
    "total_entries": 1
  }
}</pre>
