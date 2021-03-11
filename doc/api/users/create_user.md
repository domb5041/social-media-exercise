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
ETag: W/&quot;5dd423e653086b05c0efdcf325aad881&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 7bdfab83-0cdb-4595-8103-bb72d1373b2f
X-Runtime: 0.007962
Content-Length: 138</pre>

#### Status

<pre>201 Created</pre>

#### Body

<pre>{
  "user": {
    "id": 1,
    "firstname": "Marge",
    "lastname": "Simpson",
    "created_at": "2021-03-10T20:48:08.464Z",
    "updated_at": "2021-03-10T20:48:08.464Z"
  }
}</pre>
