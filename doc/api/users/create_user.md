# Users API

## Create user

### POST /api/users

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| firstname | Firstname | true | user |
| lastname | Lastname | true | user |

### Request

#### Headers

<pre>Accept: application/json
Content-Type: application/json
Host: localhost:3000
Cookie: </pre>

#### Route

<pre>POST /api/users</pre>

#### Body

<pre>{"user":{"firstname":"Marge","lastname":"Simpson"}}</pre>

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
ETag: W/&quot;d2ffce55317b434a6c835e4b1b837780&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 9e82d1ad-fcd9-4635-a442-83f3290e6418
X-Runtime: 0.009336
Content-Length: 155</pre>

#### Status

<pre>201 Created</pre>

#### Body

<pre>{
  "user": {
    "id": 1,
    "firstname": "Marge",
    "lastname": "Simpson",
    "image_url": null,
    "updated_at": "2021-03-12T11:29:57.294Z",
    "created_at": "2021-03-12T11:29:57.294Z"
  }
}</pre>
