let user = {
  id: Date.now(),
  name: "Alexandre",
  age: 29,
  course: "Web Developer",
  phoneNumber: "(90) 1111-1111",
};

delete user.phoneNumber;

console.log(user);
