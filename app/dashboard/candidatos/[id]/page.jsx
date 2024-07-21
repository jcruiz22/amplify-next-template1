import Image from 'next/image';
import styles from '/Users/jeancarloruiz/material-kit-react/app/ui/dashboard/candidatos/singleUser/singleUser.module.css';
import React from "react";
import Candidato from '@/app/models/candidato';

async function getCandidato(id) {
    // Simulando la obtención de datos del candidato desde un modelo o base de datos
    const candidatos = [
        new Candidato({
          id: 1,
          nombre: "Jean Carlo",
          apellidos: "Ruiz",
          genero: "Masculino",
          lugarNacimiento: "Madrid",
          fechaNacimiento: "1990-01-01",
          dniNie: "12345678A",
          movil: "12345678",
          email: "jean@gmail.com",
          direccionPostal: "Calle Falsa 123",
          codigoPostal: "28001",
          poblacion: "Madrid",
          estadoCivil: "Soltero",
          numeroHijos: 0,
          porcentajeDiscapacidad: 0,
          certificadoDiscapacidadCompleto: "no",
          incapacidad: "no",
          inscripcionDiscapacidadTesoreria: "no",
          adaptacionPuesto: "no",
          adaptacionPuestoDetalle: "",
          ultimosEstudiosConcluidos: "Grado Universitario",
          otrasFormaciones: "",
          carnetConducir: "si",
          idiomasCertificados: "Inglés B2",
          otrosIdiomas: "",
          iban: "ES1234567890123456789012",
          cvActualizado: "si",
          entrevistas: ""
        }),
        new Candidato({
          id: 2,
          nombre: "Ana María",
          apellidos: "González",
          genero: "Femenino",
          lugarNacimiento: "Barcelona",
          fechaNacimiento: "1985-05-15",
          dniNie: "87654321B",
          movil: "87654321",
          email: "ana@gmail.com",
          direccionPostal: "Avenida Siempre Viva 742",
          codigoPostal: "08001",
          poblacion: "Barcelona",
          estadoCivil: "Casada",
          numeroHijos: 2,
          porcentajeDiscapacidad: 10,
          certificadoDiscapacidadCompleto: "si",
          incapacidad: "no",
          inscripcionDiscapacidadTesoreria: "si",
          adaptacionPuesto: "si",
          adaptacionPuestoDetalle: "Ergonomic chair",
          ultimosEstudiosConcluidos: "Master Universitario",
          otrasFormaciones: "Project Management",
          carnetConducir: "si",
          idiomasCertificados: "Francés C1",
          otrosIdiomas: "Alemán A2",
          iban: "ES2109876543210987654321",
          cvActualizado: "si",
          entrevistas: "1"
        }),
        new Candidato({
          id: 3,
          nombre: "Carlos Alberto",
          apellidos: "Martínez",
          genero: "Masculino",
          lugarNacimiento: "Valencia",
          fechaNacimiento: "1992-03-10",
          dniNie: "23456789C",
          movil: "23456789",
          email: "carlos@gmail.com",
          direccionPostal: "Plaza Mayor 1",
          codigoPostal: "46001",
          poblacion: "Valencia",
          estadoCivil: "Soltero",
          numeroHijos: 0,
          porcentajeDiscapacidad: 0,
          certificadoDiscapacidadCompleto: "no",
          incapacidad: "no",
          inscripcionDiscapacidadTesoreria: "no",
          adaptacionPuesto: "no",
          adaptacionPuestoDetalle: "",
          ultimosEstudiosConcluidos: "Bachillerato",
          otrasFormaciones: "Curso de Programación",
          carnetConducir: "no",
          idiomasCertificados: "Inglés B1",
          otrosIdiomas: "",
          iban: "ES3456789012345678901234",
          cvActualizado: "si",
          entrevistas: "2"
        }),
        new Candidato({
          id: 4,
          nombre: "Luisa Fernanda",
          apellidos: "Pérez",
          genero: "Femenino",
          lugarNacimiento: "Sevilla",
          fechaNacimiento: "1988-07-22",
          dniNie: "34567890D",
          movil: "34567890",
          email: "luisa@gmail.com",
          direccionPostal: "Calle de la Luna 5",
          codigoPostal: "41001",
          poblacion: "Sevilla",
          estadoCivil: "Divorciada",
          numeroHijos: 1,
          porcentajeDiscapacidad: 20,
          certificadoDiscapacidadCompleto: "si",
          incapacidad: "no",
          inscripcionDiscapacidadTesoreria: "si",
          adaptacionPuesto: "si",
          adaptacionPuestoDetalle: "Flexible working hours",
          ultimosEstudiosConcluidos: "Doctorado",
          otrasFormaciones: "Investigación Científica",
          carnetConducir: "si",
          idiomasCertificados: "Inglés C2",
          otrosIdiomas: "Italiano B2",
          iban: "ES4567890123456789012345",
          cvActualizado: "si",
          entrevistas: "3"
        })
      ];
    return candidatos.find(c => c.id === parseInt(id));
}

