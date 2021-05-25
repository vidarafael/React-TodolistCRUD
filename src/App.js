import React, { useState, useEffect } from 'react'
import './App.css';

import Header from './components/Header'
import List from './components/List'

function App() {
  const [ text, setText ] = useState('') 
  const [ list, setList ] = useState([])

  const [textEdit, setTextEdit] = useState([])

  function updateStateText(text) {
    setText(text)
  }

  useEffect(() => {
    const storageList = JSON.parse(localStorage.getItem('item'))
    setList(storageList)

    const storageText = JSON.parse(localStorage.getItem('textEdit'))
    setTextEdit(storageText)
  }, [])

  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(list))
    localStorage.setItem('textEdit', JSON.stringify(textEdit))
  }, [list, textEdit])

  function updateStateList(item) {
    setList([...list, item])
    const {id, text} = item
    const obj = {id, text}
    setTextEdit([...textEdit, obj])
    setText('')
  }

  function doneList(item) {
    const donelist = list.map((it) => {
      if(it.id === item.id) {
        it.done = !it.done
        console.log(item)
        console.log(list, textEdit)
      }
      return it
    })
    setList(donelist)
  }

  function deleteList(item) {
    const filterList = list.filter((it) => { return it.id !== item.id })
    setList(filterList)
    const filterListText = textEdit.filter((it) => it.id !== item.id)
    setTextEdit(filterListText)
  }

  function editList(item) {
    const editUpdate = list.map((it) => { 
      if(it.id === item.id) {
        it.edit = true
      }
      return it
    })
    setList(editUpdate)
    
  }

  function handleEditState(text, item) {
    const newText = textEdit.map((it) => {
      if(it.id === item.id) {
        it.text = text
      }
      return it
    })
    setTextEdit(newText)
  }

  function handleEdit(item) {
    const editTextList = textEdit.map((it) => {
      console.log(it, item)
      if(it.id === item.id) {
        item.text = it.text
        item.edit = false;
      }
      return it
    })
    
    setList(editTextList)
    
  }

  return (
    <>
     <Header text={text} updateStateText={updateStateText} updateStateList={updateStateList}></Header>
     <List list={list} doneList={doneList} deleteList={deleteList} editList={editList} handleEditState={handleEditState} handleEdit={handleEdit} textEdit={textEdit}></List>
    </>
  );
}

export default App;
