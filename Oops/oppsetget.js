class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const u1 = new User()
u1.age = 20 // setter without setter
console.log(u1.age); /// gettter without getter
