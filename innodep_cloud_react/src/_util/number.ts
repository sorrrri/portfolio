const commaFormat = (value: number) => {
  if (!value && value !== 0) {
    return '';
  }

  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export { commaFormat };
