class User {
    constructor(id, name, age, email) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.email = email;
    }
  }
  
  let users = [
    { id: '1', name: 'Namitha', age: 20, email: 'namitha56@gmail.com' },
    { id: '2', name: 'riya', age: 25, email: 'riya23@gmail.com' }
  ];
  
  function createUser(name, age, email) {
    const isEmailUnique = users.every(user => user.email !== email);
    if (!isEmailUnique) {
      throw new Error('Email must be unique');
    }
    const newUser = new User(String(users.length + 1), name, age, email);
    users.push(newUser);
    return newUser;
  }
  
  function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      const deletedUser = users.splice(index, 1)[0];
      return deletedUser;
    }
    return null;
  }
  
  module.exports = { User, users, createUser, deleteUser };
  