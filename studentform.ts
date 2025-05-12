function register() {
  let name = (document.getElementById("name") as any).value;
  let age = (document.getElementById("age") as any).value;
  let course = (document.getElementById("course") as any).value;


  let msg = document.getElementById("msg");
  if (msg) {
    msg.textContent = "Registered: " + name + ", Age: " + age + ", Course: " + course;
  }
}