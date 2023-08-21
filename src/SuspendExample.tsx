const getExample = async (): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "This is Example";
};

let loadedData: string | null = null;

const fetchExample = () => {
  if (loadedData) {
    return loadedData;
  } else {
    throw getExample().then((data) => {
      loadedData = data;
    });
  }
};

export const SuspendExample = () => {
  const message = fetchExample();
  return <div>{message}</div>;
};
