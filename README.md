# Project3-Outdoorsy! Find and Share Your Local Recreation!  
<img align="right" src="https://i.imgur.com/eT8bUCE.png">

## What is Outdoorsy? 
### The goal of this site is to be able to find, share, and host local outdoor activities!

Links: 
- [BackEnd Repo](https://github.com/madblocks/P3-Server)
- [Trello](https://trello.com/invite/b/bSpz8036/ATTIb79c5a79aa50bfc9a979b155474dfe22DEC96875/pet-adoption-board)
- [WireFame](https://drive.google.com/file/d/1njBBtG5Axwdqup8d-Aq2YHGc8ZznjbiP/view?usp=sharing)
- [ERD](https://lucid.app/lucidchart/bd8ed2ea-030a-494c-bbb9-2437d2ed3f76/edit?viewport_loc=-19%2C17%2C1955%2C1126%2C0_0&invitationId=inv_45d4522b-18bf-47db-9935-24a6b7d3e547)

### Pre-Project Backend Goals

Users will be able to search a database of listings in their area, create their own event listing, and save listings to their profile. Users will also be able to leave comments/reviews that all other users can see and create an account to save all their data. 

## Post-Project Successes

Users have full CRUD over their events, and route protection over them. Users can search for events by their name, and leave comments on any event. Users are able to see who, what, where, when, and why for all these events! 

## Pre-Project Frontend Goals <img align="right" src="https://i.imgur.com/FOe3fxam.png" />

Users will be able to navigate a map of listings using specified criteria. Users will be able to get detailed information and leave comments on listings, as well as mark them as attending. Users will have delightfully styled login, logout, signup, and profile pages

## Post-Project Successes

Users are able to navigate a response website, easily create and account and log in (and stay logged in through JWT Auth). The front-end is able to pull meaningful data from the backend and display as much. 

## Technical Specifications
<img src="https://i.imgur.com/As6eAaa.png"/>
This project utilizes the PERN stack to navigate React-Leaflet. The site will use JWT Auth to secure user events to protect editing from outside users. The backend utilizes many-many associations, UUID, falso Data generation, password hashing

Additional Libraries Installed: React-Icons, React-Bootstrap, React-Calendar, Styled-Components, Axios



## Team Breakdown
Frontend
- Tim - [Linkedin](https://www.linkedin.com/in/timothy-villanueva/)   [github](https://github.com/TimVillanueva)
- Umida

Backend
- Andrew - [github](https://github.com/madblocks)
- Jeremy - [Linkedin](https://www.linkedin.com/in/jeremyvillalva)   [github](GitHub.com/jbillaba)


## [ERD](https://lucid.app/lucidchart/bd8ed2ea-030a-494c-bbb9-2437d2ed3f76/edit?viewport_loc=-19%2C17%2C1955%2C1126%2C0_0&invitationId=inv_45d4522b-18bf-47db-9935-24a6b7d3e547)

<img src="hhttps://imgur.com/jYFgyue" />

## API Docs

### Endpoints

#### Events
**Path**  `/api/event`

##### GET 
Use the standard query string format for requests

Example: `/api/event?limit=50&start=2022-12-16&end=2022-12-17&activityId=4&attendees=true&comments=true&likes=true`

**Options**

| Option         | Values                               |
| -------------- | ------------------------------------ |
| name           | string                               |
| city           | string                               |
| state          | string                               |
| recurring      | no, weekly, monthly                  |
| activityId     | activity Id's (1-10)                 |
| ownerId        | UUID of event owner                  |
| owner          | username of event owner              |
| start          | start date (YYYY-MM-DD)              |
| end            | end date (YYYY-MM-DD) -requies start |
| attendees      | boolean (include event attendees)    |
| comments       | boolean (include event comments)     |
| likes          | boolean (include event likes)        |
| limit          | 1 - 100                              |

##### POST
**Path**  `/api/event/`

##### PUT
**Path**  `/api/event/:eventId`

##### DELETE
**Path**  `/api/event/:eventId`