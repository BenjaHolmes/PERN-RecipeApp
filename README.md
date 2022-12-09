# Full-Stack Recipe Sharing App

This is a Full Stack PERN Stack Application (Postgres, Express, Node, React) 
In which users can create and share their own recipes, while also interacting with recipes the other users have submitted.


## Project Description


This project is meant to demonstrate everything i have learned so far. I have implemented user registration/login, the ability for members to create 
or delete their own recipes, a like/dislike system for member's recipes, the ability for logged-in users to comment on recipes, as well as the abillity
to reply to comments to create a comment chain, a collapsible menu, a light/dark mode.

The hardest part of this project was keeping my file structure and slices in a logical order as the functionality of the app grew. 


### Languages and Libraries Used

* React
* Redux
* Node.js
* Express.js
* Express-Session
* Passport.js
* Axios
* Bcrypt
* PostgreSQL
* Node-Postgres
* React Outside-Click-Handler
* Framer-Motion
* HTML
* CSS
* JavaScript


### Project Demonstration 

<ins> Initial View of Site </ins>
![siteInitial](https://user-images.githubusercontent.com/90611253/206812955-0149476a-77b7-4a19-92ca-8e48928f9e7d.png)
* When a member first loads the site, they can see a selection of recipes, filter the list based on categories, browse an article
or open the collapisble menu to see more sections of the site.

<ins> Recipe Page Example </ins>
![recipePageDark](https://user-images.githubusercontent.com/90611253/206813066-c19e0581-d2be-4578-a41d-e84da1c0ffed.png)
* We can see the Dark mode and the collapsible menu on this image of the recipe details page.

<ins> Comments Require Member to be Logged in </ins>
![logInToReply](https://user-images.githubusercontent.com/90611253/206813127-215c4613-89b9-40f7-96b5-2b6c9366d421.png)
* We can see at the bottom of the recipe's page, the users are able to leave comments or reply to existing comments, 
but only once they've logged in.

<ins> Info Page </ins>
![infoPage](https://user-images.githubusercontent.com/90611253/206813195-15d6ebf2-6c52-4ff7-a63a-a06f65089ac9.png)
* There is an info page explaining the basic use of the website

<ins> Member Area </ins>
![memberArea](https://user-images.githubusercontent.com/90611253/206813231-227d11c9-fe40-40e6-90a5-dee73259a85e.png)
*Once a member has registered and logged in, they are able to access the member's area page, which comprises of
a list of that member's submitted recipes, where they're able to delete them if they choose. It also tells the user
their total number of likes and dislikes, and allows them to create a new one via the form at the bottom.

<ins> New Recipe Form </ins>
![formExample](https://user-images.githubusercontent.com/90611253/206813308-a1b25aac-57e6-4860-b221-505cf329a9f1.png)
*This is part of the new recipe form the logged-in members can use.

<ins> Mobile Site Responsive Design </ins>
![mobilePage](https://user-images.githubusercontent.com/90611253/206813342-d776aadc-891f-4498-9701-3221f3c312db.png)
![mobilePage2](https://user-images.githubusercontent.com/90611253/206813344-34e85178-7a48-48e0-a7de-1e1ae17c52a5.png)
*Here are some examples of the site in a mobile viewport size.


### Future Additions
Two additions i would like to make this site if i were to take it further are :
* A more complex recipe filter bar, for example, to allow a user to search for recipes which are both vegan and gluten free.
* A way for users to upload their own pictures to represent their recipes.
