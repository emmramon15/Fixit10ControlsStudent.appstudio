
RadDescribeYou.onchange=function(){
  LblRadio.value = `I agree you are a very ${$("input[name=RadDescribeYou]:checked").prop("value")} person!`
}



BtnFavExPage.onclick=function(){
  ChangeForm(favExercisesAB)
}
