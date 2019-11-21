const main = async () => {
  const mod = await import('./mod');
  console.log(mod);
};

main();