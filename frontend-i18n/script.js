async function getI18N() {
    const lang = navigator.language.substring(0, 2)
    
    const res = await fetch(`assets/${lang}.json`)

    return await res.json()
}

getI18N().then(data => {
    Array.from(document.querySelectorAll('*[data-i18n]')).forEach(el => {
        el.innerText = data[el.dataset.i18n]
    })
})
