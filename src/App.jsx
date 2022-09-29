import React from 'react';

import './App.css';

import Projects from './containers/Projects';

import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';

function App() 
{
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <div className='App'>
        <hgroup className='text-center'>
          <h3>These are my works</h3>
          <h4>
            <a href="https://github.com/ferdroid8080">github</a>
          </h4>
        </hgroup>
        <Projects projects={initialState.projects} />
      </div>
    </AppContext.Provider>
  )
}

export default App;
