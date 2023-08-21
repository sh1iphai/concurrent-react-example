const getMessage = async (): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "Hello Suspense";
};

let loadedData: string | null = null;
const fetchMessage = () => {
  if (loadedData) {
    return loadedData;
  } else {
    throw getMessage().then((data) => {
      loadedData = data;
    });
  }
};

export const SuspendMessage = () => {
  const message = fetchMessage();
  return <div>{message}</div>;
};
