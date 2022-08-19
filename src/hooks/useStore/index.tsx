import { useEffect, useState } from 'react';

export default function useStore<T>(
  storeKey: string,
  storeType: 'localStorage' | 'sessionStorage' = 'sessionStorage'
): [T, (newData: T | ((oldData: T) => T)) => void] {
  const _getStoreData = () => {
    let dataString = window[storeType].getItem(storeKey);
    let localData = dataString && JSON.parse(dataString);
    return localData;
  };

  const [state, setState] = useState(_getStoreData());
  const _syncStore = () => {
    let newData = _getStoreData();
    newData && setState(newData);
  };
  const updateState = (data) => {
    let newData = typeof data === 'function' ? data(state) : data;
    window[storeType].setItem(storeKey, JSON.stringify(newData));
    window.dispatchEvent(new Event('storage'));
  };

  useEffect(() => {
    window.addEventListener('storage', _syncStore);
    _syncStore();
    return () => {
      window.removeEventListener('storage', _syncStore);
    };
  }, []);

  return [state, updateState];
}
