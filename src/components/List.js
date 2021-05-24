import React from 'react'

function List(props) {



  return (
    <ul>
      {props.list.map(item => {
        return (
          
          <li key={item.id} className={item.done ? 'li done' : ''}>
            {item.edit ? 
              <>
                <input type="text" defaultValue={item.text} onChange={(e) => { props.handleEditState(e.target.value, item)}}/> 
                <button onClick={() => {props.handleEdit(item) }}>Editar</button>
              </> 
            : 
            <>
              {item.text} <button onClick={() => { props.doneList(item)}}>✔</button> 
              <button onClick={ () => { props.editList(item)}}>🖍</button> 
              <button onClick={() => { props.deleteList(item)}}>❌</button> 
            </>}
            
          </li> ) 
      })}
    </ul>
  )
}

export default List