import React from 'react'
import './App.css';

import listReducer from './reducers/listReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Header from './components/Header'
import List from './components/List'

function setItensLocalStorage() {
  const arrayStore = store.getState()
  const newArray = arrayStore.map((item) => {
    const {edit, ...itens} = item
    const newItens = itens
    return newItens
  })
  localStorage.setItem('item', JSON.stringify(newArray))
}

function loadItensLocalStorage() {
  const verify = localStorage.getItem('item')
  if(verify) {
    return JSON.parse(localStorage.getItem('item'))
  }
}

const store = createStore(listReducer, loadItensLocalStorage())
store.subscribe(() => { 
  setItensLocalStorage()
})

function App() {

  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <List></List>
      </Provider>
    </>
  );
}

export default App;
