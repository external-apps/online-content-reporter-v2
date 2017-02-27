# online-content-reporter

A web app for reporting explicit online images to the [IWF](https://www.iwf.org.uk/) (Internet Watch Foundation).

## Our app

Running on Heroku twice for testing purposes so that more people can test both the under18 and over18 route.
- Version 2: where the age limit is 25: [childline-report-image](https://childline-report-image.herokuapp.com/)
- Version 1: where the age limit is 35: [childline-yoti](https://childline-yoti.herokuapp.com/)

**Under development**


## Current Approach

Under 18s can report explicit online content to a Childline counsellor. However, they can olny help on condition
that the young person emails them their passport to prove their age. This is an outdated and cumbersome process.
This process can deter young people from reporting explicit images. Either they can feel uncomfortable to reveal their identity, or they think the process is too complicated.

For further reading visit the [Childline website](https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/sexting/)

## How our app can help

Our app uses YOTI for identifications and login.

**Why it beneficial to use YOTI**
The app uses YOTI to:
- prove that the young person is under 18
- prove the young persons identity while protecting their anonimity. The app would only store their
remember me id, which is a unique identifier. So we only check that they have an accepted personal identification document on their YOTI account, but the app doesn't require access to any of their personal details.

## Development Resources & Notes

### Prototype Tech Stack

- Front-end: HTML5, CSS3, Materialize.css, animate.css, JavaScript
- Back-end: Node.js, Hapi.js
- Authentication: Yoti

### Tech Stack

- Authentication: Yoti
- Node.js - Express (instead of hapi), [boilerplate](https://github.com/SavageWilliam/express-server-boilerplate)
- Tape backend testing
- PostgreSQL database
- [Jest](https://facebook.github.io/jest/docs/tutorial-react.html) testing.
- [enzyme](http://airbnb.io/enzyme/) - react components
- CSS libraries: animate.css, Materialize.css, tachyons?
- Promises (ES6)

### Libraries

- [animate css](https://daneden.github.io/animate.css/) - include *simple* animations for smooth page transitions, however keeping it basic to ensure the user feels taken seriously.
- [materialize css](http://materializecss.com/buttons.html) - css library for key components.


### User journey

As an under 18 (CYP)  
I want to report an explicit online image to IWF (internet watch foundation)  
So that it can be removed as quickly as possible.  

### User stories

As a CYP  
I want to prove that I'm under 18  
So that IWF can legally handle my case.  

As a CYP  
I want to remain anonymous  
So that I feel comfortable reporting the image.  

As a CYP  
I want to understand if my image fits the criteria for removal  
So that I am reassured that I am 'in the right place'.  

As a CYP  
I want to be presented with alternatives locations for help/advice  
If my image doesn't fit the criteria for removal.  

As a CYP  
I want to easily (and securely) send the image address  
So that it can be removed and only seen by the IWF.  

As a CYP
I want to see information on what happens after submitting my request  
So that I understand what to expect next (& how long it might take).  

As a CYP  
I want an an option to submit more than one address  
So that I can submit multiple location (if applicable) to IWF.  

**Stretch goals (next sprint)**

As a CYP
I would like to track my case's progress
So that I know when its finished/if it has been removed.

As a CYP  
I want to see other options if the image can't be removed  
So that I can take other actions to get the image taken down.

As a CYP  
I want to be see a confirmation message  
So that I know my request has been sent AND what to expect next.  

### Websites

- [Childline website](https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/sexting/) - Use for colour schemes as it is already 'proven for use case'.
  * Colours:
 ![image](https://cloud.githubusercontent.com/assets/15717822/22715594/8a5298ee-ed89-11e6-8bd7-9a85c8c0f578.png)

- [IWF online form](https://www.iwf.org.uk/) - This form takes a minimum of 5 interactions with Childline website. It is very difficult to find...
