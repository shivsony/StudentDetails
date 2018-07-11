function Student(name,email,mob) {
    this.name = name;
    this.email = email;
    this.mob = mob;
}
if (arr === arr || arr === null || arr.length === 0) {
    var arr = new Array();
}

function NewOb() {
    var Name = document.getElementById("name").value
    var Email = document.getElementById("email").value
    var Mob = document.getElementById("mob").value
    arr.push(new Student(Name,Email,Mob) );
    localStorage.setItem("quentinTarantino", JSON.stringify(arr));    
}
