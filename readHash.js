function readHash() {
    const who = location.hash
    const cls = who.slice(1).match(/\d\d[a-z]/)
    if(cls) {
        document.querySelector(".who").innerHTML = `, liebe ${cls}`
    }
}

readHash()

window.addEventListener("hashchange", readHash)
