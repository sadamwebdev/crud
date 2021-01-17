const btn = document.getElementById('btn1')
const input = document.getElementById('input1')
const todo = document.getElementById('todo')



let setarr = []

btn.addEventListener('click',addtask)

function addtask(){
   let value = input.value;
    let check = value.trim().length
    
    if(value =="" || check == 0){
        alert('Enter some value')
        value="";
        return
    }
   
   /* create element */
  craeteele(value)

}

function set(value){
    setarr.push(value) 
  localStorage.setItem('task',JSON.stringify(setarr)) 
  console.log(localStorage.setItem('task',JSON.stringify(setarr)) );

}
function get(){
    let tasks= JSON.parse(localStorage.getItem('task'))
     console.log(tasks);
     for(x in tasks){
         console.log(tasks[x]);
         craeteele(tasks[x])
     }
 }
 get() 



      /* creating new element */
function craeteele(value){

 let newElement =document.createElement('div')
 newElement.innerText = value
 newElement.setAttribute('class','task ')
 todo.append(newElement)
 

    /* second element icon*/
  const secondElement = document.createElement('i')
  secondElement.setAttribute('class',"fas fa-trash-alt")

  newElement.insertAdjacentElement('beforeend',secondElement)
  
  /* make empty after entered value*/
    input.value = "";
    set(value)

  /*  deltask */
    secondElement.addEventListener('click',deltask)
    function deltask(){
     
    let ele =this.previousSibling.nodeValue

      if(confirm('Are you sure you want to DELETE')){
       this.parentNode.remove()
       
       for(i=0 ;i<setarr.length;i++){
          if(setarr[i] == ele){
                   setarr.splice(i,1)   
                  }
       }
       localStorage.setItem('task',JSON.stringify(setarr))
       
      }
   }
}
 /* input */
input.addEventListener('keyup',add)
function add(event){
    if(event.keyCode === 13){
        addtask()
    }
} 
 


