> # Welcome to Job Portal Server


> Login credentials:


```
email: ki4on0@gmail.com
password: 123QwertY@
```

or

```
{
  "email":"ki4on0@gmail.com",
  "password":"123QwertY@"
}
```

JWT Token (authorization)

```
`Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtpNG9uMEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJ1c2VyTmFtZSI6InRvdWZpcWhhc2Fua2lyb24iLCJpYXQiOjE2NjYyNjYyNDMsImV4cCI6MTY2ODg1ODI0M30.36ElIkyBqOZqh3Co21n4Sqfk0PT5qVffKe_Y_qUYlHo`
```

> ## Get User Routes/End Points

> [POST] /signup

```
/api/v1/signup

```

> [POST] /login

```
/api/v1/login

```

> [GET] /user/confirm

```
/api/v1/user/confirm

```

> [GET] /user/me

```
/api/v1/user/me

```

> [GET] /user/all

```
/api/v1/user/all

```

> [GET] /user/hrs

```
/api/v1/user/hrs

```

> [GET] /manager/jobs

```
/api/v1/manager/jobs

```

> [POST] /user/image/upload

```
/api/v1/user/image/upload

```

> [POST] /user/resume/upload

```
/api/v1/user/resume/upload

```

> [PATCH] /user/:userId

```
/api/v1/user/:userId

```

> [GET] /user/:userId

```
/api/v1/user/:userId

```

> [PATCH] /user/promote/:userId

```
/api/v1/user/promote/:userId

```


> ## Get Hiring Company Routes/End Points

> [POST] /hrCompany

```
/api/v1/hrCompany

```

> [GET] /hrCompany

```
/api/v1/hrCompany

```

> [GET] /hrCompany/:id

```
/api/v1/hrCompany/:id

```


> ## Get Available Jobs Routes/End Points

> [POST] /jobs

```
/api/v1/jobs

```

> [GET] /jobs

```
/api/v1/jobs

```

> [GET] /jobs/:id

```
/api/v1/jobs/:id

```

### Note:

I have used MongoDB Atlas for database with the help of mongoose. Without Login & SignUp route
you can't access other routes because I have used `JWT token` for authentication.
To get JWT token you have to login or SignUp first or you can use the `token` which I have provided above.

Language : Typescript

Framework : Express JS