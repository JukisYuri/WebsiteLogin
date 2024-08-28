document.addEventListener('DOMContentLoaded', (event) => {
    const loginPopup = document.querySelector('.wrapper');
    const overlay = document.querySelector('.overlay');
    const btnLoginPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const navigationLinks = document.querySelectorAll('.navigation a');
    const navButton = document.querySelector('.navigation .btnLogin-popup');

    // Ẩn phần login khi mở trang web
    loginPopup.classList.remove('show');
    overlay.classList.remove('show');

    // Hiện phần login khi bấm vào nút Login
    btnLoginPopup.addEventListener('click', () => {
        btnLoginPopup.classList.add('glitch');
        setTimeout(() => {
            btnLoginPopup.classList.remove('glitch');
            btnLoginPopup.classList.add('transition');
        }, 500);

        loginPopup.classList.add('show');
        overlay.classList.add('show');
        navigationLinks.forEach(link => {
            link.classList.add('disabled');
        });
        navButton.classList.add('disabled');
    });

    // Đóng phần login khi bấm vào dấu X
    iconClose.addEventListener('click', () => {
        loginPopup.classList.remove('show');
        overlay.classList.remove('show');
        navigationLinks.forEach(link => {
            link.classList.remove('disabled');
        });
        navButton.classList.remove('disabled');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const numFlakes = 1000; // Số lượng hạt tuyết
    const snowflakesContainer = document.createElement('div');
    snowflakesContainer.classList.add('snowflakes');
    document.body.appendChild(snowflakesContainer);

    for (let i = 0; i < numFlakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.width = `${Math.random() * 5 + 2}px`;
        snowflake.style.height = snowflake.style.width;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.top = `${Math.random() * -100}px`; // Bắt đầu từ phía trên đầu trang
        snowflake.style.animationDuration = `${Math.random() * 5 + 2}s`;
        snowflake.style.opacity = Math.random() * 0.7 + 0.3;
        snowflakesContainer.appendChild(snowflake);
    }
});

