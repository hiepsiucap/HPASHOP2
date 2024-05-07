/** @format */

export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  }).format(number);
  return newNumber;
};
export const formatDate = (isostring) => {
  const day = new Date(isostring);
  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const days = day.getDate();
  return `${days}/${month}/${year}`;
};
export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
export const SortProduct = ({ sort, loaderdata }) => {
  let temporders = [...loaderdata];
  if (sort === "az") {
    temporders = loaderdata.sort(function (a, b) {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "za") {
    temporders = loaderdata.sort(function (a, b) {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x < y) {
        return 1;
      }
      if (x > y) {
        return -1;
      }
      return 0;
    });
  } else if (sort === "higheststock") {
    temporders = loaderdata.sort(function (a, b) {
      if (a.stock < b.stock) {
        return 1;
      }
      if (a.stock > b.stock) {
        return -1;
      }
      return 0;
    });
  } else if (sort === "loweststock") {
    temporders = loaderdata.sort(function (a, b) {
      if (a.stock < b.stock) {
        return -1;
      }
      if (a.stock > b.stock) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "bestseller") {
    temporders = loaderdata.sort(function (a, b) {
      if (a.item.length < b.item.length) {
        return 1;
      }
      if (a.item.length > b.item.length) {
        return -1;
      }
      return 0;
    });
  } else if (sort === "highestprice") {
    temporders = loaderdata.sort(function (a, b) {
      if (a.price < b.price) {
        return 1;
      }
      if (a.price > b.price) {
        return -1;
      }
      return 0;
    });
  }
  return temporders;
};
export const SortFunction = ({ sort, loaderdata }) => {
  let temporders = [...loaderdata];
  if (sort === "az") {
    temporders = loaderdata.sort(function (a, b) {
      let x = a.customername.toLowerCase();
      let y = b.customername.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "za") {
    temporders = loaderdata.sort(function (a, b) {
      let x = a.customername.toLowerCase();
      let y = b.customername.toLowerCase();
      if (x < y) {
        return 1;
      }
      if (x > y) {
        return -1;
      }
      return 0;
    });
  } else if (sort === "mostprice") {
    temporders = loaderdata.sort(function (a, b) {
      if (a.total < b.total) {
        return 1;
      }
      if (a.total > b.total) {
        return -1;
      }
      return 0;
    });
  } else if (sort === "lowestprice") {
    temporders = loaderdata.sort(function (a, b) {
      if (a.total < b.total) {
        return -1;
      }
      if (a.total > b.total) {
        return 1;
      }
      return 0;
    });
  } else if (sort === "recentday") {
    temporders = loaderdata.sort(function (a, b) {
      const x = new Date(a.createdAt);
      const y = new Date(b.createdAt);
      if (x < y) {
        return 1;
      }
      if (x > y) {
        return -1;
      }
      return 0;
    });
  } else if (sort === "longday") {
    temporders = loaderdata.sort(function (a, b) {
      const x = new Date(a.createdAt);
      const y = new Date(b.createdAt);
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  }

  return temporders;
};
