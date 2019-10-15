!function () {
    // fix ssr
    if (!window || !window.addEventListener) {
        return
    }
    window.__1px__ = 0
    document.body.style.fontSize = '12px'

    function setFontSize() {
        let realWidth = window.innerWidth
        // todo 需要考虑有最小宽度的情况，暂定980px
        if (realWidth <= 980) {
            realWidth = 980
        }
        const baseNum = realWidth / 100

        window.__1px__ = 1 / 19.2 * baseNum
        document.documentElement.style.fontSize = baseNum + 'px'
    }

    window.addEventListener('resize', setFontSize)
    setFontSize()
}()
