# Users API

## List users

### GET /api/users

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| page | Page | false |  |
| per_page | Per page | false |  |

### Request

#### Headers

<pre>Accept: application/json
Content-Type: application/json
Host: localhost:3000
Cookie: </pre>

#### Route

<pre>GET /api/users</pre>

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
ETag: W/&quot;e79471ca3f05a92b05043e35db16f4af&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 13cca2b4-984e-4d48-ba25-fb8820fcaca7
X-Runtime: 0.008055
Content-Length: 211</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "users": [
    {
      "id": 1,
      "firstname": "Homer",
      "lastname": "Simpson",
      "created_at": "2021-03-10T20:48:08.445Z",
      "updated_at": "2021-03-10T20:48:08.445Z"
    }
  ],
  "metadata": {
    "page": 1,
    "per_page": 10,
    "total_pages": 1,
    "total_entries": 1
  }
}</pre>
