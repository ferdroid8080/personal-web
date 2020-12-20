import { useState } from 'react';
import initialState from '../../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToFav = payload => {
    setState({
      ...state,
      favs: [...state.favs, payload]
    })
  }

  const removeFromFav = payload => {
    setState({
      ...state,
      favs: state.favs.filter(item => item.id !== payload.id)
    })
  }

  return {
    state,
    addToFav,
    removeFromFav
  }
}

export default useInitialState;
