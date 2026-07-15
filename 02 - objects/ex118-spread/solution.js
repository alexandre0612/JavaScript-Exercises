const user = {
  id: Date.now(),
  name: "Alexandre",
  age: 29,
  course: "Web Developer",
};

const newUser = { ...user };
newUser.status = "enrolled";

console.log(user);
console.log(newUser);
