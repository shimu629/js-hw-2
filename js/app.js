const bulb = document.getElementById('bulb');
        const onBtn = document.getElementById('onBtn');
        const offBtn = document.getElementById('offBtn');

        onBtn.addEventListener('click', () => {
            bulb.classList.add('on');
        });

        offBtn.addEventListener('click', () => {
            bulb.classList.remove('on');
        });