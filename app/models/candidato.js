class Candidato {
  constructor({
    id,
    nombre,
    apellidos,
    genero,
    lugarNacimiento,
    fechaNacimiento,
    dniNie,
    movil,
    email,
    direccionPostal,
    codigoPostal,
    poblacion,
    estadoCivil,
    numeroHijos,
    porcentajeDiscapacidad,
    certificadoDiscapacidadCompleto,
    incapacidad,
    inscripcionDiscapacidadTesoreria,
    adaptacionPuesto,
    adaptacionPuestoDetalle,
    ultimosEstudiosConcluidos,
    otrasFormaciones,
    carnetConducir,
    idiomasCertificados,
    otrosIdiomas,
    iban,
    cvActualizado,
    entrevistas,
  }) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.genero = genero;
    this.lugarNacimiento = lugarNacimiento;
    this.fechaNacimiento = fechaNacimiento;
    this.dniNie = dniNie;
    this.movil = movil;
    this.email = email;
    this.direccionPostal = direccionPostal;
    this.codigoPostal = codigoPostal;
    this.poblacion = poblacion;
    this.estadoCivil = estadoCivil;
    this.numeroHijos = numeroHijos;
    this.porcentajeDiscapacidad = porcentajeDiscapacidad;
    this.certificadoDiscapacidadCompleto = certificadoDiscapacidadCompleto;
    this.incapacidad = incapacidad;
    this.inscripcionDiscapacidadTesoreria = inscripcionDiscapacidadTesoreria;
    this.adaptacionPuesto = adaptacionPuesto;
    this.adaptacionPuestoDetalle = adaptacionPuestoDetalle;
    this.ultimosEstudiosConcluidos = ultimosEstudiosConcluidos;
    this.otrasFormaciones = otrasFormaciones;
    this.carnetConducir = carnetConducir;
    this.idiomasCertificados = idiomasCertificados;
    this.otrosIdiomas = otrosIdiomas;
    this.iban = iban;
    this.cvActualizado = cvActualizado;
    this.entrevistas = entrevistas;
  }

  mostrarInfo() {
    return `
      id: ${this.id}
        Nombre: ${this.nombre}
        Apellidos: ${this.apellidos}
        Género: ${this.genero}
        Lugar de Nacimiento: ${this.lugarNacimiento}
        Fecha de Nacimiento: ${this.fechaNacimiento}
        DNI/NIE: ${this.dniNie}
        Móvil: ${this.movil}
        Email: ${this.email}
        Dirección Postal: ${this.direccionPostal}
        Código Postal: ${this.codigoPostal}
        Población: ${this.poblacion}
        Estado Civil: ${this.estadoCivil}
        Nº Hijos: ${this.numeroHijos}
        % Discapacidad: ${this.porcentajeDiscapacidad}
        Certificado Discapacidad Completo: ${this.certificadoDiscapacidadCompleto}
        Incapacidad: ${this.incapacidad}
        Inscripción Discapacidad en Tesorería: ${this.inscripcionDiscapacidadTesoreria}
        Adaptación al Puesto: ${this.adaptacionPuesto}
        Detalle de Adaptación al Puesto: ${this.adaptacionPuestoDetalle}
        Últimos Estudios Concluidos: ${this.ultimosEstudiosConcluidos}
        Otras Formaciones: ${this.otrasFormaciones}
        Carnet de Conducir: ${this.carnetConducir}
        Idiomas Certificados: ${this.idiomasCertificados}
        Otros Idiomas: ${this.otrosIdiomas}
        IBAN: ${this.iban}
        CV Actualizado: ${this.cvActualizado}
        Entrevistas: ${this.entrevistas}
      `;
  }
}

export default Candidato;
