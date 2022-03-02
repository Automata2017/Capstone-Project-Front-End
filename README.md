# Capstone-Project-Front-End
Front in of CinQue Wilson's Capstone Project: The Mini Ticket Survey

Link to Back End: https://github.com/Automata2017/Capstone-Project-Back-End

## Welcom to the Back End of the Mini Ticket Survey App with Java Spring Boot

This project is about recreating a smaller version of the exit tickets given by General Assembly at the end of each class using a REST API to allow users to submit surveys into a database in a very similar manner. These faux exit tickets can be accessed by anyone with the app so they can post their own tickets with their own comments and information.

### Front End Note

1. The first thing to do for the front wnd is to connect it to the back end so that you're able to post the tickets to the database.
2. Once the front and back end are talking to each other and the database is visible on the front end, the next step is simply making the actual ticket formet, asking questions and allowing users to post answers that can then be submitted into the satabase itself.

### Entity Relationship Diagram (ERD):

| Tickets |
| --- | :--- |
|ticket_id|INT|
|full_name|STRING|
|email_address|STRING|
|week_number|INT|
|lesson_name|STRING|
|student_rating|STRING|
|student_comment|INT|
|student_recomendation|BOOLEAN|

### User Stories

|:---|
|As a student I want to type out answers for questions that ask me to type|
|As a student I want to answer questions that ask for number between 1 and 10|
|As a student I want to answer yes or no questions with a button|
|As a student I want to submit my servey when completed for the teacher to see|
|As a student I want the severy submit button to not be available until all ansers are filled|
|As a teacher I want to pull up the servey of my students to review them|

### System Tools Used
1. Postman
2. IntelliJ IDEA 17
3. Postgress
4. Springboot
5. LucidApp
6. Visual Studio Code

### Project Challenges
1. For the front end, the first major challenge was trying to connet it to the back end. As it turns out, I was very close first time around, but there was a single, significant line that I was missing.
2. The second, smaller challenge was just formatting the ticket. The boolean specifically was what was giving me the most trouble. I had to go through several sites and ask instructors before finding the code needed to animate the button.
