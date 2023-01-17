console.log(salarios);

// Análisis personal
function encontrarPersona(personaEnBusqueda) {
  return salarios.find(persona => persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona) {

  const salarios = encontrarPersona(nombrePersona)
    .trabajos
    .map(trabajo => trabajo.salario);

  const medianaSalarios = PlatziMath.calcMedian(salarios);

  console.log(medianaSalarios);
  return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;
  const salarios = trabajos.map(trabajo => trabajo.salario);
  let porcentajesCrecimiento = [];

  for (let i = 1; i < trabajos.length; i++) {
    const salarioAnterior = salarios[i - 1];
    const salarioActual = salarios[i];
    const porcentajeCrecimiento = (salarioActual - salarioAnterior) / salarioAnterior;
    porcentajesCrecimiento.push(porcentajeCrecimiento);
  }

  const medianaPorcentajesCrecimiento = PlatziMath.calcMedian(porcentajesCrecimiento);

  const ultimoSalario = salarios[salarios.length - 1];
  const nuevoSalario = ultimoSalario(1 + medianaPorcentajesCrecimiento);

  return nuevoSalario;
}

function analisisEmpresarial(personas) {
  const empresas = {};
  for (persona of personas) {
    for (trabajo of persona.trabajos) {
      const nombre = trabajo.empresa;
      const anio = trabajo.year;
      if (!empresas[nombre]) {
        empresas[nombre] = {};
      }
      if (!empresas[nombre][anio]) {
        empresas[nombre][anio] = [];
      }
      empresas[nombre][anio].push(trabajo.salario);
    }
  }
  return empresas;
}

