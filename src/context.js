import React, { useState, useEffect, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const titleCase = (str) => {
    const titleCased = str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
    return titleCased;
  };

  const capitalCase = (str) => {
    const capitalCased =
      str.replace(/_/g, ' ').charAt(0).toUpperCase() +
      str.replace(/_/g, ' ').slice(1);
    return capitalCased;
  };

  const itCapitalCase = (service_type) => {
    if (capitalCase(service_type) === 'It training') {
      return 'IT training';
    }
  };

  const checkCase = (service_type) => {
    if (capitalCase(service_type) === 'It training') {
      return itCapitalCase(service_type);
    } else {
      return capitalCase(service_type);
    }
  };

  const camelCase = (str) => {
    const camelCased = str.replace(/_([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
    return camelCased;
  };

  const snakeCase = (str) => {
    const snakeCased = str.replace(/ /g, '_').toLowerCase();
    return snakeCased;
  };

  return (
    <AppContext.Provider
      value={{
        titleCase,
        capitalCase,
        itCapitalCase,
        checkCase,
        camelCase,
        snakeCase,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

// custom hooks
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
