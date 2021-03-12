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
ETag: W/&quot;fc1d91ac34f4bf9944d8dbeb823d372a&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: b096534d-02ee-4b20-a0a3-261e43b561ec
X-Runtime: 0.009284
Content-Length: 228</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "users": [
    {
      "id": 1,
      "firstname": "Homer",
      "lastname": "Simpson",
      "image_url": null,
      "updated_at": "2021-03-12T11:29:57.274Z",
      "created_at": "2021-03-12T11:29:57.274Z"
    }
  ],
  "metadata": {
    "page": 1,
    "per_page": 10,
    "total_pages": 1,
    "total_entries": 1
  }
}</pre>
