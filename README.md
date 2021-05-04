# Project 2
A Spring backend with React frontend with PostgreSQL database

# Project Description
Need a car? Maximus Car Rental will take care of your transportation needs. Simply create an account and log in to view our massive collection of cars and reserve when you need it. Admins can also add new cars to the database and deny customer reservations.

Maximus Car Rental is the future 

# Tools and APIs
- PostgreSQL
- Gradle
- log4j
- Jest
- Docker
- Spring
- React
- JDBC
- User stories
- AWS
- Swagger

### Functionality
- Login Authentication & Authorization
- Session Management
- Database Persistence
- Dashboard Interface

# Getting Started
### To start Spring server
- at root:
```bash 
gradle bootRun
```
will be on port 8080

### To start React server 
- at cd rental-react:
- download node
- (cd into rental-react folder) 
```bash
npx install yarn
yarn install
yarn start
```
Will be on port 3000

### To run tests
- For backend:
- at root (same as starting Spring server)
```bash
gradle test
```
- For frontend:
- in react-rental directory (same as starting React server)
```bash
npm test
```

### To view Swagger-UI
http://localhost:8080/swagger-ui/
