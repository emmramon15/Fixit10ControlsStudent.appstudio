
btnLogin.onclick=function(){
  req = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php" , "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPassword.value)

if (req.status == 200) { //everything worked.
  lbl.Reponse.hidden = false
  lbl.Response.value = "Your LDAP return code was " + req.responseText
  if (req.responseText == 1) 
    ChangeForm(favFoods)
  else 
    NSB.MsgBox("Incorrect login information")
  //1 good 0 bad
} else  
  NSB.MsgBox("had a problem was the AJAX request.")
  
}



btnFavFoods.onclick=function(){
  ChangeForm(favFoods)
}
