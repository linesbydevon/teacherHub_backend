# GA teacher's hub

The aim of our project is to develop a hub/portal for instructors to maintain class records--including enrolled students and their assignements--in one place.

## Entity relationships

The app will enable professors full CRUD ability. First they'll be able to register as a user, add classes, add students to their classes, and add assignments.

![ERD](/readmeAssets/teacherHub_erd.png)

## Tentative component heirarchy

The app will be built with React.js leveraging protected routes and conditional rendering.

![CHD](/readmeAssets/teacherHubCHD.png)

## Wireframes / Concepting

A general idea/medium res wireframe for the look and feel of different app pages and features.

### Sign in page
![sign-in](/readmeAssets/signin.png)

### Class portal
![class portal](/readmeAssets/portal.png)

### Add a class
![add a class](/readmeAssets/addClass.png)

### Add a student
![add a student](/readmeAssets/addStudent.png)

## Styleguide

Since the branding of our project revolves around GAs brand its best to avoid arbitrary departures from the look and feel of General Assembly's own website. Below are recommendation on colors and typography to ensure group is on the same page and will develop a cohesive project.

### Colors

- ![#212222](https://placehold.co/15x15/212222/212222.png) `212222` , `RGB: 33, 34, 34`
- ![#c3c3c1](https://placehold.co/15x15/c3c3c1/c3c3c1.png) `c3c3c1` , `RGB: 195, 195, 193`
- ![#f3f3f4](https://placehold.co/15x15/f3f3f4/f3f3f4.png) `f3f3f4` , `RGB: 243, 243, 244`
- ![#ffffff](https://placehold.co/15x15/ffffff/ffffff.png) `ffffff` , `RGB: 255, 255, 255`
- ![#a01d21](https://placehold.co/15x15/a01d21/a01d21.png) `a01d21` , `RGB: 160, 29, 33`
- ![#ef4845](https://placehold.co/15x15/ef4845/ef4845.png) `ef4845` , `RGB: 239, 72, 69`
- ![#bca430](https://placehold.co/15x15/bca430/bca430.png) `bca430` , `RGB: 188, 164, 48`
- ![#feda00](https://placehold.co/15x15/feda00/feda00.png) `feda00` , `RGB: 254, 218, 0`
- ![#017992](https://placehold.co/15x15/017992/017992.png) `017992` , `RGB: 1, 121, 146`

### Type

GA's sans-serif is `Circular` which isn't free but their font-stack includes `Helvetica` and `Arial` as fallbacks.

Similarly, their serif font is `News 706` which also isn't free but their font-stack for this includes `Georgia` as a fallback.

## Stretch goals

Our main goal is to create a hub for professors but if we complete this successfully and with leftover time we would like to have users with different levels of permissions, including TAs and students (the latter of which would only be able to view their own assignements list and update their github URL and deplyoyed URL fields).