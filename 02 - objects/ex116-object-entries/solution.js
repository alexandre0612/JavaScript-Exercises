const user = {
  id: Date.now(),
  name: "Alexandre",
  age: 29,
  course: "Web Developer",
};

let studentData = Object.entries(user);

for (let [key, value] of studentData) {
  console.log(`${key}: ${value}`);
}
