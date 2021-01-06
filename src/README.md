# Project description

This app contains 3 "pages" that can be navigated back and forth to through the main menu:

* **home**: Shows the user info when the user is logged in

* **readme**: A descriptive text about the project. (It is loaded through an AJAX request, made through a custom hook)

* **login/logout**: Allow the user to login and logout. There are 2 "dummy" user to test with:

  * username: bob, password: 123

  * username: alice, password: 123

## Approach

In the first time I add no state to my Components, I only focus on the raw HTML structure. In a second time, when I feel that the HTML looks satisfying
I start adding state to my component (this is the case for the login component
for instance). After creating a set of components and assembling them
into an "app" (with routing etc.) I start digging into styling the overwhole
application with styled-components.

## Form validation

I have left the field validation of the login form aside. It is fairly simple
to implement a naive approach to form validation. However, creating a form
validation than only displays a field's error when releasing the input field
(when the input field is touched) is more complex.

## Styling

### A minimal design

I kept the complexity of the layout of the app to a bear minimum.
The navigation bar is made of a menu that is centered. It is preceded by
the logo that is always aligned on the left side of the page. When hovered,
the links in the menu gets underlined with a smooth animation.

Every "page" component is wrapped into the "PageWrapper" Component to ensure
that the width of each page is the same as the width of the menu and that it
is centered.

### Fonts

I have chosen the Signika web font from Google Fonts. It is quite similar in appearance to UniNeueRegular.

## Todos

* [x] Login page

* [ ] Login page field validation

* [x] 2 or more pages with routing

* [x] Styling with styled-components

* [ ] If navigating to login page when already logged in, it should redirect to home screen

* [ ] Mark the "active" link in the menu

* [x] Apply CSS on README file

* [ ] Create a 404 component that any "invalid" route falls back to

* [ ] Much more...

## Reference links

Here are some references that have helped me while writing the app:

[custom AJAX hook](https://itnext.io/how-to-create-a-react-hook-to-make-ajax-calls-5d5052e08269)

[Animated underline hover](https://codepen.io/jstn/pen/zuDst)
