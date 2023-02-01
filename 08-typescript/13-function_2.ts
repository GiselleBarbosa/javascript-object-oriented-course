function descreverCarro(marca: string, aro?: number) {
  if (aro) {
    return `O carro é da marca ${marca} e tem o aro ${aro}`;
  } else {
    return `O carro é da marca ${marca}`;
  }
}

console.log(descreverCarro('Fiesta', 20));
console.log(descreverCarro('Fiesta'));