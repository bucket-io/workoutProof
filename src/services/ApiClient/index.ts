import getEnv, { EnvKeys } from "../../config/getEnv";

export type ResourceType = "users" | "exercises" | "exercise_sessions";

export async function getResource<T>(type: ResourceType): T[] {
  const baseUrl = getEnv(EnvKeys.API_URL);
  const response = await fetch(`${baseUrl}/${type}`);
}
