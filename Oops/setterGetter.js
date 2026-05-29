class Employee {
  #firstName= "not setted"
  #lastName="not setted"
  get firstName() {
    return this.#firstName + this.#lastName
  }
  set firstName(value) {
    this.#firstName = value
  }
  set lastName(value) {
    this.#lastName = value
  }
}

const u1 = new Employee()

u1.firstName = "Ganeshguru"
u1.lastName = "A"

console.log(u1.firstName)