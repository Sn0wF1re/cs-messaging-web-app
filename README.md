# CS Messaging Web App (Backend)

## Project Overview
CS Messaging Web App is a Node.js backend server for a messaging system. It enables customer-agent communication and provides the necessary APIs for sending, receiving, and managing messages. This backend component complements the frontend to create a full-featured messaging platform.

## Table of Contents
- [Project Overview](#project-overview)
- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Database](#database)
- [Authentication](#authentication)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
## Getting Started
Follow these instructions to set up and run the CS Messaging Web App backend on your local development environment.

### Prerequisites
Before getting started, ensure you have the following prerequisites:

- Node.js and npm installed on your system.

### Installation
1. Clone the repository.
   ```bash
   git clone https://github.com/Sn0wF1re/cs-messaging-web-app.git
   ```

2. Navigate to the project directory.
   ```bash
   cd cs-messaging-web-app/backend
   ```

3. Install project dependencies.
   ```bash
   npm install
   ```

4. Configure environment variables.
   - Create a `.env` file to set up environment variables

5. Start the server.
   ```bash
   npm serve
   ```

## API Endpoints
The backend provides the following API endpoints for managing customer-agent communication:
### Message routes
- `POST api/messages`: Send a message from a customer.
- `GET api/messages`: Retrieve messages.
- `DELETE api/messages/:messageId`: Delete specific message by its id.

### Conversation history routes
- `GET api/conversation-history/:userId`: Retrieve conversation history for a specific user.

### Customer routes
- `POST api/customers`: Create a customer.
- `GET api/customers`: Fetch all customers.
- `GET api/customers/:id`: Fetch a specific customer by id.
- `PUT api/customers/:id`: Update specific customer details by customer id.
- `DELETE api/customers/:id`: Delete specific customer by id.

### Agent routes
- `POST api/agents`: Create an agent.
- `GET api/agents`: Fetch all agents.
- `DELETE api/agents/:id`: Delete specific agent by id.

## Message response routes
- `POST api/responses/:agentId`: Create a response for a message assigned for a specific agent.
- `GET api/responses`: Fetch all responses.
- `GET api/responses/:responseId`: Fetch a response by its id.
- `DELETE api/responses/:responseId`: Delete a response by its id.



## Database
This project uses MongoDB to store and manage customer messages, agent responses, and other related data. You can find the database schema and setup instructions using Mongoose in the official websites of both Mongoose and MongoDB.

## Authentication
Authentication has not been implemented yet.

## Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose

## Contributing
Contributions to the project are welcome. To contribute, follow these steps:
- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them.
- Create a pull request.

For major changes or feature additions, please open an issue first to discuss and coordinate the work.


# CS Messaging Web App (Frontend)

## Project Overview
CS Messaging Web App is a Vue.js-based web application designed to facilitate customer-agent communication. This frontend component complements the backend server to create a simple messaging system. It allows customers to send inquiries and agents to respond to them efficiently. The frontend is just a small demonstration and needs to be improved.

## Table of Contents
- [Project Overview](#project-overview)
- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
## Getting Started
Follow these instructions to set up and run the CS Messaging Web App frontend on your local development environment.

### Prerequisites
Before getting started, ensure you have the following prerequisites:

- Node.js and npm installed on your system.

### Installation
1. Clone the repository.
   ```bash
   git clone https://github.com/Sn0wF1re/cs-messaging-web-app.git
   ```

2. Navigate to the project directory.
   ```bash
   cd cs-messaging-web-app/frontend/customerPortal
   ```

3. Install project dependencies.
   ```bash
   npm install
   ```

5. Start the development server.
   ```bash
   npm run dev
   ```

6. Open the application in your browser.
   - The application will be available at `http://localhost:5173` by default.

## Usage
Branch Messaging Web App allows customers to send messages and agents to respond to them. Use the web interface to compose and send messages, and agents can log in to respond to incoming inquiries.

## Folder Structure
The project follows a typical Vue.js project structure, including folders for components, views, and public assets. Here is a brief explanation of key folders and files:

- `src/components`: Contains reusable Vue components.
- `src/views`: Includes route-specific view components.
- `public`: For static assets like images, fonts, etc.

## Features
- Sending messages by the customer.
- View conversaation history.
- Integration with the backend server.

## Technologies Used
- Vue.js 3
- Vue Router
- Axios for HTTP requests

## Contributing
Contributions to the project are welcome. To contribute, follow these steps:
- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them.
- Create a pull request.

Major changes or feature additions need a conversation first. Open an issue to discuss and coordinate.
