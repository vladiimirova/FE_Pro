const contactsBook = {
  contacts: [
    {name: 'Alice', phone: '1234567890', email: 'alice@example.com'},
    {name: 'Bob', phone: '9876543210', email: 'bob@example.com'},
    {name: 'Charlie', phone: '5555555555', email: 'charlie@example.com'}
  ],

  findContact: function(name) {
    const contact = this.contacts.find(function(contact) {
      return contact.name === name;
    });
    return contact ? contact : 'Контакт не знайдено';
  },

  addContact: function(name, phone, email) {
    this.contacts.push({ name: name, phone: phone, email: email });
  }
};


console.log(contactsBook.findContact('Bob')); 


contactsBook.addContact('David', '4444444444', 'david@example.com');
console.log(contactsBook.contacts);