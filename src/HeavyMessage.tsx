const loop = () => {
  let i = 0;
  while (i < 10000000000) i++;
};

loop();

function HeavyMessage() {
  return <>Heavy message!</>;
}

export default HeavyMessage;
