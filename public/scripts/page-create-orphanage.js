/*create map */ 
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15)

/* create and add tileLayer*/ 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map) //longetude e latitude e zoom//

/*create icon*/ 
const icon = L.icon({
    iconUrl:"/public/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
})
 
let marker;

//create add marker
map.on('click', (event)=>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    //remover icon 
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

//upload  photos 
function addPhotofield(){
    //pega o conteiner de fotos #id images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    //verificar o campo se esta vazio //
    const input = newFieldContainer.children[0]

    if(input.value == ""){ //ele verifica se tem a imagem seecionar caso não ela volta//
        return
    }
    // clear field the name
    input.value = ""
    //adicionar o clone ao conteiner de #imagens 
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    // //event.currentTarget vê daonde vem o evento que esta acontecendo //
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();
}

//troca dos botoes sim e não 
function toggleSelect(event){
    //retirar  class .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach((button)=> button.classList.remove('active')) //executa uma fução do botão
    
    //colocar a class .active no botão clicado
    const button =event.currentTarget
    button.classList.add('active')
   
    //atualizar o meu input com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    //verificar se sim ou não
    input.value = button.dataset.value


}