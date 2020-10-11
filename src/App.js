import React from 'react';
import './App.css';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import  DCandidates from '../src/components/DCandidates';
import { Container } from "@material-ui/core";

// we can't directly access this store inside our component instead we'll use react-redux package (intermediate between react and redux)
function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg" >
      <DCandidates />
      </Container>
    </Provider>
  );
}

export default App;
