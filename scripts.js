alert("Deu certo? ")

let nome = document.querySelector(".nome")
let personagem = document.querySelector(".personagem")

console.log(nome)
console.log(personagem)

function EscolherPersonagem(nomePersonagem, imgPersonagem, corPersonagem) {
  nome.innerHTML = nomePersonagem
  personagem.src = imgPersonagem
  nome.style.color = corPersonagem
}


function lerFoto(foto) {

  let leitor = new FileReader()
  leitor.readAsDataURL(foto.files[0])
  leitor.onload = async function () {

    let desenho = await puter.ai.txt2img("Transforme a pessoa desta foto em um personagem de videogame GTA VI: contorno preto grosso, cores vivas, meio corpo, mantendo o rosto parecido. Fundo totalmente transparente: sem cenário, sem chão e sem sombra.",
      {
        model: "replicate:openai/gpt-image-2.5-flare",
        provider: "openai",
        input_image: leitor.result,
        quality: "medium",
        providerOptions: { background: "transparent" }
      })

    EscolherPersonagem('Você', desenho, '#FF0900')

  }


}