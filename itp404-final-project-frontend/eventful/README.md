Who is the primary audience?

-->Students.

What problem are you trying to solve?

-->Upload photos recording classes, notes etc. Sort them by data, location, and class tags.

How will the project requirements be fulfilled?

-->This project request the use of all 4 kind of restful services, post, update, delete, and read notes object posted. when users choose to display the locations, of all his/her updated nodes, it will use google map api, and mark all the geolocation using a tag from their photo uploaded.

API endpoints:

one api service for data storage and following are the end points for them

super_note/add

super_note/delete

super_note/update

super_note/get

one api service for the main app interface

page/

  the main route, with buttons for navigation, welcome page

page/search

  search node and display them, with function that display all

  page/search/display_all

page/edit

  edit route to upload new notes, including text, pictures, may be audio

page/location_view

  route dedicated for google api, view of the location of all notes taken.
  
page/advanced

  route for some non-trivial data processing helping organizing notes and generate statistics for display.
