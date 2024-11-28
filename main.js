const btnNew = document.querySelector('.btn-new');

btnNew.addEventListener('click', add);

function add() {
   var val = document.getElementById('input').value;

   if(val === ""){
    return 1
   }

   var str = document.createElement('li');

   str.innerHTML = `
      <a href="#">${val}</a>
       <button class="delete-btn">Х</button>
   `;

    str.querySelector('.delete-btn').addEventListener('click',function(){
        str.remove();
    })

    document.querySelector('ol').append(str);
    document.getElementById('input').value = ""; 
 
}



