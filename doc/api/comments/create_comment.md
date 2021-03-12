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
ETag: W/&quot;317666bf952d0178b50a4480afcfa928&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 846ecc5e-a9d0-4147-9622-11df6e019b7e
X-Runtime: 0.008956
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
    "created_at": "2021-03-12T11:29:56.905Z",
    "updated_at": "2021-03-12T11:29:56.905Z"
  }
}</pre>
