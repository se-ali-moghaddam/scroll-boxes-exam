const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', () => {
    const triggerScreenBottom = window.innerHeight / 1.08;
    
    boxes.forEach(box =>{
       const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerScreenBottom)
            box.classList.add('show');
        else
            box.classList.remove('show');
    });
});