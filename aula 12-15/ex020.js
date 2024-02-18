let a = [5,1,9,3,0]
a[5]=9
a.push(8)
console.log(`Original -- ${a}`)
console.log(`O vetor tem ${a.length} elementos;`)
console.log(`Organizado  -- ${a.sort()}`)

let b = []

for (var c = 1;c <= 20;c++) {
    b.push(c)
}

console.log(`Original -- ${b}`)
console.log(`O vetor tem ${b.length} elementos;`)
console.log(`Organizado  -- ${b.sort()}`)

for (let pos in a) {
    console.log(a[pos])
}