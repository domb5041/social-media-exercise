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
ETag: W/&quot;06bd54a3784a27a703ce47ba31f020f9&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: dfdcb40f-aed4-4bf5-911d-05b77a178043
X-Runtime: 0.008907
Content-Length: 156</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "user": {
    "id": 1,
    "firstname": "Maggie",
    "lastname": "Simpson",
    "image_url": null,
    "updated_at": "2021-03-12T11:29:57.320Z",
    "created_at": "2021-03-12T11:29:57.311Z"
  }
}</pre>
