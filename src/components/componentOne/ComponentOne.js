import React from 'react';
import store from './../../store/store';
import testAction from '../../store/actionCreators/testActionCreator';

export default function ComponentOne() {
  const changeHandler = (event) => {
    store.dispatch(testAction(event.target.value));
  };

  return (
    <div>
      <input
        type='text'
        name='text'
        onChange={(event) => changeHandler(event)}
      />
    </div>
  );
}
