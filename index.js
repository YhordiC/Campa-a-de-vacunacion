const parafo= document.querySelectorAll('.parafo-inf');
const triangulo= document.querySelectorAll('.triangulo2');
const listaHeader= document.querySelector('.container-nav');
const Close= document.getElementById('close');
const menu = document.getElementById('menu');

menu.addEventListener('click',()=>{
  listaHeader.classList.add('lista')
  menu.style.display='none';
  Close.style.display='block';

})
Close.addEventListener('click',()=>{
  listaHeader.classList.remove('lista');
  menu.style.display='block';
  Close.style.display='none';
})

triangulo.forEach(tr=>{
    tr.addEventListener('click',()=>{
      tr.classList.toggle('logo')
    })
} )

