function init() {
    getCodeFromHash();

    const redirButton = document.querySelector("button#redir");

    if (!redirButton) return;

    redirButton.addEventListener("click", () => {
        window.open(CURRENT.spec_href, "_blank");
    })
}

let CURRENT = errors["404"];