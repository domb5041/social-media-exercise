# Images API

## Upload user image

### POST /api/users/:user_id/image

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

<pre>POST /api/users/1/image</pre>

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
X-Request-Id: 0ba8a20d-7a87-4857-a75e-dd53230c0b54
X-Runtime: 0.018265
Content-Length: 0</pre>

#### Status

<pre>201 Created</pre>

