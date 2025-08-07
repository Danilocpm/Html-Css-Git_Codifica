const formAdicionar = document.getElementById('form-adicionar')
const btnLimpar = document.getElementById('btn-limpar')
const inputItem = document.getElementById('input-item')
const listaItens = document.getElementById('lista-itens')
const filtroStatus = document.getElementById('filtroStatus')
const ordenar = document.getElementById('ordenar')
const contadorTotal = document.getElementById('contador-total')
const contadorPendente = document.getElementById('contador-pendentes')
const contadorComprados = document.getElementById('contador-comprados')



let itens = []

function salvarDados() {
    localStorage.setItem('listaCompras', JSON.stringify(itens))
}

function renderizarLista() {
    let exibicao = [...itens]
    const status = filtroStatus.value

    // Filtering the array and re-assigning the result
    if (status === "pending") {
        exibicao = exibicao.filter(i => !i.purchased)
    } else if (status === "purchased") {
        exibicao = exibicao.filter(i => i.purchased)
    }

    // Sorting the array
    if (ordenar.value === "alphabetical") {
        exibicao.sort((a, b) => a.text.localeCompare(b.text))
    } else if (ordenar.value === "status") {
        exibicao.sort((a, b) => a.purchased - b.purchased)
    }

    listaItens.innerHTML = ''

    exibicao.forEach((item, index) => {
        const li = document.createElement('li')
        li.textContent = item.text // Use the text property

        // Create the button to toggle status
        const btnToggle = document.createElement('button')
        btnToggle.textContent = item.purchased ? 'Marcar Pendente' : 'Marcar Comprado'
        btnToggle.addEventListener('click', () => {
            // Find the original item in the `itens` array to update it
            const itemOriginal = itens.find(i => i.text === item.text)
            if (itemOriginal) {
                itemOriginal.purchased = !itemOriginal.purchased
                salvarDados()
                renderizarLista()
            }
        })
        li.appendChild(btnToggle)

        // Create the button to remove the item
        const btnRemover = document.createElement('button')
        btnRemover.textContent = 'X'
        btnRemover.addEventListener('click', () => {
            // Because of the filtering and sorting, the index of `exibicao`
            // might not match the index of `itens`. It's safer to remove by value.
            const originalIndex = itens.findIndex(i => i.text === item.text)
            if (originalIndex !== -1) {
                removerItem(originalIndex)
            }
        })
        li.appendChild(btnRemover)
        listaItens.appendChild(li)
    })

    // Update counters
    contadorTotal.textContent = `Total: ${itens.length}`
    contadorPendente.textContent = `Pendentes ${itens.filter(i => !i.purchased).length}`
    contadorComprados.textContent = `Comprados ${itens.filter(i => i.purchased).length}`
}

formAdicionar.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const novoItem = inputItem.value.trim()

    if (novoItem === '') return;

    itens.push({text: novoItem, purchased: false})

    salvarDados()
    renderizarLista()

    inputItem.value = ''
})

function removerItem(indice) {
    itens.splice(indice, 1)
    salvarDados()
    renderizarLista()
}


