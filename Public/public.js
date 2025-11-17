// =============================
// REGISTER USER
// =============================
document.addEventListener("DOMContentLoaded", () => {

  const regForm = document.getElementById("registerForm");

  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value.trim();
      const confirm = document.getElementById("regConfirm").value.trim();

      // Validate fields
      if (fullName === "" || email === "" || password === "" || confirm === "") {
        alert("Please fill in all fields.");
        return;
      }

      if (password !== confirm) {
        alert("Passwords do not match.");
        return;
      }

      // Save to localStorage
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      alert("Registration successful!");
      window.location.href = "login.html"; // Redirect to login
    });
  }
});


// =============================
// LOGIN USER
// =============================
document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const emailInput = document.getElementById("regEmail").value.trim();
      const passwordInput = document.getElementById("loginPassword").value.trim();

      // Get stored credentials
      const savedEmail = localStorage.getItem("email");
      const savedPassword = localStorage.getItem("password");

      if (!savedEmail || !savedPassword) {
        alert("No registered account found. Please register first.");
        return;
      }

      // Compare login details
      if (emailInput === savedEmail && passwordInput === savedPassword) {
        alert("Login successful!");
        window.location.href = "../admin/dashboard.html"; // Redirect to dashboard
      } else {
        alert("Incorrect email or password!");
      }
    });
  }
});
