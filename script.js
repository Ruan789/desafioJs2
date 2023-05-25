function calcMedia(){
    let nomeAluno = window.prompt('Digite o seu nome')
    let nota1Window = Number(window.prompt('Insira a nota 1:'))
    let nota2Window = Number(window.prompt('Insira a nota 2:'))
    let nota3Window = Number(window.prompt('Insira a nota 3:'))
    let mediaWindow = (nota1Window + nota2Window + nota3Window)/3
    document.getElementById('showMedia').innerHTML = mediaWindow
    if (mediaWindow < 6)
        document.getElementById('showAprov').innerHTML = `O aluno ${nomeAluno} foi reprovado`
    else
        document.getElementById('showAprov').innerHTML = `O aluno ${nomeAluno} foi aprovado`
}
function calcInputMedia(){
    let nomeAluno = document.getElementById('nomeInput').value
    let nota1Input = Number(document.getElementById("valor1").value)
    let nota2Input = Number(document.getElementById('valor2').value)
    let nota3Input = Number(document.getElementById('valor3').value)
    if (nota1Input > 10)
        nota1Input = 10
    else{}
    if (nota2Input > 10)
        nota2Input = 10
    else{}
    if (nota3Input > 10)
        nota3Input = 10
    else{}
    let mediaInput = (nota1Input + nota2Input + nota3Input)/3
    if (mediaInput < 6)
        document.getElementById('showAprov').innerHTML = `O aluno ${nomeAluno} foi reprovado, média = ${mediaInput}`
    else
        document.getElementById('showAprov').innerHTML = `O aluno ${nomeAluno} foi aprovado, média = ${mediaInput}`
}