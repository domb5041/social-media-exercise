# Users API

## Get user

### GET /api/users/:id
### Request

#### Headers

<pre>Accept: application/json
Content-Type: application/json
Host: localhost:3000
Cookie: </pre>

#### Route

<pre>GET /api/users/1</pre>

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
ETag: W/&quot;bcbbf8e7b525a4b8a290cd2ca6f51c4a&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 148fb0e5-97a8-449d-8951-7499c901f242
X-Runtime: 0.007652
Content-Length: 155</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "user": {
    "id": 1,
    "firstname": "Homer",
    "lastname": "Simpson",
    "image_url": null,
    "updated_at": "2021-03-12T11:29:57.298Z",
    "created_at": "2021-03-12T11:29:57.298Z"
  }
}</pre>
