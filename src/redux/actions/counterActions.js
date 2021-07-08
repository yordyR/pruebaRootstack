
//nombre de accioens
export const INCREMENT = 'INCREEMENT';
export const DECREMENT = 'DRECREMENT';


// CREADORES DE ACCIONES
export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}
