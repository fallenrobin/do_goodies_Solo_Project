# Do Goodies 
_Duration to develop: 2 week sprint_

One of my big interests is how to make volunteerism and contributing money to community organizations accessible, easy, and appealing in day to day life. That's why I started my tiny passion project jTreats, which I operated out of Prime Digital Academy during my full stack engineering program. jTreats is a tiny pop up bakery (production happens in my kitchen!), 100% of whose net proceeds go to organizations that promote STEM fields to underserved populations. Building on that momentum, I chose to design my my solo project Do Goodies around that concept.

I am pleased to present Do Goodies: a social platform where people can create, share, and discover micro bake sales. 


### Things I'm Happy With

- I am very pleased with the design!
- The data grid 
- The concept is very true to me :)

### Things Next Steps

- Make the data grid actually functional (currently hard-coded)
- Add food costing
- In-app messaging
- Fix a million little things



## Screenshots 

<img width="383" alt="Screen Shot 2022-05-02 at 2 51 04 PM" src="https://user-images.githubusercontent.com/92271468/171675503-a8535411-8bdb-461f-b7a7-208168c97c71.png">

<img width="368" alt="Screen Shot 2022-05-02 at 2 52 43 PM" src="https://user-images.githubusercontent.com/92271468/171675537-27923d83-8833-4bb5-a3f7-78df764e8bc0.png">

<img width="366" alt="Screen Shot 2022-05-02 at 2 52 07 PM" src="https://user-images.githubusercontent.com/92271468/171675567-b19e6efb-eb95-401e-b3d3-866fc5de54d2.png">


## Heroku 
See a live version of the application at:
(Note: it takes 30 seconds to load the Heroku application)
[https://do-goodies.herokuapp.com](https://do-goodies.herokuapp.com) 

## Getting Started 
We **STRONGLY** recommend following these instructions carefully. These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites
Before you get started, make sure you have the following software installed on your computer:
- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)


### Create database and table
Create a new database called `do_goodies` and create the tables located in the database.sql file.

If you would like to name your database something else, you will need to change `do_goodies` to the name of your new database name in `server/modules/pool.js`.


## Development Setup Instructions
- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
 
  SERVER_SESSION_SECRET=superDuperSecret


- While you're in your new `.env` file, replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`


## Built With 

- Node.js,
- Express.js,
- React,
- Redux,
- Redux Saga,
- PostgreSQL,
- MUI


## Acknowledgments 

Thanks to Prime Digital Academy and especially Dane Smith for getting me to this point in just a few months! Thanks also to Ed Heyl for the Do Goodies logo design.


