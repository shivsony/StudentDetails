window.onload = function() {

    var retrievedData = localStorage.getItem("quentinTarantino"); 

    var list = JSON.parse(retrievedData);
    
    document.getElementById("list1").innerHTML = list[0].name;
    document.getElementById("list2").innerHTML = list[0].email;
    document.getElementById("list3").innerHTML = list[0].mob;
}