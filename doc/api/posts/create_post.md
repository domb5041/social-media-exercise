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
ETag: W/&quot;20bad7d34119d24771de110948010ab6&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 485a8cae-9b63-4a1b-a2d0-b7e2aea21f9e
X-Runtime: 0.012999
Content-Length: 163</pre>

#### Status

<pre>201 Created</pre>

#### Body

<pre>{
  "post": {
    "id": 1,
    "user_id": 1,
    "body": "Create post",
    "state": "draft",
    "image_url": null,
    "updated_at": "2021-03-12T11:29:57.145Z",
    "created_at": "2021-03-12T11:29:57.145Z"
  }
}</pre>
