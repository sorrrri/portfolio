const range = (from: number, to: number): number[] => {
  let ret: number[] = [];
  for (let i = from; i <= to; i++) {
    ret = [...ret, i];
  }

  return ret;
};

export { range };
