document.addEventListener("DOMContentLoaded", () => {
  const regForm = document.getElementById("registerForm");

  // Open or create IndexedDB
  const request = indexedDB.open("UserDB", 1);

  request.onupgradeneeded = () => {
    const db = request.result;
    // Create object store "users" with email as the unique key
    if (!db.objectStoreNames.contains("users")) {
      db.createObjectStore("users", { keyPath: "email" });
    }
  };

  request.onsuccess = () => {
    const db = request.result;

    regForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value.trim();
      const confirm = document.getElementById("regConfirmPassword").value.trim();

      if (!fullName || !email || !password || !confirm) {
        alert("Please fill in all fields.");
        return;
      }

      if (password !== confirm) {
        alert("Passwords do not match.");
        return;
      }

      const tx = db.transaction("users", "readwrite");
      const store = tx.objectStore("users");

      const user = { fullName, email, password };

      const addUser = store.add(user);

      addUser.onsuccess = () => {
        alert("Registration successful! You can now log in.");
        window.location.href = "login.html"; // redirect to login
      };

      addUser.onerror = () => {
        alert("This email is already registered.");
      };
    });
  };

  request.onerror = () => {
    console.error("Database failed to open");
  };
});
