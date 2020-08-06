class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=> a-b)
    this.length = this.items.length
  }

  get(pos) {
    if(this.items[pos]){
      return this.items[pos];
    }else{
      throw new Error('OutOfBOunds');
    }
  }

  max() {
    if(this.items.length > 0){
      this.items.sort((a,b)=> a-b)
      return this.items[this.items.length-1]
    }else{
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if(this.items.length > 0){
      this.items.sort((a,b)=> a-b)
      return this.items[0]
    }else{
      throw new Error('EmptySortedList');
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
