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
ETag: W/&quot;72e9797f8f4342e6ba5394c53a64b05c&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 354cc2fc-8cae-4ccc-8bc3-02a423a0f4fb
X-Runtime: 0.023811
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
      "created_at": "2021-03-12T11:29:56.855Z",
      "updated_at": "2021-03-12T11:29:56.855Z"
    }
  ],
  "metadata": {
    "page": 1,
    "per_page": 10,
    "total_pages": 1,
    "total_entries": 1
  }
}</pre>
