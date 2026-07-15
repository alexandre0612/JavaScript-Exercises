let user = {
  id: Date.now(),
  name: "Alexandre",
  age: 29,
  course: "Web Developer",
};

//Method 1 witch "."
user.email = "heitor33@fakemail.com"; //fake email
user.phoneNumber = "(90) 1111-1111"; //fake number
//Method 2 witch "..."
let userData = {
  email2: "heitor22@fakemail.com",
  phoneNumber2: "(32) 5555-5555",
};

console.log(user);
