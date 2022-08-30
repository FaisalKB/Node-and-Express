# Using Node and Express
Express is a minimalist web framework for Node.js. In this case, Express abstracts away many of the difficulties of working directly with Node. Express makes the process to build a sevrer both easier and more readable.
## A demonstration of a fully working server with multiple routes and error handling.
This project demonstrates a few foudnational concepts in backend coding, including:

### Application-level middleware: 
Middleware, specifically as it pertains to building servers with Express, is essentially a function that an Express server runs between receiving a request and responding to that request. This concept will allow you to potentially configure every request coming in or going out of your server. Remember that the job of the server is to receive requests and respond to them.

Middleware gets between the request-response cycle. It helps manage the request and can help determine how the server should respond. Express puts multiple pieces of middleware together, creating a middleware pipeline. This pipeline is simply a series of functions.

### Building routes:
A route, also called a path, the part of the URL that comes after the domain name. In the real world, users can visit different URLs to get different kinds of information from a website. We create routes on your server so that it can respond to client requests with varied information. 

### Query and route parameters:
Routing on its own is quite powerful. We can also use dynamic user input to modify our routes' responses. For example, look at the following URL: ```https://www.google.com/search?q=javascript```
In the URL, you can see that there is a route called /search. But is the content after /search a new route? No. Instead, we will explore a few other concepts below:


- **Query string:** Text that comes at the end of a URL following a ```?```. It provides additional information to a given route.

- **Query parameter:** A key-value pair in a query string. The key and the value are strings separated by ```=```. This is used to filter the resources requested from the server. In the above example, the query parameter key is ```q``` and the value is ```javascript```.

- **Route parameter:** A part of the URL that changes depending on the data to be displayed on the website, used to access parts of a URL by storing the value in a variable.

### Not Found/Error handling:
Remember that even if a user sends a bad request to your server, you should still respond. If a user tries to go to a route that doesn't exist, you want to let them know. Express, by default, will respond with a message like the following if you try to go to a nonexistent route: ```Cannot GET /```.
To handle an error where the route cannot be found, you can just create a new piece of middleware. This middleware should be put after all of your routes and doesn't need a specific string argument.


One common error is that the user may attempt to go to a route that is missing. But there are many more problems that could arise. Express has a special and slightly odd way of creating an error handler. It is exactly the same as other middleware, except for one feature: it has an extra parameter.

### Router-level middleware:
Many of the routes that you create will have similar constraints. Although you can build the same kind of constraints into multiple routes, it's helpful to abstract common functionality into router-level middleware. Your code will be cleaner and easier to maintain if you abstract away the duplicated code. Router-level middleware involves using a middleware function for specific routes. The function looks like all other middleware functions.
