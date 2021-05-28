/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]

    case 'DONE_LIST':
      return state.map((item) => {
        if(item.id === action.payload) {
          item.done = !item.done
        }
        return item
      })
    
    case 'DELETE_LIST':
      return state.filter((item) => item.id !== action.payload)

    case 'EDIT_LIST':
      return state.map((item) => {
        if(item.id === action.payload) {
          item.edit = true
        }
        return item
      })

    case 'SAVE_EDIT':
      return state.map((item, index) => {
        if(item.id === action.payload[index].id) {
          item.edit = false
          item.text = action.payload[index].text
        }
        return item
      })
      
    default:
      return state
      
  }
}
