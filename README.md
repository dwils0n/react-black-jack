# Dan Wilson - Black Jack

This is my example of the classic Black Jack Card Game

### Start the app
Make sure you have node and npm installed for more infor visit (https://nodejs.org/en/)
Run `npm install` to make sure all dependencies are met
To start the app run `npm start` from the dir
To run the tests `npm test` from the dir

### The approach
I started by creating the deck of cards and creating the functionality to pull a random card out and remove it from the deck. I then started adding in the logic around hit vs stick and implementing how the dealer pulls until it hits the criteria for either win or loose. I think started adding in the UI components and animation to display the cards.

### What I would change
- Add a slicker UI.
- Add in more players.
- Add in animations to enhance the UI and accentuate the UI updates.
- Add in SCSS to manage CSS better.
- Add in Redux or some nicer state management tool.
- Add in more testing
    - More in depth unit tests.
    - React-story-board:  to test different scenarios it basically creates all possible variations of state.
    - Snapshot testing
- Pull out generic functions from App into a utils module.

