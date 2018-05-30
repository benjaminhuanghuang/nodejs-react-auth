## combine form reducer
In reduders/index.js
```

```

## 
In the form component Signup.js
```
    reduxForm({ form: 'signup' })(Signup);
```


## Submission
```
    onSubmit = formProps => {
        this.props.signup(formProps, () => {
        this.props.history.push('/feature');
        });
    };


    <form onSubmit={handleSubmit(this.onSubmit)}>
```