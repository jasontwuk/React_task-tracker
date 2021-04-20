import { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));

  // *** if savedValue is not empty, return savedValue
  if (savedValue) {
    return savedValue;
  }

  // *** if savedValue is a function, then call that fucntion
  if (initialValue instanceof Function) {
    return initialValue();
  }

  // *** if not the above situations...
  return initialValue;
}

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  // *** when "value" is changed, use useEffect to store "value" to localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
