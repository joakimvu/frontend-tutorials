const loginAsWdsBtn = document.getElementById("login-wds");
const loginAsJoakimBtn = document.getElementById("login-joakim");
const loginAsTestBtn = document.getElementById("login-test");
const adminBtn = document.getElementById("admin");
const responsesDiv = document.getElementById("responses");

loginAsWdsBtn.addEventListener("click", () => {
  login("WDS");
});

loginAsJoakimBtn.addEventListener("click", () => {
  login("Joakim");
});

loginAsTestBtn.addEventListener("click", () => {
  login("Test");
});

adminBtn.addEventListener("click", () => {
  fetch("http://localhost:3000/adminData", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.text())
    .then((data) => (responsesDiv.textContent = data));
});

const login = (username) => {
  fetch("http://localhost:3000/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  })
    .then((res) => res.text())
    .then((data) => (responsesDiv.textContent = data));
};
