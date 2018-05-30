## Create JWT
encode payload using secret string 
```
    function tokenForUser(user) {
        const timestamp = new Date().getTime();
        return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
    }
```