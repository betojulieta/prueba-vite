import _ from 'underscore';


/**
 * funcion crea un nuevo deck
 * @param {array<string>} tiposDeCarta, por ejemplo: ['C','D','H','S']
 * @param {array<string>} tiposEspeciales, por ejemplo: ['A','J','Q','K']
 * @returns {array}regresa un nuevo deck de cartas 
 */
       
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {//tipos,especiales,deck
  
    if(!tiposDeCarta || tiposDeCarta.leng>0) throw new Error("tipo de carta obligatorio");
     //if() throw new Error("deck esta vacio");
     if(!tiposEspeciales || tiposEspeciales.leng>0) throw new Error("tipo de carta obligatorio");
     //if() throw new Error("deck esta vacio");
   let deck         = []; 
  for( let i = 2; i <= 10; i++ ) {
      for( let tipo of tiposDeCarta ) {//tipos
          deck.push( i + tipo);
      }
  }

  for( let tipo of tiposDeCarta ) {//tipos
      for( let esp of  tiposEspeciales) {//especiales
          deck.push( esp + tipo);
      }
  }
 //console.log( deck );
  deck = _.shuffle( deck );
  //console.log( deck );
  return deck;
}
