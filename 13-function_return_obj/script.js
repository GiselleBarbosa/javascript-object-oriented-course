function criarCarro(marca, modelo, arCondicionado, portas) {
  return {
    marca: marca,
    modelo: modelo,
    arCondicionado: arCondicionado,
    portas: portas,
    ligarCarro() {
      return `${ this.modelo } foi ligado com sucesso!!`;
    },
    checaArCondicionado: function () {
      if (this.arCondicionado == true) {
        return  `Possui ar condicionado`;
      } else 
          return `NÃO possui ar condicionado`;
      }
    }
  };  

  let kwid = criarCarro('Renault', 'Kwid', true, 4);
  console.log(kwid.marca);
  console.log(kwid.modelo);
  console.log(kwid.portas);
  console.log(kwid.ligarCarro());
  console.log(kwid.checaArCondicionado());

  let polo = criarCarro('Volkswagem', 'Polo', false, 4);
  console.log(polo.marca);
  console.log(polo.modelo);
  console.log(polo.portas);
  console.log(polo.ligarCarro());
  console.log(polo.checaArCondicionado())