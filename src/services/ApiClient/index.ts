import getEnv from "../../config/getEnv";
import { User } from "./models";

async function getResource<T>(path: string): Promise<T[]> {
  const baseUrl = getEnv('API_URL');
  const response = await fetch(`${baseUrl}/${path}`);

  const resources = await response.json() as T[];

  return resources as T[];
}

export async function getUsers(): Promise<User[]> {
  return getResource<User>('users');
}

