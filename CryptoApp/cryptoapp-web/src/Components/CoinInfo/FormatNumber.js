export const formatNumber = (value) => {
  if (value >= 1) {
    const formattedValue = value.toLocaleString("en", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formattedValue.endsWith(".00")
      ? formattedValue.slice(0, -3)
      : formattedValue;
  } else if (value >= 0.001) {
    return value.toLocaleString("en", {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    });
  } else if (value > 0) {
    return value.toFixed(8).replace(/\.?0+$/, "");
  } else {
    return "0";
  }
};
