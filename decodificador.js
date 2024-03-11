function criptografar(textoCriptografar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    let textoCriptLower = textoCriptografar.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        textoCriptLower = textoCriptLower.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }

    return textoCriptLower;
}

function descriptografar(textoDescriptografar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    let textoDescriptLower = textoDescriptografar.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        textoDescriptLower = textoDescriptLower.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }

    return textoDescriptLower;
}


function onClickEncriptBtn() {
    const textoCriptografar = document.getElementById("decodificador__input")


    if (textoCriptografar.value !== '') {
        const divHide = document.getElementsByClassName("show__div")[0];
        console.log(divHide)
        const botaoClicadoCriptografar = document.getElementById("botao-copiar")

        divHide.style.display = "none";
        botaoClicadoCriptografar.style.display = "block";

        const ret = criptografar(textoCriptografar.value);
        textArea.value = ret;
    }
}

function onClickDescriptBtn() {
    const textoCriptografar = document.getElementById("decodificador__input")

    if (textoCriptografar.value !== '') {
        const divHide = document.getElementsByClassName("hide_div")[0];

        divHide.style.display = "none";

        const ret = descriptografar(textoCriptografar.value);
        textArea.value = ret;
    }

}
function onClickCopiarBtn() {
    const botaoClicadoCriptografar = document.querySelector("botao-criptografar")
    console.log(botaoClicadoCriptografar)

}

