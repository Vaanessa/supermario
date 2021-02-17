var form = document.forms.form;
var message = document.getElementById("message");

form.onsubmit = function(){
    if(form.name.value ==""){
        enterAName.innerHTML = "Please enter a name";
        return false;
    }  else{
        enterAName.innerHTML = "";
        return true;
    }

};

//jag använde mig utav https://www.youtube.com/watch?v=b0pxAb_yy2U för validering