## Create JWT
- User id encoded by secret string  = JSON web token
- Token decoded by secret string = user id

```
    function tokenForUser(user) {
        const timestamp = new Date().getTime();
        // subject(ower id of token) and issued at time
        return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
    }
```

