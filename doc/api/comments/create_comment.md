# Comments API

## Create comment

### POST /api/posts/:post_id/comments

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| body | Body | true | comment |
| user_id | User ID | true | comment |

### Request

#### Headers

<pre>Accept: application/json
Content-Type: application/json
Host: localhost:3000
Cookie: </pre>

#### Route

<pre>POST /api/posts/1/comments</pre>

#### Body

<pre>{"comment":{"body":"Super cool comment","user_id":1}}</pre>

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
ETag: W/&quot;3e68e01657e54ef1076b12559a8aabb0&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 47e4cd74-3c1f-4b47-b406-abaca5da10d0
X-Runtime: 0.009370
Content-Length: 152</pre>

#### Status

<pre>201 Created</pre>

#### Body

<pre>{
  "comment": {
    "id": 1,
    "body": "Super cool comment",
    "post_id": 1,
    "user_id": 1,
    "created_at": "2021-03-10T20:48:08.116Z",
    "updated_at": "2021-03-10T20:48:08.116Z"
  }
}</pre>
