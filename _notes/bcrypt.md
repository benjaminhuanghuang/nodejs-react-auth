## Salt
```
    bcrypt.genSalt(10, function(err, salt) {
    
    }
```

## Hash
```
    bcrypt.hash(user.password, salt, null, function(err, hash) {
    
    }
```

## Check password
```
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) { return callback(err); }

        callback(null, isMatch);
    });
```