export const setItem = (id, item) => {
  window.localStorage.setItem(id, JSON.stringify(item));
};

export const getItem = id => {
  const localStorageData = window.localStorage.getItem(id);

  return JSON.parse(localStorageData);
};
