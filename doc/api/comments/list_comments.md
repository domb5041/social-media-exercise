# Comments API

## List comments

### GET /api/posts/:post_id/comments

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

<pre>GET /api/posts/1/comments</pre>

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
ETag: W/&quot;923ef118dc6dbc17f49efd6468333bc6&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 0698be09-e3ea-4b49-858e-38bcbc84e033
X-Runtime: 0.027209
Content-Length: 223</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "comments": [
    {
      "id": 1,
      "body": "My First Comment",
      "post_id": 1,
      "user_id": 1,
      "created_at": "2021-03-10T20:48:08.062Z",
      "updated_at": "2021-03-10T20:48:08.062Z"
    }
  ],
  "metadata": {
    "page": 1,
    "per_page": 10,
    "total_pages": 1,
    "total_entries": 1
  }
}</pre>
