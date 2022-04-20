window.onload = () => {
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({includedLanguages: 'en,ig',}, 'google_translate_element');
    }

    
    

    const skip = document.querySelector('.goog-te-banner-frame');
    console.log(skip);

    const input = document.querySelector('textarea');
    const output = document.querySelector('.output');
    console.log(input);
    input.addEventListener('keyup', ()=>{
        googleTranslateElementInit();
        output.textContent = input.value;
    })
}