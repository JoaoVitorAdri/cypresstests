Cypress Installation and Test Execution Guide

This guide will walk you through the process of installing Cypress using npm install and how to run tests using Cypress.

Prerequisites
Before you begin, make sure you have the following prerequisites installed on your system:

Node.js and npm: Cypress requires Node.js and npm to be installed. You can download and install them from https://nodejs.org/.
Installation
Follow these steps to install Cypress using npm:

Create a new directory for your Cypress project or navigate to an existing project directory.

Open your terminal and navigate to the project directory.

Run the following command to initialize a new npm project if you haven't already:

Install Cypress as a development dependency in your project by running:

npm install 

This command will download and install Cypress and its dependencies. It may take a few minutes.

Configuration
Cypress can be configured via a cypress.json file in your project's root directory. You can generate a basic configuration file by running the following command:

Running Tests
Cypress provides a Test Runner that allows you to interactively run and debug your tests. To open the Test Runner, run the following command:

npx cypress open

This will open the Cypress Test Runner, which provides a graphical interface for running and managing your tests.

To run tests in headless mode (useful for CI/CD pipelines), you can use the following command:

npx cypress run

This will run your tests in the terminal without opening the Test Runner.
