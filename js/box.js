
const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light')
const textos = document.querySelectorAll('.caption')
const textoLight = document.querySelector('.agregar-texto');
const contendLight = document.querySelector('.text-light')


imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
});


contenedorLight.addEventListener('click',(e)=>{
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
})



const aparecerImagen = (imagen)=>{
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
}

