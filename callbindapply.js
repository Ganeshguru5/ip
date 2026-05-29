function show() {
  console.log(this.name);
}

const user = {
  name: "Ram"
};

show.call(user)

const fn = show.bind(user);

fn()