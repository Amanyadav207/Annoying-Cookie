
const modal = document.getElementById('modal')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

const closebtn = document.getElementById("modal-close-btn");

closebtn.addEventListener("click",()=>{
        modal.style.display='none';
  
})