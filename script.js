function showDetails() {
    alert("Details shown successfully!");
    var name=document.getElementById("name").Value;
    var roll=document.getElementById("roll no").Value;
    var Department=document.getElementById("dept").Value;
    var year=document.getElementById("year").Value;
    document.getElementById("output").innerHTML=
    "Name:"+name+"<br>"
    "Roll no"+roll+"<br>"
    "Department"+dept+"<br>"
    "Year"+year+"<br>";
}
