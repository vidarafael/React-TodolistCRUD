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