## setup
passport is an authentication library for node and express.
```
    npm i - S passport passport-jwt
```

## passport strategy
In passport, a strategy is a method for authenticating a user.
Passport can use variable strategy, such as jwt strategy or useername/password  strategy
```
    // Authenticate user using jwt
    const JwtStrategy = require('passport-jwt').Strategy;

    // Authenticate user using email and password
    const LocalStrategy = require('passport-local');
```

## Use strategy
```
    passport.use(jwtLogin);
    passport.use(localLogin);
```

## Wire up route with passport
```
    app.get('/', requireAuth, function(req, res) {
        res.send({ message: 'Super secret code is ABC123' });
    });
```

