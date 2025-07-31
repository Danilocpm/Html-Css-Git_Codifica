const formAdicionar = document.getElementById('form-adicionar')
const btnLimpar = document.getElementById('btn-limpar')
const inputItem = document.getElementById('input-item')
const listaItens = document.getElementById('lista-itens')

let itens = []

function salvarDados() {
    localStorage.setItem('listaCompras', JSON.stringify(itens))
}

function renderizarLista() {
    listaItens.innerHTML = ''

    itens.forEach((item, index) => {
        const li = document.createElement('li')
        li.textContent = item

        const btnRemover = document.createElement('button')
        btnRemover.textContent = 'X'
        btnRemover.addEventListener('click', () => {
            removerItem(index)
        })

        li.appendChild(btnRemover)
        listaItens.appendChild(li)
    })
}

formAdicionar.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const novoItem = inputItem.value.trim()

    if (novoItem === '') return;

    itens.push(novoItem)

    salvarDados()
    renderizarLista()

    inputItem.value = ''
})

function removerItem(indice) {
    itens.splice(indice, 1)
    salvarDados()
    renderizarLista()
}
