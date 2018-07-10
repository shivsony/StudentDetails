function Student(name,email,mob) {
    this.name = name;
    this.email = email;
    this.mob = mob;
}
var arr = new Array();
function NewOb() {
    var Name = document.getElementById("name").value
    var Email = document.getElementById("email").value
    var Mob = document.getElementById("mob").value
//    localStorage.setItem("name",Name);
//    localStorage.setItem("email",Email);
//    localStorage.setItem("mob",Mob);
    arr.push(new Student(Name,Email,Mob));
    localStorage["arr"] = JSON.stringify(arr);
}
