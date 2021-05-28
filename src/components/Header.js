import React, {useState} from 'react'
import {addList} from '../actions/listActions'
import { useDispatch } from 'react-redux'

function Header(props) {
  const [classHeader, setClassHeader] = useState(false)
  const [text, setText] = useState("")

  const dispatch = useDispatch()

  function handleChange(e) {
    const textInput = e.target.value
    setText(textInput)
  }

  function click(e) {
    e.preventDefault()

    setClassHeader(true)
    setTimeout(() => {
      setClassHeader(false)
    }
    ,300)

    dispatch(addList(text))
    setText("")
  }

  return (
    <div>
      <header>
        <h1 className={classHeader ? 'header-ativo' : ''}>Todo List React</h1>
        <form action="">
          <input type="text" onChange={handleChange} value={text}/>
          <button onClick={click}>Adicionar</button>
        </form>
      </header>
    </div>
  )
}

export default Header

