$(window).ready(function () {
    $("#ab1").click( function () {
        let lsuserid = $("input[name=Username").val();
      let lspassword = $("input[name=password").val();

      if(lsuserid != "" && lspassword != "") {

        let url = document.getElementsByTagName('form').namedItem('formm').action='index.html';
        let lsplatform = "LK";
        var xmlhttpLogin = new XMLHttpRequest();
                xmlhttpLogin.onreadystatechange = function()
                {
                  if(this.readyState == 4 && this.status == 200) 
                  {      
                    try 
                    {
                      let validResponse=decryption(xmlhttpLogin.responseText)
                      
                      validResponse=JSON.parse(validResponse)

                      if(validResponse.login != 'Failure')
                      {
                        console.log(validResponse);
                        alert('Logged in')
                      }
                      else
                      {
                        alert("Your Userid & Password are Invalid !");
                      };
                    }
                    catch(error)
                    {
                      console.log("Error : "+error.message + " in " + xmlhttpLogin.responseText);
                    };
                  };
                };
                xmlhttpLogin.open("GET",url,true);
                xmlhttpLogin.send();
      }else if(lsuserid == "" && lspassword == "") {
                    $(".inpu").css({ border: "solid red 1px" });
                  } else if (lsuserid != "" && lspassword == "") {
                    $("#password").css({ border: "solid red 1px" });
                  } else if (lsuserid == "" && lspassword != "") {
                    $("#Username").css({ border: "solid red 1px" });
                  }
                  // else
                      // {
                      //   alert("Your Userid & Password are Invalid !");
                      // };
    });
  });