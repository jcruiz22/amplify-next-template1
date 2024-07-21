"use client";
import React from "react";
import Search from "@/app/ui/dashboard/search/search";
import styles from "../../ui/dashboard/candidatos/candidatos.module.css";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "../../ui/dashboard/pagination/pagination";
import Candidato from "@/app/models/candidato";

const CandidatosPage = ({ placeholder }) => {
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



  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Buscar Candidatos..." />
        <div className={styles.buttonGroup}>
          <Link href="/dashboard/candidatos/addManual">
            <button className={styles.addButton}>Agregar Nueva</button>
          </Link>
          <Link href="/dashboard/candidatos/addIA">
            <button className={styles.addButton}>Agregar IA</button>
          </Link>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Email</td>
            <td>Telefono</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {candidatos.map((candidato) => (
            <tr key={candidato.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {candidato.nombre} {candidato.apellidos}
                </div>
              </td>
              <td>{candidato.apellidos}</td>
              <td>{candidato.email}</td>
              <td>{candidato.movil}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/candidatos/${candidato.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      Ver
                    </button>
                  </Link>
                  <button
                    className={`${styles.button} ${styles.delete}`}
                    onClick={() => handleDelete(candidato.id)}
                  >
                    Borrar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};


const handleDelete = (id) => {
  console.log(`Eliminar candidato con id: ${id}`);
};

export default CandidatosPage;
