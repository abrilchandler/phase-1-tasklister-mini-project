/* document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
   buildToDo(e.target.to_do.value) 
   form.reset()// your code here
})
})

function buildToDo(todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x'
  p.textContent = `${todo}`
  p.appendChild(btn)
  document.querySelector('#todo_container').appendChild(p)
}
 
function handleDelete(e) {
  e.target.parentNode.remove()
}
*/

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDo(e.target.new_task_description.value)
    
  })
})

function handleToDo(todo){
  console.log(todo)
  let p = document.createElement('p')
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x'
  p.textContent = todo
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
  document.querySelector("form").reset()
  console.log(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}




