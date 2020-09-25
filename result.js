window.addEventListener('load',()=>{
    document.getElementById("fame").innerHTML=localStorage.getItem("First Name");
    document.getElementById("lame").innerHTML=localStorage.getItem("Last Name");
    document.getElementById("d_ob").innerHTML=localStorage.getItem("dob");
    document.getElementById("gend").innerHTML=localStorage.getItem("gende");
    document.getElementById("mail_in").innerHTML=localStorage.getItem("mail");
    document.getElementById("phone_num").innerHTML=localStorage.getItem("phone");


})