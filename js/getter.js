function getCodeFromHash() {

    if (!location.hash) return setCode("404");

    const code = window.location.hash.substring(1).split("#")[0];

    console.warn(code)

    if (!errors[code]) return setCode("404");

    setCode(code);
}

function setCode(code) {
    const data = errors[code];
    const title = document.querySelector("h1#title");
    const descr = document.querySelector("p#message");
    const specf = document.querySelector("p#spec");

    if (!data) throw new Error(`Can't set an error code which is invalid: ${code}`);

    if (!title || !descr || !specf) throw new Error("HTML Renderer done goofed, try reloading.");

    const errStr = `${code} - ${data.message}`;

    document.title = errStr

    descr.innerText = data.description || "(No description)";
    title.innerText = errStr;
    specf.innerText = data.spec_title || "RFC0000#0.0.0";

    CURRENT = data;
}

init();