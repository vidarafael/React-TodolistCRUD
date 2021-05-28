class Item {

  constructor(text) {
    this.id = this.random()
    this.text = text
    this.done = false
    this.edit = false
  }

  random() {
    return parseFloat((Math.random() * 10000).toFixed(4))
  }
}

export default Item

// useEffect(() => {
  //   const storageList = JSON.parse(localStorage.getItem('item'))
  //   setList(storageList)

  //   const storageText = JSON.parse(localStorage.getItem('textEdit'))
  //   setTextEdit(storageText)
  // }, [])

  // useEffect(() => {
  //   const doneEdit = list.map(({edit,...it }) => {
  //     return it
  //   })

  //   localStorage.setItem('item', JSON.stringify(doneEdit))
  //   localStorage.setItem('textEdit', JSON.stringify(textEdit))
  // }, [list, textEdit])

  // function updateStateText(text) {
  //   setText(text)
  // }  

  // function updateStateList(item) {
  //   setList([...list, item])
  //   const {id, text} = item
  //   const obj = {id, text}
  //   setTextEdit([...textEdit, obj])
  //   setText('')
  // }

  // function doneList(item) {
  //   const donelist = list.map((it) => {
  //     if(it.id === item.id) {
  //       it.done = !it.done
  //     }
  //     return it
  //   })
  //   setList(donelist)
  // }

  // function deleteList(item) {
  //   const filterList = list.filter((it) => { return it.id !== item.id })
  //   setList(filterList)

  //   const filterListText = textEdit.filter((it) => it.id !== item.id)
  //   setTextEdit(filterListText)
  // }

  // function editList(item) {
  //   const editUpdate = list.map((it) => { 
  //     if(it.id === item.id) {
  //       it.edit = true
  //     }
  //     return it
  //   })
  //   setList(editUpdate)
    
  // }

  // function handleEditState(text, item) {
  //   const newText = textEdit.map((it) => {
  //     if(it.id === item.id) {
  //       it.text = text
  //     }
  //     return it
  //   })
  //   setTextEdit(newText)
  // }

  // function handleEdit(item) {
  //   const editTextList = textEdit.map((it) => {
  //     if(it.id === item.id) {
  //       item.text = it.text
  //       item.edit = false;
  //     }
  //     return it
  //   })
    
  //   setList(editTextList)
    
// }