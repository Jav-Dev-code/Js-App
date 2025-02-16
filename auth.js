function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        localStorage.setItem("role", "admin");
        window.location.href = "admin.html";
    } else if (username === "student" && password === "student123") {
        localStorage.setItem("role", "student");
        window.location.href = "student.html";
    } else {
        alert("Invalid credentials!");
    }
}

function logout() {
    localStorage.removeItem("role");
    window.location.href = "index.html";
}
