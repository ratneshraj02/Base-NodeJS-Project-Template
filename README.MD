This is the base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principle and project management recommendations. Feel free to change anything.

`src` -> Inside the  src folder all the actual source code regrading the project will  reside , this will not include any kind of tests. (You might want to make separate tests folder )

Let take a look inside the `src' folder

- `config` -> In this folder anything and everything regrarding any configuration or setup of library or module will be done. For example: Setting up `donenv` so that we can use environmnet variables anywhere in a clearner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepared meaningfull logs, so configration for this library should also be done here.

- `routes` In the route folder, we register a route and the corresponsing middleware and controllers to it. 

- `middlewares` -> they are just going to intercept the incoming requests where we can write out validators, authenticators etc.

- `controller` -> they are kind of the last middlewares  as post them you call your business layer to exect in controller just recieve the incoming reqest and then passed to business layer returns an outputs,  we structure the API response in controller and send the output

- `repositories` -> This folder contains all the logic using which we interact with DB by writing queries, all the raw queries or ORM queries will go here.

- `services` -> contains the business logic an ineracts with repositories for data from the database.

- `utils` -> contains helper methods, error classes etc.

### setup the project

 - Download this template from github and open your favourite text editor.
-  In the root directory create `.env` file and add the following env variables.

    ``` 
        PORT=<port number for your choice>
    ```
    e.g:
    ``` 
     PORT=3000
    ```
- Inside the `src/config/` folder create a file named as `config.json` and write the following code 

```
    {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
```

- If you're setting up your development enviroment, then write the username,  password of your DB and in dialect mention whatever DB you are using for e.g : mysql, mariadb etc.

- If your are setting up your or test or producation environment, make sure you alos replace the host with the hosted db url.

