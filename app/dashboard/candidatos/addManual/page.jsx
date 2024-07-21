"use client";
import React from "react";
import styles from "@/app/ui/dashboard/candidatos/addCandidato.module.css";

const AddCandidatoManual = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h2>Información Personal</h2>
        <div className={styles.field}>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
        </div>
        <div className={styles.field}>
          <label htmlFor="apellidos">Apellidos</label>
          <input type="text" id="apellidos" name="apellidos" placeholder="Apellidos" />
        </div>
        <div className={styles.field}>
          <label htmlFor="genero">Género</label>
          <input type="text" id="genero" name="genero" placeholder="Género" />
        </div>
        <div className={styles.field}>
          <label htmlFor="lugarNacimiento">Lugar de nacimiento</label>
          <input type="text" id="lugarNacimiento" name="lugarNacimiento" placeholder="Lugar de nacimiento" />
        </div>
        <div className={styles.field}>
          <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
          <input type="date" id="fechaNacimiento" name="fechaNacimiento" />
        </div>
        <div className={styles.field}>
          <label htmlFor="dniNie">DNI/NIE</label>
          <input type="text" id="dniNie" name="dniNie" placeholder="DNI/NIE" />
        </div>
        <div className={styles.field}>
          <label htmlFor="movil">Móvil</label>
          <input type="text" id="movil" name="movil" placeholder="Móvil" />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className={styles.field}>
          <label htmlFor="direccionPostal">Dirección postal</label>
          <input type="text" id="direccionPostal" name="direccionPostal" placeholder="Dirección postal" />
        </div>
        <div className={styles.field}>
          <label htmlFor="codigoPostal">Código postal</label>
          <input type="text" id="codigoPostal" name="codigoPostal" placeholder="Código postal" />
        </div>
        <div className={styles.field}>
          <label htmlFor="poblacion">Población</label>
          <input type="text" id="poblacion" name="poblacion" placeholder="Población" />
        </div>
        <div className={styles.field}>
          <label htmlFor="estadoCivil">Estado civil</label>
          <input type="text" id="estadoCivil" name="estadoCivil" placeholder="Estado civil" />
        </div>
        <div className={styles.field}>
          <label htmlFor="numeroHijos">Nº hijos</label>
          <input type="number" id="numeroHijos" name="numeroHijos" placeholder="Nº hijos" />
        </div>
        <div className={styles.field}>
          <label htmlFor="porcentajeDiscapacidad">% Discapacidad</label>
          <input type="number" id="porcentajeDiscapacidad" name="porcentajeDiscapacidad" placeholder="% Discapacidad" min="0" max="10" />
        </div>
        <div className={styles.field}>
          <label htmlFor="certificadoDiscapacidadCompleto">Certificado Discapacidad Completo</label>
          <select id="certificadoDiscapacidadCompleto" name="certificadoDiscapacidadCompleto">
            <option value="" disabled selected>
              Certificado Discapacidad Completo (Si/No)
            </option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="incapacidad">Incapacidad</label>
          <select id="incapacidad" name="incapacidad">
            <option value="" disabled selected>
              Incapacidad (Si/No)
            </option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="inscripcionDiscapacidadTesoreria">Inscripción Discapacidad en Tesorería</label>
          <select id="inscripcionDiscapacidadTesoreria" name="inscripcionDiscapacidadTesoreria">
            <option value="" disabled selected>
              Inscripción Discapacidad en Tesorería (Si/No)
            </option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="adaptacionPuesto">Adaptación al Puesto</label>
          <select id="adaptacionPuesto" name="adaptacionPuesto">
            <option value="" disabled selected>
              Adaptación al Puesto (Si/No)
            </option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="adaptacionPuestoDetalle">Detalles de Adaptación al Puesto</label>
          <textarea id="adaptacionPuestoDetalle" name="adaptacionPuestoDetalle" placeholder="En caso que sí en adaptación al puesto, indique cuál"></textarea>
        </div>

        <h2>Educación</h2>
        <div className={styles.field}>
          <label htmlFor="ultimosEstudiosConcluidos">Últimos estudios reglados concluidos</label>
          <select id="ultimosEstudiosConcluidos" name="ultimosEstudiosConcluidos">
            <option value="" disabled selected>Últimos estudios reglados concluidos</option>
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
          <textarea id="otrasFormaciones" name="otrasFormaciones" placeholder="Otras formaciones regladas"></textarea>
        </div>

        <h2>Habilidades y Otros</h2>
        <div className={styles.field}>
          <label htmlFor="carnetConducir">Carnet de Conducir</label>
          <select id="carnetConducir" name="carnetConducir">
            <option value="" disabled selected>
              Carnet de Conducir
            </option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="idiomasCertificados">Idiomas certificados</label>
          <textarea id="idiomasCertificados" name="idiomasCertificados" placeholder="Indique idioma y nivel A1/A2/B1/B2…"></textarea>
        </div>
        <div className={styles.field}>
          <label htmlFor="otrosIdiomas">Otros idiomas</label>
          <textarea id="otrosIdiomas" name="otrosIdiomas" placeholder="Otros idiomas"></textarea>
        </div>
        <div className={styles.field}>
          <label htmlFor="iban">IBAN</label>
          <input type="text" id="iban" name="iban" placeholder="IBAN" />
        </div>
        <div className={styles.field}>
          <label htmlFor="cvActualizado">CV Actualizado</label>
          <select id="cvActualizado" name="cvActualizado">
            <option value="" disabled selected>
              CV Actualizado
            </option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="entrevistas">Entrevistas</label>
          <textarea id="entrevistas" name="entrevistas" placeholder="Entrevistas"></textarea>
        </div>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default AddCandidatoManual;
