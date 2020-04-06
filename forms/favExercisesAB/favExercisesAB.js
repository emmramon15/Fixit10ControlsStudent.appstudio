var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercisesAB.onshow=function(){

}

selExercises.onfocusout=function(){

}



BtnExercise.onclick=function(){
  if (selExercises.text[0] == "situps" && selExercises.text[1] == "plank") {
    NSB.MsgBox("You chose situps and plank- those are the two core exercises")
} else { 
    NSB.MsgBox("You did not pick the two core exercises")
}
}

BtnMobileNavPage.onclick=function(){
  ChangeForm(mobileNav)
}
