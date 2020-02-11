function SendValue(){
  
document.getElementById("resultNom").innerHTML=localStorage.getItem("nom");
document.getElementById("resultPrenom").innerHTML=localStorage.getItem("prenom");
document.getElementById("resultNUMERO D’IDENTIFICATION").innerHTML=localStorage.getItem("NUMERO D’IDENTIFICATION");
document.getElementById("resultMAIL").innerHTML=localStorage.getItem("MAIL");
document.getElementById("resultNUMERO DE TELLEPHONE").innerHTML=localStorage.getItem("NUMERO DE TELLEPHONE");
document.getElementById("resultCONTENU DE L'ORDONNANCE").innerHTML=localStorage.getItem("CONTENU DE L'ORDONNANCE");
document.getElementById("resultCONTENU creer ordonnance").innerHTML=localStorage.getItem("creer ordonnance");

}
