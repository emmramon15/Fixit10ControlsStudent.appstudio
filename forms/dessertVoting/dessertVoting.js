var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
  for (i = 0; i <= dessertsList.length -1; i++)
    drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(s){
   // this 'if' kicks user out if they  just clicked on control 
 // but not on one item in the list.
    if (typeof(s) == "object")   
      return                    
    else {  
        drpDesserts.value = s
        LblDessert.value = `You Picked ${drpDesserts.selection}- that is a great choise!`
    }
}

Button1.onclick=function(){
  ChangeForm(describeYou)
}
