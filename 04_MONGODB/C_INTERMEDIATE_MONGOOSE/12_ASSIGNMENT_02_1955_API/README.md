# Assignment: 1955 API

For this assignment, we want you to build a simple API server and communicate with it directly over URL requests. The purpose of this API server is to hold on to a list of people born in the year 1955. 

In order to allow our API server full functionality over URL, we'll need to make sure all our incoming requests come in as GETs, so don't worry about making your routes RESTful!

1. ~~GET **'/'** will serve up the full collection of people born in 1955~~
2. ~~GET **'/new/:name/'** will add a name into the database which can be used for 3. blank spaces. So adding Steve Jobs to our database, you'd type in the URL **'localhost:8000/new/Steve Jobs'**~~
4. GET **'/remove/:name/'** will delete a name from the database.
5. ~~GET **'/:name'** will bring up the document of that particular person.~~

You won't need EJS or to render views for this assignment. When your server responds, make sure it responds with JSON.

To do this, you'll have to write all your responses as res.json() and pass it the data you want to send. Additionally, you'll need to configure body-parser to correctly read JSON, which can be done by adding the following line to your server.js:

    app.use(bodyParser.json());

When navigating to 'localhost:8000/' you should immediately get a page that looks similar to the below example.
