# Comments API

## Update comment

### PATCH /api/posts/:post_id/comments/:id

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| body | Body | false | comment |
| user_id | User ID | false | comment |

### Request

#### Headers

<pre>Accept: application/json
Content-Type: application/json
Host: localhost:3000
Cookie: </pre>

#### Route

<pre>PATCH /api/posts/1/comments/1</pre>

#### Body

<pre>{"comment":{"body":"Hello world!"}}</pre>

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
ETag: W/&quot;51699679450c4610f145e8ce15b775ef&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 8645e243-a824-4320-bf2b-011727910a2c
X-Runtime: 0.010343
Content-Length: 146</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "comment": {
    "post_id": 1,
    "body": "Hello world!",
    "id": 1,
    "user_id": 1,
    "created_at": "2021-03-10T20:48:08.142Z",
    "updated_at": "2021-03-10T20:48:08.154Z"
  }
}</pre>
