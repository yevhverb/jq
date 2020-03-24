export const useLocalStorage = (keyName, initialValue) => {
  if (!window.localStorage.getItem(keyName)) {
    window.localStorage.setItem(keyName, JSON.stringify(initialValue));
  }

  let key = JSON.parse(window.localStorage.getItem(keyName));

  const setKey = value => {
    window.localStorage.setItem(keyName, JSON.stringify(value));
  };

  const getKey = () => JSON.parse(window.localStorage.getItem(keyName));

  return [key => getKey(), setKey];
};
