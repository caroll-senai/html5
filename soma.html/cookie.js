function checkcookie(){
    var user = getCookie("user");
    var msg = document.getElementById("msg");
    if(user != null && user != ""){
        msg.innerHTML="bem-vindo de volta"+ user;

    } else{
      user= prompt("digite seu nome", "");
      if(user != null && user != ""){

        setcookie("user", user,365);
        msg.innerHTML="bem-vindo"+ user;
      }

    }
}

function getCookie(c_name){
    var c_value = document.cookie;
    var c_start = c_value.indexOf(""+ c_name + "=");
    if (c_start == -1){
        c_value =null;

    } else{
        c_start= c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if(c_end == -1){
                c_end =c_value.length;
        }
        c_value = unescape (c_value.substring(c_start,c_end));
    }
    return c_value;
}