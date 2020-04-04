import { useState, useCallback } from 'react';

function useToggle(initStatus = false) {
  const [value, setValue] = useState(initStatus);
  const toggle = useCallback(() => setValue(prevValue => !prevValue), []);
  return [value, toggle, setValue];
}

export default useToggle;