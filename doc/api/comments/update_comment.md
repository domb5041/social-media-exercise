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
ETag: W/&quot;000925e9946855179e08216cf04807a5&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: e5c6071f-4222-4260-bb15-312fdbd37c43
X-Runtime: 0.012896
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
    "created_at": "2021-03-12T11:29:56.932Z",
    "updated_at": "2021-03-12T11:29:56.944Z"
  }
}</pre>
