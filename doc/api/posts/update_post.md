# Posts API

## Update post

### PATCH /api/posts/:id

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| body | Body | false | post |
| state | State | false | post |

### Request

#### Headers

<pre>Accept: application/json
Content-Type: application/json
Host: localhost:3000
Cookie: </pre>

#### Route

<pre>PATCH /api/posts/1</pre>

#### Body

<pre>{"post":{"state":"published"}}</pre>

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
ETag: W/&quot;a6326be342ef6db167d0a7586c645b87&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: dae9bce7-03c6-431d-b121-1f10d2920432
X-Runtime: 0.009765
Content-Length: 152</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "post": {
    "state": "published",
    "id": 1,
    "body": "My First Post",
    "user_id": 1,
    "created_at": "2021-03-10T20:48:08.326Z",
    "updated_at": "2021-03-10T20:48:08.336Z"
  }
}</pre>
