class Usuario {
    constructor (nombre, apellido, libro, autor, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libro = [{libro, autor}]
        this.mascotas = [mascotas]
    }

    getFullName(){
        return `Tu nombre completo es ${this.nombre} ${this.apellido}`;

    }

    addMascota (mascotas){
        return this.mascotas.push(mascotas);
    }

    countMascotas (){
        return this.mascotas.length;
    }

    addLibro (libro, autor){
        this.libro.push({ libro, autor});
    }

    getBookNames(){
        return this.libro.map ((books) => {
            return books.libro;
        });

    }

}

const angel = new Usuario ("Angel", "Lammenda", "El Nombre del Viento", "Patrick Rothfuss", "Perro");
const angelFullName = angel.getFullName ();
const addBook = angel.addLibro ("El Temor De Un Hombre Sabio", "Patrick Rothfuss");
const addBook2 = angel.addLibro ("Las Puertas de Piedra", "Patrick Rothfuss");
const angelMascota = angel.addMascota ("Dragon");
const countMascotas = angel.countMascotas ();
const angelLibros = angel.getBookNames ();

console.log (angelLibros);