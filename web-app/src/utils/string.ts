export const filterNumbers = (str: string) => {
  return (str.match(/[0-9]+/g) || []).join("");
};

export const filterCurrency = (str: string) => {
  return (str.match(/[0-9.]+/g) || []).join("");
};
