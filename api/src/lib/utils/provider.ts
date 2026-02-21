import dotenv from 'dotenv';
dotenv.config();

const tenant = process.env.AZURE_TENANT_ID ?? '';
const client = process.env.AZURE_CLIENT_ID ?? '';
const secret = process.env.AZURE_CLIENT_SECRET ?? '';
const scope = process.env.AZURE_SCOPE ?? '';

export async function getAccessToken(): Promise<string> {
  try {
    if (!tenant || !client || !secret || !scope) {
      throw new Error('Missing Azure credentials (tenant, client, secret, or scope)');
    }

    const tokenEndpoint = `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`;

    const body = new URLSearchParams();
    body.append('client_id', client);
    body.append('client_secret', secret);
    body.append('scope', scope);
    body.append('grant_type', 'client_credentials');

    const resp = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body.toString()
    });

    if (!resp.ok) {
      const text = await resp.text();
      throw new Error(`Token endpoint error: ${resp.status} ${resp.statusText} - ${text}`);
    }

    const json = await resp.json();
    if (!json.access_token) {
      throw new Error('No access_token in token response');
    }

    return json.access_token as string;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`There was an error acquiring the token: ${error.message}`);
    } else {
      console.error('There was an error acquiring the token', error);
    }
    throw error;
  }
}
