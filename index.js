const parafo= document.querySelectorAll('.parafo-inf');
const triangulo= document.querySelectorAll('.triangulo2');

triangulo.forEach(tr=>{
    tr.addEventListener('click',()=>{
      tr.classList.toggle('logo')
    })
}
    )