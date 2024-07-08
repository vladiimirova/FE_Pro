let ladder = {
  position: 0, 

  up: function() {
    this.position++;
    return this; 
  },

  down: function() {
    this.position--;
    return this; 
  },

  showStep: function() {
    console.log(`Ви знаходитесь на сходинці номер ${this.position}`);
    return this; 
  }
};

ladder.up().up().down().showStep(); 
