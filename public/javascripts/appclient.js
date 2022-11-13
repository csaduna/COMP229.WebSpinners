// File Name: appclient.js
// Name: Christian Aduna
// Student ID: 301250889
// Date: 12 November 2022

{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}