!function () {
    // fix ssr
    if (!window.addEventListener) {
        return
    }
    document.body.style.fontSize = '12px'
    window.addEventListener('resize', function () {
        document.documentElement.style.fontSize = window.innerWidth / 100 + 'px'
    })
    document.documentElement.style.fontSize = window.innerWidth / 100 + 'px'
}()
