//DECLARACION DE VARIABLES GLOBALES

let MAIN;
let MODAL_POST;
let BTN_SHOW_POST;
let BTN_CANCEL_POST;

//FUNCIONES

const showPostModal = () =>{
    MAIN.style.display = 'none';
    MODAL_POST.style.display = 'block';

    setTimeout(()=>{
        MODAL_POST.style.transform= 'translateY(0)';
    }, 100);
}

const hidePostModal = () => {
    MODAL_POST.style.transform = 'translateY(100%)';
    setTimeout(() => {
        MODAL_POST.style.display = 'none';
        MAIN.style.display = 'block';
    }, 300);
}

//INICIALIZACION
window.addEventListener('load', () => {
    // Obtener referencias a los elementos
    MAIN = document.getElementById('main');
    MODAL_POST = document.getElementById('modal-post-section');
    BTN_SHOW_POST = document.getElementById('btn-upload-post');
    BTN_CANCEL_POST = document.getElementById('btn-post-cancel');

    // Event listeners
    if (BTN_SHOW_POST) {
        BTN_SHOW_POST.addEventListener('click', showPostModal);
    }
    
    if (BTN_CANCEL_POST) {
        BTN_CANCEL_POST.addEventListener('click', hidePostModal);
    }

    // Inicializar Material Design Lite
    if (typeof componentHandler !== 'undefined') {
        componentHandler.upgradeDom();
    }
});


