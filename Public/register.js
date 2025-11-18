document.addEventListener("DOMContentLoaded", () => {
  // ---------- REGISTER ----------
  const regForm = document.getElementById("registerForm");
  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value.trim();
      const confirm = document.getElementById("regConfirm").value.trim();

      if (!fullName || !email || !password || !confirm) {
        alert("Please fill in all fields.");
        return;
      }

      if (password !== confirm) {
        alert("Passwords do not match.");
        return;
      }

      const user = { fullName, email, password };
      localStorage.setItem("user", JSON.stringify(user));

      alert("Registration successful!");
      window.location.href = "login.html";
    });
  }

  
});

