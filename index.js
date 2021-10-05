let arr=["X","Y"]
var flag =arr[Math.floor(Math.random()*arr.length)]//intiate flag
var inpt=["count",null,null,null,null,null,null,null,null,null] // initiate array with 0th element as no use
var count=0;//count the number of clicks
var wins= false;
var match="Two Player"

var bot_inp=[1,2,3,4,5,6,7,8,9]
console.log(bot_inp)

function win(){
 wins= true
 let i =1
 while (i<10) {
  document.getElementById(i).disabled=true
  i++
 }
}

function selectType(select){
  match=select.name
}


// onClick function TWO players
function clic(btn){

  if(match=="Two Player"){

  count++ 
  if(flag==="X"){
  let val=document.getElementById(btn.id).innerHTML="O"
    val="O"
  inpt[Number(btn.id)]=val
  document.getElementById(btn.id).setAttribute("class","selected_y")
  flag="O"
  if (count>4){
   const re= validate(val)
   if (re==val){
    document.getElementById("h2").innerHTML=val +" wins"
    setInterval(fina(),30000);
    win()
  }
 }
  }

  else{
    let val=document.getElementById(btn.id).innerHTML="X"
    val="X"
  inpt[Number(btn.id)]=val
    document.getElementById(btn.id).setAttribute("class","selected_x")
    flag="X"
    if (count>4){
      const re=validate(val)
      if (re==val){
        document.getElementById("h2").innerHTML=val +" wins"
        setInterval(fina(),30000);
        win()
      }
    }

  }

}else if(match=='One Player'){

  let index=bot_inp.indexOf(Number(btn.id))
  bot_inp.splice(index,1)
  console.log(bot_inp,index,btn.id)
  count+2 

  if(flag==="X"){
  let val=document.getElementById(btn.id).innerHTML="O"
    val="O"
  inpt[Number(btn.id)]=val
  document.getElementById(btn.id).setAttribute("class","selected_y")
  flag="O"
  if (count>4){
   const re= validate(val)
   if (re==val){
    document.getElementById("h2").innerHTML=val +" wins"
    setInterval(fina(),30000);
    win()
  }
 }
  }


}



    document.getElementById(btn.id).disabled=true
    // disbale button after click
    if (count==9 && wins==false)
      {document.getElementById("h2").innerHTML="Game Draw!! Play Again"
      fina()
    }    
}

function reset(reset){
  window.location.reload()
}



function fina(){
    document.getElementById("reset").style.visibility="visible"    
}

function validate(val){
  console.log(inpt,val)
  if (inpt[1]==val && inpt[2]==val && inpt[3]==val){
    return val
  }
  else if (inpt[4]==val && inpt[5]==val && inpt[6]==val){
    return val
  } 
  else if (inpt[7]==val && inpt[8]==val && inpt[9]==val){
    return val
  } 
  else if (inpt[1]==val && inpt[4]==val && inpt[7]==val){
    return val
  } 
  else if (inpt[2]==val && inpt[5]==val && inpt[8]==val){
    return val
  } 
  else if (inpt[3]==val && inpt[6]==val && inpt[9]==val){
    return val
  } 
  else if (inpt[1]==val && inpt[5]==val && inpt[9]==val){
    return val
  } 
  else if (inpt[3]==val && inpt[5]==val && inpt[7]==val){
    return val
  } 

  return false

}
