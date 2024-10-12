# GRAPH

This is a full-stack TypeScript web application built with Node.js & Express
backend and a React frontend. The app integrates with Microsoft Graph API to
fetch and display user data.

## Features

1. Fetch and display users from Microsoft Graph API.
2. Secure authentication using Azure AD client credentials.
3. CORS-enabled backend for seamless API communication with the frontend.
4. Full-stack deployment to Azure App Service.

## Environment Variables

The following environment variables are required for the backend:

- AZURE_TENANT_ID - Your Azure tenant ID.
- AZURE_CLIENT_ID - The client ID of your Azure AD app registration.
- AZURE_CLIENT_SECRET - The client secret for the Azure AD app registration.
- AZURE_SCOPE - The scope for accessing Microsoft Graph API, typically <https://graph.microsoft.com/.default>.

Example .env file:

AZURE_TENANT_ID=`<azure-tenant-id>`
AZURE_CLIENT_ID=`<azure-client-id>`
AZURE_CLIENT_SECRET=`<azure-client-secret>`
AZURE_SCOPE=`https://graph.microsoft.com/.default`

Running the Project Locally

Prerequisites

- Node.js (v14+)
- npm or yarn
- Azure AD app registration with required API permissions (e.g., User.Read.All)

## Steps to Run Locally

### Clone the repository

git clone `<repository-url>`
cd `<repository-directory>`

### Install dependencies

#### For both frontend and backend

```sh
npm install
```

### Set up environment variables

Create a `.env` file in the api directory and populate it with the environment
variables shown above.

### Run the backend

```sh
cd api
npm run dev
```

### Run the frontend

```sh
cd client
npm start
```

### Access the app

Open your browser and navigate to `http://localhost:7890` for the frontend, and
`http://localhost:7891/api/users` for the backend API.
