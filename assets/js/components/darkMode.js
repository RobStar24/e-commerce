function darkMode () {
    const themeButton = document.querySelector('.btn--theme');

    function fn () {
        document.body.classList.toggle('dark')
    }

    themeButton.addEventListener('click', fn)

}

export default darkMode