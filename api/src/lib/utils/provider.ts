import { ConfidentialClientApplication } from '@azure/msal-node';
import dotenv from 'dotenv';
dotenv.config();

const tenant = process.env.AZURE_TENANT_ID ?? '';
const client = process.env.AZURE_CLIENT_ID ?? '';
const secret = process.env.AZURE_CLIENT_SECRET ?? '';
const scope = process.env.AZURE_SCOPE ?? '';

const msalConfig = {
  auth: {
    clientId: client,
    authority: `https://login.microsoftonline.com/${tenant}/`,
    clientSecret: secret
  }
};

const cca = new ConfidentialClientApplication(msalConfig);

export async function getAccessToken(): Promise<string> {
  try {
    const result = await cca.acquireTokenByClientCredential({
      scopes: [scope]
    });

    if (result?.accessToken) {
      return result.accessToken;
    } else {
      throw new Error('Failed to get access token');
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        `There was an error acquiring the token: ${error.message}`
      );
    } else {
      console.error('There was an error acquiring the token', error);
    }
    throw error;
  }
}
