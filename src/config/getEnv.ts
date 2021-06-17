export enum EnvKeys {
  API_URL,
}

let envVars = {};

//TODO: do we need this bit if we're just doing process.env??
export async function loadConfig() {
  const response = await fetch("./config.json");

  envVars = await response.json();
}

export default function getEnv(key: EnvKeys): string {
  const value = envVars[key];

  if (value === undefined) {
    throw new Error(`Unknown ENV var '${key}' requested!`);
  }
  //   return value is our process.env
  return value;
}

/*

How continuous deployment works:

1. new branch 
2. PR against staging branch
3. Code review, tests, linting, etc
4. Build the artifact
5. Tag the artifact (probably munging branch, or maybe just next version)
6. Archive the artifact in our image repo
7. Deploy the artifact to an env (staging)
8. full regression (automated) test suite
9. Deploy the artifact to production

(deploy phase)
1. look up the desired image (by tag)
2. deploy it to new env
3. cut over from old instances

*/
