
# Challenge
"Build a simple web site / web app with data from our API [...]. Please don't spend days on it, keep it simple!"

## Approach:
For this project I use a single API endpoint (/events) to retrieve all events (title, description, date, url) from the server. These events shall be displayed to the user in the frontend, sorted by date. The user can then filter the events further, either by a time span or by a "tag", which is generated from the title. 

###  User Stories:
* As a user I can see all events, sorted (descending) by date.
* I can click a button / link that brings me to the website of the event.
* I can set a start / end date to filter events ("Date Filter")
* I can click a link from the tag list to filter events that contain this word in their title ("Tag Filter)
* I can release filters to return to the default state, showing all events.

### Additional goals:
* The app doesn't break if there are no events / tags.
* All props are type checked.
* The app is (somewhat) responsive and can be viewed on a mobile device.
* The app mimics the style of the original website.
* No errors / warnings in the console.
* Don't use Codaisseur boilerplate code.

### Goals not achieved in time/ things I would improve:
* Events: Change the carousel to a proper item carousel that displays 3 items at a time instead of a scrollbar.
* Tags: Either hide tags once a tag is clicked or have all tags displayed (including tags of filtered events)
* Tests: Add JEST/Enzyme tests.

###  Time spend:
* Approx 1.5 working days. 

###  Technologies used:
* [React](https://reactjs.org/) - The web framework used for frontend
* [Redux](https://redux.js.org) - State manager for React
* CSS3
* [Yarn](https://yarnpkg.com/lang/en/) - Dependency Management


### Authors
**Friedrich Striewski**


### License
Feel free to use as you see fit.

