# Posts API

## Create post

### POST /api/posts

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| body | Body | true | post |
| user_id | User ID | true | post |
| state | State | false | post |

### Request

#### Headers

<pre>Accept: application/json
Content-Type: application/json
Host: localhost:3000
Cookie: </pre>

#### Route

<pre>POST /api/posts</pre>

#### Body

<pre>{"post":{"body":"Create post","user_id":1}}</pre>

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
ETag: W/&quot;1aef710b174d9e088b084b39fac9adfa&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: c29f5791-ebc4-4c2d-8284-c15428ec8042
X-Runtime: 0.009688
Content-Length: 146</pre>

#### Status

<pre>201 Created</pre>

#### Body

<pre>{
  "post": {
    "id": 1,
    "body": "Create post",
    "state": "draft",
    "user_id": 1,
    "created_at": "2021-03-10T20:48:08.305Z",
    "updated_at": "2021-03-10T20:48:08.305Z"
  }
}</pre>
