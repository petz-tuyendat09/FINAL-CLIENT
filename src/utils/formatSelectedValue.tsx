const formatSelectedKeys = (keysSet: any) => {
  return Array.from(keysSet).join(", ").replaceAll("_", " ");
};

export default formatSelectedKeys;
