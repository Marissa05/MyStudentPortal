document.addEventListener("DOMContentLoaded", () => {
  const regForm = document.getElementById("registerForm");

  regForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    const confirm = document.getElementById("regConfirmPassword").value.trim();

    if (!fullName || !email || !password || !confirm ) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }

    const request = indexedDB.open("UserDB", 1);

    request.onsuccess = () => {
      const db = request.result;

      const tx = db.transaction("users", "readwrite");
      const store = tx.objectStore("users");

      const user = { fullName, email, password };

      const addUser = store.add(user);

      addUser.onsuccess = () => {
        alert("Registration successful!");
        window.location.href = "login.html"; // redirect
      };

      addUser.onerror = () => {
        alert("This email is already registered.");
      };
    };
  });
});
