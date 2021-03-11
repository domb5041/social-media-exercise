# Users API

## Update user

### PATCH /api/users/:id

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| firstname | Firstname | false | user |
| lastname | Lastname | false | user |

### Request

#### Headers

<pre>Accept: application/json
Content-Type: application/json
Host: localhost:3000
Cookie: </pre>

#### Route

<pre>PATCH /api/users/1</pre>

#### Body

<pre>{"user":{"firstname":"Maggie"}}</pre>

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
ETag: W/&quot;ddd0426e88b17bdb18b2433da48b0d64&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: c939cd80-9777-431b-b860-8a65566b28ad
X-Runtime: 0.011196
Content-Length: 139</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "user": {
    "firstname": "Maggie",
    "id": 1,
    "lastname": "Simpson",
    "created_at": "2021-03-10T20:48:08.481Z",
    "updated_at": "2021-03-10T20:48:08.490Z"
  }
}</pre>
