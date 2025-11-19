document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const request = indexedDB.open("UserDB", 1);

    request.onsuccess = () => {
      const db = request.result;

      const tx = db.transaction("users", "readonly");
      const store = tx.objectStore("users");

      const getUser = store.get(email);

      getUser.onsuccess = () => {
        const user = getUser.result;

        if (!user) {
          alert("No account found with that email.");
          return;
        }

        if (user.password === password) {
          localStorage.setItem("username", user.fullName);
          window.location.href = "../admin/dashboard.html";
        } else {
          alert("Incorrect password.");
        }
      };
    };
  });
});
