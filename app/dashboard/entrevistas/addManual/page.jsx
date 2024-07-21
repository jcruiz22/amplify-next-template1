import styles from '/Users/jeancarloruiz/material-kit-react/app/ui/dashboard/entrevistas/addEntrevista/addEntrevista.module.css';
import React from 'react';

const AddEntrevistaManual = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder='Candidato' name='candidato' />
                
                <input type="text" placeholder='Puntualidad' name='puntualidad' />
                
                <input type="text" placeholder='Antigüedad en la Fundación' name='antiguedadFundacion' />
                
                <input type="text" placeholder='Presentación' name='presentacion' />
                
                <input type="text" placeholder='Ha Participado en Otros Procesos Internos' name='otrosProcesos' />
                
                <textarea placeholder='Comunicación: Vocabulario/Argumentación/Expresión' name='comunicacion' />
                
                <select name="trabajoIndividualEquipo" id="trabajoIndividualEquipo" >
                    <option value="" disabled selected>¿Cómo prefieres trabajar?</option>
                    <option value="individual">De manera individual</option>
                    <option value="equipo">En equipo</option>
                </select>
                
                <textarea placeholder='¿Conoces el puesto de Coordinador?' name='conocimientoPuestoCoordinador' />
                
                <input type="text" placeholder='Puesto Actual' name='puestoActual' />
                
                <input type="text" placeholder='Antigüedad Puesto Actual' name='antiguedadPuestoActual' />
                
                <textarea placeholder='Áreas de Preferencia' name='areasPreferencia' />

                
                
                <textarea placeholder='Formación/Experiencia' name='formacionExperiencia' />
                
                <textarea placeholder='Competencias' name='competencias' />

                <div className={styles.competenciaFields}>
                    <textarea placeholder='Pregunta' name='pregunta' />
                    <textarea placeholder='Respuesta' name='respuesta' />
                    <textarea placeholder='Notas' name='notas' />
                    <select name="puntuacion" id="puntuacion" >
                        <option value="" disabled selected>Puntuación</option>
                        <option value="1">1/5</option>
                        <option value="2">2/5</option>
                        <option value="3">3/5</option>
                        <option value="4">4/5</option>
                        <option value="5">5/5</option>
                    </select>
                </div>
                
                <textarea placeholder='Defensa' name='defensa' />
                
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
}

export default AddEntrevistaManual;