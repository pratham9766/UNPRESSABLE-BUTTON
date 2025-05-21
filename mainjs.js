// const button = document.querySelector('#pressbutton');

// button.addEventListener('mouseover', () => {

    
    //     button.style.left = X + 'px';
    //     button.style.top = Y + 'px';
    // });
    
    
    const req = document.querySelector('.req');
    const yesBtn = document.querySelector('.pressbutton');
    const noBtn = document.querySelector('.yes');
    const reqRect = req.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();
    
    yesBtn.addEventListener('click', () => {
        const hlo = document.querySelector('h1');
        hlo.innerHTML = 'MOST WELCOME :)';
    });
    noBtn.addEventListener('mouseover', () => {
        const i = Math.floor(Math.random() * (reqRect.width - noBtnRect.width)) + 1;
        const j = Math.floor(Math.random() * (reqRect.height - noBtnRect.height)) + 1;
        // const i = Math.floor(Math.random()*(70-500)+500);
        // const j = Math.floor(Math.random()*(70-500)+500);
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});