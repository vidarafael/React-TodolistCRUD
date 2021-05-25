import React, {useState} from 'react'
import Item from '../Item'

function Header(props) {
  const [classHeader, setClassHeader] = useState(false)

  function handleChange(e) {
    const text = e.target.value
    props.updateStateText(text)
  }

  function click(e) {
    e.preventDefault()

    setClassHeader(true)
    setTimeout(() => {
      setClassHeader(false)
    }
    ,300)

    const item = new Item(props.text)
    props.updateStateList(item)
  }

  return (
    <div>
      <header>
        <h1 className={classHeader ? 'header-ativo' : ''}>Todo List React</h1>
        <form action="">
          <input type="text" onChange={handleChange} value={props.text}/>
          <button onClick={click}>Adicionar</button>
        </form>
      </header>
    </div>
  )
}

export default Header

