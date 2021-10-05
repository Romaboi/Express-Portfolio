// IIFE -- Immeditately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener('load', Start);
    
})();

/*document.getElementById("submit").addEventListener('onclick', function(){
    window.location.href="/home";
})*/