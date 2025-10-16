function loginUser(username, password) {
  console.log("User logged in:", username);
  return { username: username, id: 1 };
}

function getUserData(user) {
  console.log("Fetching data for:", user.username);
  return { ...user, score: 95 };
}

function displayData(data) {
  console.log("User Data:", data);
}

function attemptTest(user) {
  console.log(user.username, "is attempting the test...");
}

function logout(user) {
  console.log("User logged out:", user.username);
}

function main() {
  const user = loginUser("Abhinav", "1234");
  const data = getUserData(user);
  displayData(data);
  attemptTest(user);
  logout(user);
  console.log("call other function");
}

main();
