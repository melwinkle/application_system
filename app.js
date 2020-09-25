function alert_user(){
    alert("Congratulations ${first},!Your details have been confirmed!")
}




function tran_dets(){
    let first= document.getElementById("fname").value;
    let last= document.getElementById("lname").value;
    let birth= document.getElementById("dob").value;
    let gend= document.getElementById("gender").value;
    let email= document.getElementById("mail").value;
    let number= document.getElementById("phone").value;


    localStorage.setItem("First Name",first);
    localStorage.setItem("Last Name",last);
    localStorage.setItem("dob",birth);
    localStorage.setItem("gende",gend);
    localStorage.setItem("mail",email);
    localStorage.setItem("phone",number);

    return false;
}





   


