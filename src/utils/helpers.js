export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format((number * 10) / 10);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  return ["all", ...new Set(unique)];
};
