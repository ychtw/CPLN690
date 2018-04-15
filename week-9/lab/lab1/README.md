# Week 9, Lab 1 — Media Queries

## Task 1

Add a media query to make the sidebar smaller on screens that are greater
than 480px and less than 800px.

## Task 2

Now let’s focus on the mobile version of the application. On screens smaller
than 480px:

- Hide the sidebar
- Make the map full width

## Task 3

Note that the #toggle-sidebar function has a click event registered that
toggles the class .sidebar-open on the body element (see setup.js to view the
click event code). We can use that to conditionally change the layout of the
page when the user clicks on the button.

## Task 4

Make the button function. When the page loads, the user should see a full screen
map. On button click, the map should be hidden and the sidebar should be
visible. Make sure the sidebar is styled properly to be full width in this view.

## Task 5

The toggle button should only be visible on mobile.

## Task 6 (Stretch Goal)

Think about how you would handle a mobile view for your midterm project. What
layout would be best? Get a piece of paper and sketch out what it could look
like. You can try to implement it.

# Task 7 (Stretch Goal)

Change the format of the toggle. Instead of a single button, make it two buttons
—"Map" and "Sidebar" a bar across the bottom of the screen. Modify the jQuery
code to make both buttons function properly.

See the below diagram.

---------------------
|                   |
|                   |
|                   |
|                   |
|                   |
|                   |
|                   |
|                   |
---------------------
|   Map   | Sidebar |
---------------------
