function calcMedia(){
    let nomeAluno = window.prompt('Digite o seu nome')
    let nota1 = Number(window.prompt('Insira a nota 1:'))
    let nota2 = Number(window.prompt('Insira a nota 2:'))
    let nota3 = Number(window.prompt('Insira a nota 3:'))
    let media = (nota1 + nota2 + nota3)/3
    document.getElementById('showMedia').innerHTML = media
    if (media < 7)
        document.getElementById('showAprov').innerHTML = `O aluno ${nomeAluno} foi reprovado`
    else
        document.getElementById('showAprov').innerHTML = `O aluno ${nomeAluno} foi aprovado`
}
