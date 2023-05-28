# Lab 8 - Starter

Team 18 Lab Teammates: Kavi Nelakonda, Fangyu Zhu

## Check Your Understanding Answers

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
Answer: Within a Github action that runs whenever code is pushed 
Explanation: Using a Github action whenever code is pushed is automated and is reliable. If I were to manually run the tests locally, there is a possiblility I forget to test when pushing my code. A github action is also more efficient and allows you to keep a log of where/when the bugs occurred. Additionally, by running the test before development is completed, I identify any problems in my development early. 

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
Answer: No, unit testing is likely a better choice for this. E2E is intended to replicate the user's workflow for the entire application, likely with multiple functions. Testing a specific function's correct output is rather small and encapuslated, which is what unit testing is for.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
Answer: No, E2E testing would be better for this feature. As stated in the lab, this style of testing is intended to replicate a user's workflow. Unit testing is more intended to test invidividual parts. Since a messaging feature has many moving parts and large scale components, unit testing would not be best.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Answer: Yes, we can use unit testing for this “max message length” feature. This is a small scale feature, and an encapsulated unit. Unlike question 3, this does not interact with another user, so there are very few moving parts. An example of a way to test is by passing different message lengths and seeing if the messages are allowed or not.



