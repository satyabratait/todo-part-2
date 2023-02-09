taskInput = document.getElementById("inputform");
list = document.getElementById("inputs");
clearButton = document.getElementById("outputclear");
allButton = document.getElementById("all");
incompleteButton = document.getElementById("active");
completedButton = document.getElementById("complete");
inputbutton = document.getElementById("addinput");
clearcomplete = document.getElementById("clearcompleted");


let Alltasks=[]

// input and show tasks
const add = () =>
{
    if(!taskInput.value.trim().length)
    {
        alert("Input cannot be empty")
    }
    else{
        const obj={
            text:taskInput.value,
            completed:false,
            id:Date.now()
        }
        
        Alltasks.push(obj)
       
        list.innerHTML += `
            <div data-id=${obj.id} class="task">
                <span id="taskname">
                    ${obj.text}
                </span>
                <button id=${obj.id} class="complete">
                <i class="fas fa-solid fa-check"></i>
                </button>
                <button id=${obj.id} class="delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
        taskInput.value = "";
       
    }
};

//working of each task buttons
list.addEventListener('click',(e)=>{
   if(e.target.classList.contains('complete')){
    let key=e.target.parentElement.dataset.id

    let index= Alltasks.findIndex(item=>item.id===Number(key))

    Alltasks[index].completed= true
    
    e.target.parentElement.classList.add('completed')
   }
   if(e.target.classList.contains('delete')){
    let key=e.target.parentElement.dataset.id
    let index= Alltasks.findIndex(item=>item.id===Number(key))
    Alltasks.splice(index,1)
    e.target.parentElement.remove()
   }
})

//working of all button
allButton.addEventListener('click',()=>{
    let task = document.querySelectorAll('.task')
    for (let i = 0; i < task.length; i++) {
        task[i].style.display="flex"   
    }
})

//woring of active button
incompleteButton.addEventListener('click',()=>{
    let task= document.querySelectorAll('.task')
    for (let i = 0; i < task.length; i++) {
      if(Alltasks[i].completed){
        task[i].style.display="none"  
      }
      else{
        task[i].style.display="flex"  
      }
    }

})

//working of complete button
completedButton.addEventListener('click',()=>{
    let task= document.querySelectorAll('.task')
    for (let i = 0; i < task.length; i++) {
      if(Alltasks[i].completed){
       
        task[i].style.display="flex"  
      }
      else{
      
        task[i].style.display="none"  
      }
    }

})

//working of clear button
clearButton.addEventListener('click',()=>{
    let task= document.querySelectorAll('.task')
    for (let i = 0; i < task.length; i++) { 
          task[i].remove()
      }
})

// working of enter key
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      add();
    }
});

//working of clear complete button
clearcomplete.addEventListener('click',()=>{
    let task= document.querySelectorAll('.task')
   
    for (let i = 0; i < task.length; i++) {
      // console.log(task);
      let id = task[i].dataset.id;
      let index = Alltasks.findIndex((item) =>Number(item.id)== Number(id));
      console.log(id);
      if(Alltasks[index].completed==true){
        // console.log(Alltasks[i].completed);
        task[i].remove();
      
        Alltasks.splice(index,1);
        // console.log(Alltasks);
      }
    }
});

// working of add button
inputbutton.addEventListener("click", ()=>{
  add();
});