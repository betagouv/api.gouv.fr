import { useState, useCallback } from 'react';

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue || '');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const resetInput = useCallback(() => {
    setValue(initialValue || '');
  }, [initialValue]);

  return [value, onChange, resetInput];
}
