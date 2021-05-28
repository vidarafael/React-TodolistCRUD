import React, {useState, useEffect} from 'react'
import MaterialIcon from 'material-icons-react';
import { useSelector, useDispatch } from 'react-redux'
import { doneList, deleteList, activeEditList, saveEdit } from '../actions/listActions'

function List(props) {
  const itens = useSelector((state) => state)
  const dispatch = useDispatch()

  const [textEdit, setTextEdit] = useState([])

  useEffect(() => {
    const newArray = itens.map((item, index) => {
      const {id, text} = item
      const newItem = {id, text, index}
      return newItem
    })
    setTextEdit(newArray)
  }, [itens])

  function handleEditState(text, item) {
    const newText = textEdit.map((it) => {
      if(it.id === item.id) {
        it.text = text
      }
      return it
    })

    setTextEdit(newText)

  }

  return (
    <ul>
      {itens.map(item => {
        return (
          
          <li key={item.id} className={item.done ? 'done' : ''}>
            {item.edit ? 
              <div className="div-edit">
                <input type="text" className="input-li" defaultValue={item.text} onChange={(e) => {handleEditState(e.target.value, item)} }/> 
                <button onClick={() => { 
                  console.log(itens)
                  dispatch(saveEdit(textEdit)) 
                }}>
                    <MaterialIcon icon="done" size={20} color="#76FF03"/>
                </button>
              </div> 
            : 
            <>
              <span className="item-text">{item.text}</span>
              <hr />
              <div className="div-btn">
                <button onClick={() => { dispatch(doneList(item.id)) }}><MaterialIcon icon="done" size={20} color="#76FF03"/></button> 
                <button onClick={() => { dispatch(activeEditList(item.id)) }}><MaterialIcon icon="edit" size={20} color="white"/></button> 
                <button onClick={() => { dispatch(deleteList(item.id)) }}><MaterialIcon icon="delete" size={20} color="red"/></button>
              </div> 
               
            </>}
          </li> ) 
      })}
    </ul>
  )
}

export default List