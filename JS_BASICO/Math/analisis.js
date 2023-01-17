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

  return medianaSalarios;
}

function calcularProyeccion(arr) {
  let porcentajesCrecimiento = [];
  if (arr.length <= 1) return 0;

  for (let i = 1; i < arr.length; i++) {
    const salarioAnterior = arr[i - 1];
    const salarioActual = arr[i];
    const porcentajeCrecimiento = (salarioActual - salarioAnterior) / salarioAnterior;
    porcentajesCrecimiento.push(porcentajeCrecimiento);
  }

  const medianaPorcentajesCrecimiento = PlatziMath.calcMedian(porcentajesCrecimiento);

  const ultimoValor = arr[arr.length - 1];
  const nuevoSalario = ultimoValor * (1 + medianaPorcentajesCrecimiento);

  return nuevoSalario;
}

function proyeccionPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;
  const salarios = trabajos.map(trabajo => trabajo.salario);
  return calcularProyeccion(salarios);
}

function analisisEmpresarial(personas) {
  const empresas = {};
  for (const persona of personas) {
    for (const trabajo of persona.trabajos) {

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

function proyeccionEmpresarial(empresas) {
  const proyecciones = {};
  for (const empresa in empresas) {
    const arrayEmpresa = Object.values(empresas[empresa]);

    const salariosPromedio = arrayEmpresa.map(salarios => PlatziMath.calcMedian(salarios));

    proyecciones[empresa] = calcularProyeccion(salariosPromedio);
  }

  return proyecciones;
}

function medianaGeneral(personas) {
  const medianasArr = personas.map(
    persona => PlatziMath.calcMedian(persona.trabajos.map(trabajo => trabajo.salario))
  );
  return PlatziMath.calcMedian(medianasArr);
}

function top10(personas) {
  const medianasArr = personas.map(
    persona => PlatziMath.calcMedian(persona.trabajos.map(trabajo => trabajo.salario))
  );
  medianasArr.sort((a, b) => b - a);
  return medianasArr.slice(0, 10);
}

/* 
console.log the following functions to see the results:
analisisEmpresarial(salarios);
medianaGeneral(salarios);
top10(salarios);*/
console.log(analisisEmpresarial(salarios));
console.log(proyeccionEmpresarial(analisisEmpresarial(salarios)));
console.log(medianaGeneral(salarios));
console.log(top10(salarios));
