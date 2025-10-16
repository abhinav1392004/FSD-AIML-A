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
      resolve({ ...user, score: 97 });
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

async function main() {
  const user = await loginUser("Abhinav", "1234");
  const data = await getUserData(user);
  await displayData(data);
  await attemptTest(user);
  await logout(user);
  console.log("call other function");
}

main();
