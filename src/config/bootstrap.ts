export default async function initApp(
  setIsBooted: (isBooted: boolean) => void
) {
  await initConfig();

  setIsBooted(true);
}
