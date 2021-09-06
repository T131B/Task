let addBtn = document.getElementById('addBtn');
let taskInput = document.getElementById('taskInput');
let noTasks = document.getElementById('noTasks');
let allTasks = document.getElementById('allTasks');
let invalid = document.getElementById('invaild');
let closeValidationMassege = document.querySelector('#invaild .close');
// ===== add Task
let addTask=()=>{
    let taskData = taskInput.value
    if( taskData.trim()== "" || taskInput.value.length < 3 || taskInput.value.length > 20 ){
        invalid.classList.remove('none')
    }else{
        noTasks.remove();
        // allTasks.innerText = taskData;
        allTasks.innerHTML += `
        <div class = "alert alert-warning">  ${taskData}   <i class="  float-right delete far fa-trash-alt" style="font-size: 20px;"></i>
      
         </div>`;
    }

}
addBtn.addEventListener('click' , addTask);
closeValidationMassege.addEventListener('click' , function(){
    invalid.classList.add('none')

})
document.addEventListener('click' , (e)=>{
   if(e.target.classList.contains('delete')){
       e.target.parentElement.remove();
   }
})

