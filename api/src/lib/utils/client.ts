import {
  AuthProviderCallback,
  Client
} from '@microsoft/microsoft-graph-client';
import { getAccessToken } from './provider';

interface GraphUser {
  id?: string;
  displayName?: string;
  mail?: string;
  userPrincipalName?: string;
}

interface GraphResponse {
  value: GraphUser[];
}

export async function getUserData(): Promise<GraphUser[]> {
  try {
    const accessToken = await getAccessToken();

    const client = Client.init({
      authProvider: (done: AuthProviderCallback) => {
        done(null, accessToken);
      }
    });

    const response = (await client
      .api('/users')
      .get()) as GraphResponse;

    if (response.value && Array.isArray(response.value)) {
      return response.value.map((user: GraphUser) => ({
        id: user.id ?? 'No ID',
        displayName: user.displayName ?? 'No Display Name',
        mail: user.mail ?? 'No Email',
        userPrincipalName: user.userPrincipalName ?? 'No UPN'
      }));
    } else {
      throw new Error('Invalid response structure');
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error fetching user data: ${error.message}`);
    } else {
      console.error('Unknown error fetching user data: ', error);
    }
    throw error;
  }
}
