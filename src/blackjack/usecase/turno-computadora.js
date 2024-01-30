
 /*import {pedirCarta} from './pedir-carta.js';
   import {valorCarta } from './valor-carta.js';*/
/*
   import {pedirCarta} from './';
   import {valorCarta } from './';
*/
   import {pedirCarta,valorCarta,crearCartaHtml} from './';
   
   
// 
/**
 * turno de la computadora
 * @param {Number} puntosMinimos que la computadora necesita para ganar
 * @param {Array <string>} deck 
 * @param {*} puntosComputadora 
 * @param {HTMLElement} puntosHTML para mostrar los ppuentos
 * @param {HTMLElement} divCartasComputadora elementos para mostrar las cartas
 */
export const turnoComputadora = ( puntosMinimos, deck, puntosHTML,divCartasComputadora ) => {//, puntosComputadora
  let puntosComputadora=0;
 if(!puntosMinimos) throw new Error("puntos minimos son necesario");
 if(!deck) throw new Error("deck es necesario");
  if(!puntosHTML) throw new Error("puntosHTML es necesario");
 
  do {
    console.log(deck);
      const carta = pedirCarta(deck);//original vacio

      puntosComputadora = puntosComputadora + valorCarta( carta );
      puntosHTML.innerText = puntosComputadora;// puntosHTML[1]
      
      /*
      // <img class="carta" src="assets/cartas/2C.png">
      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
      imgCarta.classList.add('carta');
      */
      const imgCarta=crearCartaHtml(carta);
      //TODO:crear carta
      divCartasComputadora.append( imgCarta );



      if( puntosMinimos > 21 ) {
          break;
      }

  } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

  setTimeout(() => {
      if( puntosComputadora === puntosMinimos ) {
          alert('Nadie gana :(');
      } else if ( puntosMinimos > 21 ) {
          alert('Computadora gana')
      } else if( puntosComputadora > 21 ) {
          alert('Jugador Gana');
      } else {
          alert('Computadora Gana')
      }
  }, 100 );
}
