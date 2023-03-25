import React, { useState } from 'react';
import store from './../../store/store';

export default function ComponentTwo() {
  const [text, setText] = useState('');
  store.subscribe(() => setText(store.getState()));

  return (
    <div>
      <h1>{text.testValue}</h1>
    </div>
  );
}
