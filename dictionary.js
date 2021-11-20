class Dictionary {
  constructor() {
    this.dictionary = {};
  }
  // add an item with (key, value) pair
  add(key, value) {
    this.dictionary[key] = value;
  }
  // get an item with key
  get(key) {
    return this.dictionary[key];
  }
}
