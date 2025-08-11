const fetchData = require('./fetch')

test('Deve retornar "Dados recebidos" apos 2 sec', async() => {
    const data = await fetchData()
    expect(data).toBe('Dados Recebidos')

} )