import React from 'react'
import MaterialIcon from 'material-icons-react';

function List(props) {

  return (
    <ul>
      {props.list.map(item => {
        return (
          
          <li key={item.id} className={item.done ? 'done' : ''}>
            {item.edit ? 
              <div className="div-edit">
                <input type="text" className="input-li" defaultValue={item.text} onChange={(e) => { props.handleEditState(e.target.value, item)}}/> 
                <button onClick={() => {props.handleEdit(item) }}><MaterialIcon icon="done" size={20} color="#76FF03"/></button>
              </div> 
            : 
            <>
              <span className="item-text">{item.text}</span>
              <hr />
              <div className="div-btn">
                <button onClick={() => { props.doneList(item)}}><MaterialIcon icon="done" size={20} color="#76FF03"/></button> 
                <button onClick={ () => { props.editList(item)}}><MaterialIcon icon="edit" size={20} color="white"/></button> 
                <button onClick={() => { props.deleteList(item)}}><MaterialIcon icon="delete" size={20} color="red"/></button>
              </div> 
               
            </>}
            
          </li> ) 
      })}
    </ul>
  )
}

export default List