# Images API

## Upload post image

### POST /api/posts/:post_id/image

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| image | Image file | true |  |

### Request

#### Headers

<pre>Host: localhost:3000
Content-Type: multipart/form-data; boundary=----------XnJLe9ZIbbGUYtzPQJ16u1
Cookie: </pre>

#### Route

<pre>POST /api/posts/1/image</pre>

#### Body

<pre>------------XnJLe9ZIbbGUYtzPQJ16u1
Content-Disposition: form-data; name="image"; filename="image.png"
Content-Type: image/png
Content-Length: 82

[uploaded data]
------------XnJLe9ZIbbGUYtzPQJ16u1--</pre>

### Response

#### Headers

<pre>X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Download-Options: noopen
X-Permitted-Cross-Domain-Policies: none
Referrer-Policy: strict-origin-when-cross-origin
Content-Type: text/html
Cache-Control: no-cache
X-Request-Id: 0d4f55c4-dbf0-48fd-83a6-7b39d2ec1282
X-Runtime: 0.043887
Content-Length: 0</pre>

#### Status

<pre>201 Created</pre>

