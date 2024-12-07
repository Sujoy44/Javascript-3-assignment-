const userMap = new Map();

function addUser(name, age, email) {
  userMap.set(name, { age, email });
}

function updateUser(name, newAge, newEmail) {
  const user = userMap.get(name);
  if (user) {
    user.age = newAge;
    user.email = newEmail;
  }
}

function deleteUser(name) {
  userMap.delete(name);
}

addUser("Alice", 25, "alice@example.com");
addUser("Bob", 30, "bob@example.com");

updateUser("Alice", 26, "alice.new@example.com");

deleteUser("Bob");

console.log(userMap); // Output: Map { 'Alice' => { age: 26, email: 'alice.new@example.com' } }