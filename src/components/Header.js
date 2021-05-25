import React from 'react'
import Item from '../Item'

function Header(props) {

  function handleChange(e) {
    const text = e.target.value
    props.updateStateText(text)
  }

  function click(e) {
    e.preventDefault()
    const item = new Item(props.text)
    props.updateStateList(item)
  }

  return (
    <div className="">
      <header className>
        <h1>Todo List React</h1>
        <form action="">
          <input type="text" onChange={handleChange} value={props.text}/>
          <button onClick={click}>Adicionar</button>
        </form>
      </header>
    </div>
  )
}

export default Header