const ViewUserPage = async ({ params }) => {
    const candidato = await getCandidato(params.id);

    if (!candidato) {
        return <p>Candidato no encontrado</p>;
    }

    return (
        <div className={styles.container}>
          <form action="" className={styles.form}>
            <h2>Información Personal</h2>
            <div className={styles.field}>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" placeholder="Nombre" value={candidato.nombre} />
            </div>
            <div className={styles.field}>
              <label htmlFor="apellidos">Apellidos</label>
              <input type="text" id="apellidos" name="apellidos" placeholder="Apellidos" value={candidato.apellidos} />
            </div>
            <div className={styles.field}>
              <label htmlFor="genero">Género</label>
              <input type="text" id="genero" name="genero" placeholder="Género" value={candidato.genero} />
            </div>
            <div className={styles.field}>
              <label htmlFor="lugarNacimiento">Lugar de nacimiento</label>
              <input type="text" id="lugarNacimiento" name="lugarNacimiento" placeholder="Lugar de nacimiento" value={candidato.lugarNacimiento} />
            </div>
            <div className={styles.field}>
              <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
              <input type="date" id="fechaNacimiento" name="fechaNacimiento" value={candidato.fechaNacimiento} />
            </div>
            <div className={styles.field}>
              <label htmlFor="dniNie">DNI/NIE</label>
              <input type="text" id="dniNie" name="dniNie" placeholder="DNI/NIE" value={candidato.dniNie} />
            </div>
            <div className={styles.field}>
              <label htmlFor="movil">Móvil</label>
              <input type="text" id="movil" name="movil" placeholder="Móvil" value={candidato.movil} />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" value={candidato.email} />
            </div>
            <div className={styles.field}>
              <label htmlFor="direccionPostal">Dirección postal</label>
              <input type="text" id="direccionPostal" name="direccionPostal" placeholder="Dirección postal" value={candidato.direccionPostal} />
            </div>
            <div className={styles.field}>
              <label htmlFor="codigoPostal">Código postal</label>
              <input type="text" id="codigoPostal" name="codigoPostal" placeholder="Código postal" value={candidato.codigoPostal} />
            </div>
            <div className={styles.field}>
              <label htmlFor="poblacion">Población</label>
              <input type="text" id="poblacion" name="poblacion" placeholder="Población" value={candidato.poblacion} />
            </div>
            <div className={styles.field}>
              <label htmlFor="estadoCivil">Estado civil</label>
              <input type="text" id="estadoCivil" name="estadoCivil" placeholder="Estado civil" value={candidato.estadoCivil} />
            </div>
            <div className={styles.field}>
              <label htmlFor="numeroHijos">Nº hijos</label>
              <input type="number" id="numeroHijos" name="numeroHijos" placeholder="Nº hijos" value={candidato.numeroHijos} />
            </div>
            <div className={styles.field}>
              <label htmlFor="porcentajeDiscapacidad">% Discapacidad</label>
              <input type="number" id="porcentajeDiscapacidad" name="porcentajeDiscapacidad" placeholder="% Discapacidad" min="0" max="10" value={candidato.porcentajeDiscapacidad} />
            </div>
            <div className={styles.field}>
              <label htmlFor="certificadoDiscapacidadCompleto">Certificado Discapacidad Completo</label>
              <select id="certificadoDiscapacidadCompleto" name="certificadoDiscapacidadCompleto" value={candidato.certificadoDiscapacidadCompleto}>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="incapacidad">Incapacidad</label>
              <select id="incapacidad" name="incapacidad" value={candidato.incapacidad}>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="inscripcionDiscapacidadTesoreria">Inscripción Discapacidad en Tesorería</label>
              <select id="inscripcionDiscapacidadTesoreria" name="inscripcionDiscapacidadTesoreria" value={candidato.inscripcionDiscapacidadTesoreria}>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="adaptacionPuesto">Adaptación al Puesto</label>
              <select id="adaptacionPuesto" name="adaptacionPuesto" value={candidato.adaptacionPuesto}>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="adaptacionPuestoDetalle">Detalles de Adaptación al Puesto</label>
              <textarea id="adaptacionPuestoDetalle" name="adaptacionPuestoDetalle" placeholder="En caso que sí en adaptación al puesto, indique cuál" value={candidato.adaptacionPuestoDetalle}></textarea>
            </div>
    
            <h2>Educación</h2>
            <div className={styles.field}>
              <label htmlFor="ultimosEstudiosConcluidos">Últimos estudios reglados concluidos</label>
              <select id="ultimosEstudiosConcluidos" name="ultimosEstudiosConcluidos" value={candidato.ultimosEstudiosConcluidos}>
                <option value="sin-estudios">Sin estudios</option>
                <option value="educacion-primaria">Educación Primaria</option>
                <option value="educacion-secundaria">Educación Secundaria</option>
                <option value="bachillerato">Bachillerato</option>
                <option value="formacion-profesional">Formación Profesional</option>
                <option value="grado-universitario">Grado Universitario</option>
                <option value="postgrado">Postgrado</option>
                <option value="doctorado">Doctorado</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="otrasFormaciones">Otras formaciones regladas</label>
              <textarea id="otrasFormaciones" name="otrasFormaciones" placeholder="Otras formaciones regladas" value={candidato.otrasFormaciones}></textarea>
            </div>
    
            <h2>Habilidades y Otros</h2>
            <div className={styles.field}>
              <label htmlFor="carnetConducir">Carnet de Conducir</label>
              <select id="carnetConducir" name="carnetConducir" value={candidato.carnetConducir}>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="idiomasCertificados">Idiomas certificados</label>
              <textarea id="idiomasCertificados" name="idiomasCertificados" placeholder="Indique idioma y nivel A1/A2/B1/B2…" value={candidato.idiomasCertificados}></textarea>
            </div>
            <div className={styles.field}>
              <label htmlFor="otrosIdiomas">Otros idiomas</label>
              <textarea id="otrosIdiomas" name="otrosIdiomas" placeholder="Otros idiomas" value={candidato.otrosIdiomas}></textarea>
            </div>
            <div className={styles.field}>
              <label htmlFor="iban">IBAN</label>
              <input type="text" id="iban" name="iban" placeholder="IBAN" value={candidato.iban} />
            </div>
            <div className={styles.field}>
              <label htmlFor="cvActualizado">CV Actualizado</label>
              <select id="cvActualizado" name="cvActualizado" value={candidato.cvActualizado}>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="entrevistas">Entrevistas</label>
              <textarea id="entrevistas" name="entrevistas" placeholder="Entrevistas" value={candidato.entrevistas}></textarea>
            </div>
    
            <button type="submit">Update</button>
          </form>
        </div>
      );
    };
    

export default ViewUserPage;