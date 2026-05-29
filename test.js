class User {
  constructor(name) {
    this.name = name;
    User.count++;
  }
  static countUsers() {
    console.log(this.count)
  }

  static count = 0;
}

const u1 = new User("Ganeshguru")
const u2 = new User("Geo")

User.countUsers()