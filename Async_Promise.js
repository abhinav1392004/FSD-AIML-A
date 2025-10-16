function loginUser(username, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User logged in:", username);
      resolve({ username, id: 1 });
    }, 1000);
  });
}

function getUserData(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetching data for:", user.username);
      resolve({ ...user, score: 92 });
    }, 1000);
  });
}

function displayData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User Data:", data);
      resolve();
    }, 500);
  });
}

function attemptTest(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(user.username, "is attempting the test...");
      resolve();
    }, 500);
  });
}

function logout(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User logged out:", user.username);
      resolve();
    }, 500);
  });
}

function main() {
  loginUser("Abhinav", "1234")
    .then(getUserData)
    .then((data) => displayData(data).then(() => data))
    .then((data) => attemptTest(data).then(() => data))
    .then((data) => logout(data))
    .then(() => console.log("call other function"));
}

main();
