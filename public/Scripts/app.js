// IIFE -- Immeditately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for(button of deleteButtons)
        {
            button.addEventListener("click", (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }
    }

    window.addEventListener('load', Start);
    
})();

/* 
File name:
Student Name: Roman Gagarin
Student #: 300866285
Date: October 18th, 2021
*/
