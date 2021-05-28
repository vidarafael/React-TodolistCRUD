import Item from '../Item'

function addList(text) {
  const item = new Item(text)
  return {type: "ADD_ITEM", payload: item}
}

function doneList(id) {
  return {type: "DONE_LIST", payload: id}
}

function deleteList(id) {
  return { type: "DELETE_LIST", payload: id}
}

function activeEditList(id) {
  return {type: "EDIT_LIST", payload: id}
}

function saveEdit(stateText) {
  return {type: "SAVE_EDIT", payload: stateText }
}

export {addList, doneList, deleteList, activeEditList, saveEdit}