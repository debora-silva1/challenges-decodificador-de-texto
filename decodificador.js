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
    const divShow = document.getElementById("text_vazio");
    const divHide = document.getElementById("text_result");
    const botaoClicadoCriptografar = document.getElementById("botao-copiar");
    const pDecoder = document.getElementById("decoder");

    if (textoCriptografar.value === "") {
        divShow.classList.add("show__div");
        divHide.classList.add("hide__div");
        divShow.classList.remove("hide__div");
        divHide.classList.remove("show__div");
    } else {
        divShow.classList.add("hide__div");
        divHide.classList.add("show__div");
        divShow.classList.remove("show__div");
        divHide.classList.remove("hide__div");

        botaoClicadoCriptografar.style.display = "block";

        const ret = criptografar(textoCriptografar.value);
        console.log(textoCriptografar.value)
        pDecoder.innerText = ret;
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
