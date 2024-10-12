# GRAPH

This is a full-stack TypeScript web application built with Node.js & Express
backend and a React frontend. The app integrates with Microsoft Graph API to
fetch and display user data.

## Features

1. Fetch and display users from Microsoft Graph API.
2. Secure authentication using Azure AD client credentials.
3. CORS-enabled backend for seamless API communication with the frontend.
4. This application is not deployed to Azure App Service.

## Running the Project Locally

### Environment Variables

The following environment variables are required for the backend:

- AZURE_TENANT_ID - Your Azure tenant ID.
- AZURE_CLIENT_ID - The client ID of your Azure AD app registration.
- AZURE_CLIENT_SECRET - The client secret for the Azure AD app registration.
- AZURE_SCOPE - The scope for accessing Microsoft Graph API, typically
  `<https://graph.microsoft.com/.default>`.

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Azure AD app registration with required API permissions (e.g., User.Read.All)

### Clone the repository

git clone `<repository-url>`
cd `<repository-directory>`

### Install dependencies

#### Run the install in both client and API

```sh
npm install
```

### Set up environment variables

Create a `.env` file in the api directory and populate it with the environment
variables shown above.

### Run the backend (localhost:7890)

```sh
cd api
npm run dev
```

### Run the frontend (localhost:7891)

```sh
cd client
npm start
```

Webpack should open the browser window for you.

## Feedback

I welcome questions! Feel free to pass on those. I am a collector.
