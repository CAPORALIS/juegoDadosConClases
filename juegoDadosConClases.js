
//Código JavaScript
//Clase

class Jugador {
    #nombre
    #caraDado1
    #caraDado2

    constructor(nombre) {
        this.#nombre = nombre
        this.#caraDado1 = 0
        this.#caraDado2 = 0

    }
    
    setNombre(nombre) {
        this.#nombre = nombre
    }

    setcaraDado1(cara1) {
        this.#caraDado1 = cara1
    }
    setcaraDado2(cara2) {
        this.#caraDado2 = cara2
    }
    
    getNombre() {
        return this.#nombre
    }
    getcaraDado1() {
        return this.#caraDado1
    }
    getcaraDado2() {
        return this.#caraDado2
    }

}

//Clase
class TorneoDados {

    jugadas = new Array() 
    #juegosGanadosJugador1
    #juegosGanadosJugador2
    
    setJuegosGanadosJugador1(jg1) {
        this.#juegosGanadosJugador1 = jg1
    }
    setJuegosGanadosJugador2(jg2) {
        this.#juegosGanadosJugador2 = jg2
    }
    
    getJuegosGanadosJugador1() {
        return this.#juegosGanadosJugador1
    }
    getJuegosGanadosJugador2() {
        return this.#juegosGanadosJugador2
    }


    crear(j1, j2) {
        console.log("Comienza el torneo")

        this.#juegosGanadosJugador1 = 0
        this.#juegosGanadosJugador2 = 0
    }
    //Se esta jugando
    jugar() {
        let minimoVictorias = 3
        let i = 1;
        let victoria = false
       
        let mensajeGanador =""

        do {
            let partida = new JuegoDados(i, j1, j2)
            partida.tirarDados()
            let ganador = partida.determinaGanador()
        
            if(ganador === j1.getNombre()){

                this.#juegosGanadosJugador1++
                mensajeGanador = j1.getNombre()
            }
            if(ganador === j2.getNombre()){

                this.#juegosGanadosJugador2++
                mensajeGanador = j2.getNombre()
            }
            if(ganador === null){

                mensajeGanador="Empate"
            }
        
            partida.ganadorpartida = mensajeGanador

            this.jugadas.push(partida)

            if(this.#juegosGanadosJugador1 ===minimoVictorias || this.#juegosGanadosJugador2===minimoVictorias){
                victoria = true
            }

            i++
        } while (victoria === false)
    }

    resultado() {
        if(this.#juegosGanadosJugador1===3){
            return j1.getNombre()
        }else{
            return j2.getNombre()
        }
    }
}

//Clase
class JuegoDados {
    numeroJuego
    jugador1
    jugador2
    ganadorpartida = ""
    constructor(numerojuego, j1, j2) {
        this.numeroJuego = numerojuego
        this.jugador1 = j1
        this.jugador2 = j2
    }
    tirarDados() {

        this.jugador1.setcaraDado1(Math.round((Math.random() * 5) + 1))  
        this.jugador1.setcaraDado2(Math.round((Math.random() * 5) + 1)) 
        this.jugador2.setcaraDado1(Math.round((Math.random() * 5) + 1))  
        this.jugador2.setcaraDado2(Math.round((Math.random() * 5) + 1))  

    }
    determinaGanador() {

        if (((this.jugador1.getcaraDado1() + this.jugador1.getcaraDado2()) == 7)
            && ((this.jugador2.getcaraDado1() + this.jugador2.getcaraDado2()) != 7))
            return this.jugador1.getNombre()
        else if (((this.jugador2.getcaraDado1() + this.jugador2.getcaraDado2()) == 7)
            && ((this.jugador1.getcaraDado1() + this.jugador2.getcaraDado2()) != 7))
            return this.jugador2.getNombre()
        else return null;
    }
}
let j1 = new Jugador("Pedro Sánchez")
let j2 = new Jugador("Antonio Ramírez")

let torneo1 = new TorneoDados()
torneo1.crear(j1, j2)
torneo1.jugar()
let array = torneo1.jugadas

for(let i =0; i<array.length; i++ ){
    console.log("Ganador de la partida: " + (i+1) + " fue:" + array[i].ganadorpartida)
}

console.log("El ganador del torneo fue: " + torneo1.resultado())

/*
    Simular un torneo de dados.
    El torneo se juega hasta que un jugador gana 3 juegos.
    Un jugador gana un juego cuando la suma de los 2 dados es 7 y el otro no obtiene un 7.
    En caso de que en un juego ninguno de los jugadores obtenga 7, se declara empate
*/