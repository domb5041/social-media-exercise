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
ETag: W/&quot;16d2932f3cb824026a76f9b6d7a4f46d&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 56915a13-de38-4e31-a132-8d9e5dcd456d
X-Runtime: 0.010080
Content-Length: 138</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "user": {
    "id": 1,
    "firstname": "Homer",
    "lastname": "Simpson",
    "created_at": "2021-03-10T20:48:08.467Z",
    "updated_at": "2021-03-10T20:48:08.467Z"
  }
}</pre>
