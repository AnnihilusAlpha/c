function register() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var course = document.getElementById("course").value;
    var msg = document.getElementById("msg");
    if (msg) {
        msg.textContent = "Registered: " + name + ", Age: " + age + ", Course: " + course;
    }
}
