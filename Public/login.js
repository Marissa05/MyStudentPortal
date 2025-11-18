
// ---------- LOGIN ----------
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const emailInput = document.getElementById("loginEmail").value.trim();
      const passwordInput = document.getElementById("loginPassword").value.trim();

      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (!savedUser) {
        alert("No registered account found. Please register first.");
        return;
      }

      if (emailInput === savedUser.email && passwordInput === savedUser.password) {
        // Save full name for dashboard greeting
        localStorage.setItem("username", savedUser.fullName);

        // Redirect to dashboard
        window.location.href = "../admin/dashboard.html";
      } else {
        alert("Incorrect email or password!");
      }
    });
  }




  