import _ from "underscore";

export const miNombre = 'Fernando';

// Esta función crea un nuevo deck

/**
 * 
 * @param {Array<string>} tiposDeCarta  ejmplo ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales  emplo ['A','J','Q','K'];
 * @returns {array} retorn un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    let deck = [];

    if (!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error('Tipos de cartas tiene que ser requerido');

    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('Tipos especiales tiene que ser requerido');

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    console.log(deck);


    return deck;
}