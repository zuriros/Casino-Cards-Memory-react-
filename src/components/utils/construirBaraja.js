import arrayDeImagenes from './arrayDeImagenes'

const numeroDeCartas = 6;

export default () => {
  const imagenesNaipes = arrayDeImagenes();
  let cartas = [];
  while( cartas.length < numeroDeCartas){
// se crea una constante donde se indica un índice aleatorio para el array
    const index = Math.floor(Math.random()*imagenesNaipes.length);
    const carta = {
      imgns: imagenesNaipes.splice(index, 1)[0],
      fueAdivinada: false
    }
    cartas.push(carta);
    cartas.push({...carta});
  }
  return shuffle(cartas);
}

const shuffle = (array) => {
  let i, j, remplazo;
  for(i = array.length - 1; i > 0; i--){
    j = Math.floor(Math.random() * (i + 1));
    remplazo = array[i];
    array[i] = array[j];
    array[j] = remplazo;
  };
  return array;
}
