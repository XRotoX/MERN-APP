import React from 'react'
import AppNavBar from './components/AppNavBar'
import ShoppingList from './components/ShoppingList'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


import { Provider, provider } from 'react-redux'
import store from './store'
import { Container } from 'reactstrap'
import ItemModel from './components/itemModal'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <Container>
          <ItemModel/>
          <ShoppingList />
        </Container>

      </div>
    </Provider>

  );
}

export default App
