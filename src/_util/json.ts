const tryParse = (object: any, defaultValue: any) => {
  try {
    return JSON.parse(object);
  } catch {
    return defaultValue;
  }
};

export { tryParse };
