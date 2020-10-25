const capitalize = (str) => {
  // return str.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
   return str.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
};

export default capitalize;