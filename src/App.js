import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Redux Example
import { updateDescription, updateDescriptionToDefault } from './redux/feature/example/exampleSlice';

import './App.scss';

function App() {
  const example = useSelector((state) => state.example.description);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <header className="App-header">

        {/*Redux example setup */}
          {example}
          <button onClick={() => dispatch(updateDescription('hi'))}>Update Message</button>
          <button onClick={() => dispatch(updateDescriptionToDefault())}>Default Message</button>
        {/*Redux example setup */}
      </header>
    </div>
  );
}

export default App;
