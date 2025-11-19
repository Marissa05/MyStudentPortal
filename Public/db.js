// Open or create the database
const dbRequest = indexedDB.open("UserDB", 1);

dbRequest.onupgradeneeded = function (event) {
  const db = event.target.result;

  if (!db.objectStoreNames.contains("users")) {
    db.createObjectStore("users", { keyPath: "email" });
  }

  console.log("IndexedDB setup complete.");
};

dbRequest.onerror = function () {
  console.log("Database failed to open");
};
