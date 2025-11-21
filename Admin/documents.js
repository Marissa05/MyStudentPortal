document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("fullName");

  if (!name) {
    // If user is not logged in, redirect back to login
    window.location.href = "../public/login.html";
    return;
  }

  document.getElementById("displayName").textContent = name;
});



document.addEventListener("DOMContentLoaded", () => {
  const displayName = document.getElementById("displayName");
  const userName = localStorage.getItem("username");

  if (!userName) {
    window.location.href = "../public/login.html"; // redirect if not logged in
    return;
  }

  displayName.textContent = userName;

  // Profile picture functionality
  const profilePic = document.getElementById("profilePic");
  const changePicBtn = document.getElementById("changePicBtn");
  const uploadPic = document.getElementById("uploadPic");

  const savedPic = localStorage.getItem("profilePic");
  if (savedPic) profilePic.src = savedPic;

  changePicBtn.addEventListener("click", () => uploadPic.click());

  uploadPic.addEventListener("change", () => {
    const file = uploadPic.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      profilePic.src = reader.result;
      localStorage.setItem("profilePic", reader.result); // Save for next page load
    };
    reader.readAsDataURL(file);
  });
});