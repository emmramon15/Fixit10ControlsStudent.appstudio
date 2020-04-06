let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]


LstGroup1.onclick=function(choice){
  lblFavFoods.value = `You picked ${NSB.$("LstGroup1_" + choice).textContent} - that is a great choice!`
}


btnDessert.onclick=function(){
  ChangeForm(dessertVoting)
}
