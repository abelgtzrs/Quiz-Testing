# Tech Quiz Testing

## Description

This project is a full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack. It features a technical quiz interface that allows users to test their knowledge by answering randomized questions and receiving a score at the end. This iteration of the application focuses on implementing a robust test suite using Cypress for both end-to-end (E2E) and component testing, ensuring application stability, correctness, and maintainability.

The testing suite is structured to validate key user interactions, UI rendering, and functionality as outlined in provided user stories and acceptance criteria.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Walkthrough](#walkthrough)
- [Screenshot](#screenshot)
- [License](#license)
- [Contributors and Questions](#contributors-and-questions)

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/tech-quiz-testing.git
   cd tech-quiz-testing
   ```

2. **Install Root Dependencies**
   ```bash
   npm install
   ```

3. **Install Client Dependencies**
   ```bash
   cd client
   npm install
   ```

4. **Install Server Dependencies**
   ```bash
   cd ../server
   npm install
   ```

5. **Configure Environment Variables**
   - Rename `.env.example` to `.env`
   - Provide your MongoDB connection string:
     ```
     MONGODB_URI=mongodb://localhost:27017/quizdb
     ```

6. **Seed the Database**
   ```bash
   npm run build
   npm run seed
   ```

7. **Run the Application**
   In one terminal:
   ```bash
   npm run dev --prefix server
   ```
   In another:
   ```bash
   npm run dev --prefix client
   ```

---

## Usage

To invoke the Cypress test suite:

- **Run End-to-End Tests**
  ```bash
  npm run test
  ```

- **Run Component Tests (Optional)**
  ```bash
  npm run test:component
  ```

- **Open Cypress GUI for Manual Testing**
  ```bash
  npx cypress open
  ```

Ensure that both client and server are running before launching tests.

---

## Features

- Full MERN stack integration
- Quiz experience with 10 randomized questions
- Real-time score tracking
- E2E tests verifying user flow from start to finish
- Component tests validating isolated UI rendering
- Structured folder layout for scalability and clarity
- Clean test outputs with pass/fail status and screenshots

---

## Walkthrough

A full walkthrough video demonstrating the component and end-to-end test execution can be found here:

[Watch the walkthrough video]([https://your-video-link.com](https://youtu.be/gYbW1L2WIzA))

The video covers:

- Application startup
- Database and server verification
- Test execution via CLI
- Passing test outputs

---

## Screenshot

![SComponent Testing](https://github.com/user-attachments/assets/389b8c92-6f23-49a8-9ad8-681cea86951e)
![E2E Testing](https://github.com/user-attachments/assets/d69f6c97-0c87-4012-9f8a-fc0685c7e43a)

> This screenshot illustrates the quiz in action, showing the user interface for answering questions and receiving a score.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributors and Questions

**Created by:**  
Abel Gutierrez  
Full-Stack Web Development Bootcamp Student  
University of Central Florida

For any questions or feedback, please contact:  
**Email:** abelgtzrs@gmail.com  
**GitHub:** [@abelgtzrsv](https://github.com/abelgtzrs)

