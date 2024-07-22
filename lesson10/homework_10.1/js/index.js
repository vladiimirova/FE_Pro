const user = {
  firstName: 'Tania',
  age: 19,
  city: 'Kharkiv',

  getInfo: function() {
    return `Name: ${this.firstName}, Age: ${this.age}, City: ${this.city}`;
  }
};

console.log(user.getInfo());