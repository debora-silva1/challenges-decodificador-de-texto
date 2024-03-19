function criptografar(textoCriptografar) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    let textoCriptLower = textoCriptografar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        textoCriptLower = textoCriptLower.replaceAll(
            matrizCodigo[i][0],
            matrizCodigo[i][1]
        );
    }

    return textoCriptLower;
}

function descriptografar(textoDescriptografar) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    let textoDescriptLower = textoDescriptografar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        textoDescriptLower = textoDescriptLower.replaceAll(
            matrizCodigo[i][1],
            matrizCodigo[i][0]
        );
    }

    return textoDescriptLower;
}

function onClickEncriptBtn() {
    const textoCriptografar = document.getElementById("decodificador__input");

    if (textoCriptografar.value !== "") {
        const divShow = document.getElementsByClassName("show__div")[0];
        const divHide = document.getElementsByClassName("hide__div")[0];
        const botaoClicadoCriptografar = document.getElementById("botao-copiar");
        const pDecoder = document.getElementById("decoder");

        divShow.classList.remove("show__div");
        divShow.classList.add("hide__div");

        divHide.classList.remove("hide__div");
        divHide.classList.add("show__div");

        botaoClicadoCriptografar.style.display = "block";

        const ret = criptografar(textoCriptografar.value);
        const node = document.createTextNode(ret);
        pDecoder.appendChild(node);
    }
}

function onClickDescriptBtn() {
    const textoCriptografar = document.getElementById("decodificador__input");

    if (textoCriptografar.value !== "") {
        const divShow = document.getElementsByClassName("show__div")[0];
        const divHide = document.getElementsByClassName("hide__div")[0];
        const botaoClicadoCriptografar = document.getElementById("botao-copiar");
        const pDecoder = document.getElementById("decoder");

        divShow.classList.remove("show__div");
        divShow.classList.add("hide__div");

        divHide.classList.remove("hide__div");
        divHide.classList.add("show__div");

        botaoClicadoCriptografar.style.display = "block";

        const ret = descriptografar(textoCriptografar.value);
        const node = document.createTextNode(ret);
        pDecoder.appendChild(node);
    }
}
function onClickCopiarBtn() {
    const botaoClicadoCriptografar = document.querySelector("botao-criptografar");
    console.log(botaoClicadoCriptografar);
}
