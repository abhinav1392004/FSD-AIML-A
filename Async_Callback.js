function loginUser(username, password, callback) {
  setTimeout(() => {
    console.log("User logged in:", username);
    callback({ username, id: 1 });
  }, 1000);
}

function getUserData(user, callback) {
  setTimeout(() => {
    console.log("Fetching data for:", user.username);
    callback({ ...user, score: 88 });
  }, 1000);
}

function displayData(data, callback) {
  setTimeout(() => {
    console.log("User Data:", data);
    callback();
  }, 500);
}

function attemptTest(user, callback) {
  setTimeout(() => {
    console.log(user.username, "is attempting the test...");
    callback();
  }, 500);
}

function logout(user, callback) {
  setTimeout(() => {
    console.log("User logged out:", user.username);
    callback();
  }, 500);
}

function main() {
  loginUser("Abhinav", "1234", (user) => {
    getUserData(user, (data) => {
      displayData(data, () => {
        attemptTest(user, () => {
          logout(user, () => {
            console.log("call other function");
          });
        });
      });
    });
  });
}

main();
