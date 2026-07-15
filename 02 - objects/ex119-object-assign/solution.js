const user = {
  id: Date.now(),
  name: "Alexandre",
  age: 29,
  course: "Web Developer",
};

const newUser = Object.assign({}, user);
newUser.status = "enrolled";

console.log(user);
console.log(newUser);
