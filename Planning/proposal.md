# Battlejack Blitz Proposal

## Project Description

My app is called Battlejack Blitz.  It's a card game app for people who enjoy blackjack, but don't enjoy the concept of gambling.  Users can play Blackjack against the computer to score points called "hits", and after enough hits, they will win or lose the game by T.K.O!  In the future I'd like to add chip tunes and some quality of life functionality like additional interface buttons.


## Wireframes

### Home

![Home Page](https://i.imgur.com/7DbHqys.png)

### Game

![Game Page](https://i.imgur.com/XNmyLyG.png)


### MVP User Stories

_**MVP User Stories**_
- _As a user, I want to be able to use the available interface to play blackjack, so that I can experience what the app offers in its most basic iteration._
- _As a user, I want to have the cards display their information in a way that's simple and easy to read, so the app is more accessible, and intuitive._
- _As a user, I want the cards that are displayed to be random, so that the experience is fair._

_**Post MVP Stretch Goals**_
- _As a user, I would like to have audio feedback from game features, so that I can better enjoy the novelty of the experience_
- _As a user, I would like to be able to start a new game with a "reset" or "new game" button, so that I can easily start a new game._
- _As a user, I would like to see some animations, so that the visual representation of the game is more entertaining._

## API
http://deckofcardsapi.com/

#### Shuffle the Cards:
https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1

##### Response:
{
    "success": true,
    "deck_id": "3p40paa87x90",
    "shuffled": true,
    "remaining": 52
}

#### Draw a Card:
https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2

##### Response:
{
    "success": true,
    "cards": [
        {
            "image": "https://deckofcardsapi.com/static/img/KH.png",
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
        },
        {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "8",
            "suit": "CLUBS",
            "code": "8C"
        }
    ],
    "deck_id":"3p40paa87x90",
    "remaining": 50
}


## Component Hierarchy *
![Component Sheet](https://i.imgur.com/2bnqSZA.png)
*Note: Welcome is a child of App.