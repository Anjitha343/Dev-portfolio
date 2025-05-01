const button=document.querySelector('.mobile-nav');
        const menu=document.querySelector('.mobile-nav-menu');
        const closeButton=document.querySelector('.close-menu');
        const links=document.querySelectorAll('.mobile-nav-menu a');
        button.addEventListener('click',function(){
            menu.classList.toggle('open') ;
        });
        close.addEventListener('click',function(){
            menu.classList.remove('open');
        });
        links.forEach(link=>{
            link.addEventListener('click',function(){
                menu.classList.remove('open');

            });
        } );