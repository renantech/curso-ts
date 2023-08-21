const objetoA: {
    chaveA: string,
    chaveB?: string,
    [key: string]: unknown,
} = {
    chaveA: 'Renan',
    chaveB: 'Mendes',
}

objetoA.chaveC = 'Vieira;'

console.log(objetoA.chaveA, objetoA.chaveB, objetoA.chaveC);
