# Online Content Reporter

# Setup

 * run `npm i` on initial pull
 * `npm run build` will build the client
 * `npm start` will start the server

# environment
The following environment variables need to be available:
 * YOTI_RSA_PRIVATE_KEY
 * YOTI_APP_ID
 * YOTI_SCENARIO_ID
 * YOTI_SDK_ID
 * REPORT_SENDER_EMAIL
 * REPORT_EMAIL_RECIPIENT_1
 * REPORT_EMAIL_RECIPIENT_2 (optional)
 * AWS_ACCESS_KEY_ID
 * AWS_SECRET_ACCESS_KEY
 * GA_TRACKING_ID
 * MAXIMUM_REPORTER_AGE (default 18)
 * JWT_SECRET

A web app for reporting explicit online images to the [IWF](https://www.iwf.org.uk/) (Internet Watch Foundation).  
History of the partnership between the [IWF and Childline](https://www.iwf.org.uk/news/childline-and-internet-watch-foundation-form-new-partnership-to-help-young-people-remove) .
The current  [IWF "hash list"](https://www.iwf.org.uk/become-a-member/services-for-members/image-hash-list).

## Application Links

Two versions for testing purposes so test of both the under18 and over18 user journeys can be tested.
- Age limit is 18: http://contentreporter.childline.org/
- Age limit is 60: https://content-reporter.herokuapp.com/

- 3 day Prototype version: [childline-report](https://childline-report-image.herokuapp.com)


## Current Approach

Under 18s can report explicit online content to a Childline counsellor. However, they can only help on the condition
that the young person emails them their passport to prove their age. This is an outdated and cumbersome process.
This process can deter young people from reporting explicit images. Either they can feel uncomfortable to reveal their identity, or they think the process is too complicated.

For further reading visit the [Childline website](https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/sexting/)

## Yoti's role in the app.

The app uses YOTI to:
- Securely prove that the young person is under 18, without requiring any further information, thus removing the current barriers to reporting content to IWF.

## GA tracking
Some of the key tracking data includes:
- Page views
![image](https://cloud.githubusercontent.com/assets/15717822/26207840/8ec3ac88-3be0-11e7-932a-a33a1967021b.png)
- Image criteria clicks
![image](https://cloud.githubusercontent.com/assets/15717822/26207810/787ac768-3be0-11e7-9495-2c188d7ef6d1.png)
- Navigation clicks
![image](https://cloud.githubusercontent.com/assets/15717822/26207891/aa4a0510-3be0-11e7-8984-70cad313e1e7.png)
- Real time data is also available


## Development Resources & Notes

### Tech Stack

- React.js front-end
- React libraries: material.ui
- Redux with redux-saga for async actions
- SASS styling
- Age verification: Yoti
- Node.js - Express Framework
- Tape, chai, sinon, enzyme and supertest
- circle.ci continuous integration
- yoti-node-sdk

### Deployment

- Azure
- Heroku test versions

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

### Resources

- [Childline website](https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/sexting/) - Use for colour schemes as it is already 'proven for use case'.

- [IWF online form](https://www.iwf.org.uk/) - This form takes a minimum of 5 interactions with Childline website. It is very difficult to find...
