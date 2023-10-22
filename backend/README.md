# CS Messaging Web App (Backend)

## Project Overview
CS Messaging Web App is a Node.js backend server for a messaging system. It enables customer-agent communication and provides the necessary APIs for sending, receiving, and managing messages. This backend component complements the frontend to create a full-featured messaging platform.

## Table of Contents
- [Project Overview](#project-overview)
- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Additional Features](#additional-features)
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
## Additional Features
I implemented distribution of messages to agents using the round-robin approach when a client sends a message.

## API Endpoints
The backend provides the following API endpoints for managing customer-agent communication:
### Message routes
- `POST api/messages`: Send a message from a customer and assign to an agent.
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
