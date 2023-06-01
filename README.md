# CVWO AY2021/22 Assignment

## About Me

#### Name: Rui Cong
#### Matriculation No: A0234692Y

I am a Year 1 Computer Science Major currently studying in National University of Singapore (NUS).
This is my source code for my application for the Computing for Voluntary Welfare Organisations (CVWO), which is a project under NUS.

## About the App

I have implemented the frontend of this webpage using ReactJS and backend using Ruby on Rails.
Database uses SQLite to store user-created data and Axios API is assisting with linking the front and backends.

Functionalities
- Display all created tasks
- Filter by search bar and/or tags
- Create a new task with input fields
- Edit a current task
- Delete a current task
- Create/Delete tags

## How to use

1. Download the zip file from the [repository](https://github.com/thamruicong/CVWO_Project) and unzip it.
2. `cd` into the `CVWO_Project` folder.
3. Run `npm install` to download dependencies.
4. Run `rake db:migrate` to setup schema.
5. Run `rails server` on (preferably) an Ubuntu terminal to start the server.
6. The application will be run on [http://localhost:3000/](http://localhost:3000/)

If there is any questions concerning usage of the application, you can view the User Manual section in FinalWriteUp.pdf.
