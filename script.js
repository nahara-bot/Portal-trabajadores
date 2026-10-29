
const formato = new Intl.NumberFormat("es-PE", {
  maximumFractionDigits: 2
});

const indicadores = [
  {
    valor: formato.format(datosEmpleados.totalEmpleados),
    etiqueta: "Empleados analizados"
  },
  {
    valor: "S/ " + formato.format(datosEmpleados.salarioPromedio),
    etiqueta: "Salario promedio"
  },
  {
    valor: formato.format(datosEmpleados.horasSemanalesPromedio),
    etiqueta: "Horas semanales promedio"
  },
  {
    valor: formato.format(datosEmpleados.proyectosPromedio),
    etiqueta: "Proyectos promedio por empleado"
  }
];

const contenedor = document.getElementById("stats");

indicadores.forEach(item => {
  const tarjeta = document.createElement("article");
  tarjeta.className = "stat";

  const valor = document.createElement("span");
  valor.className = "value";
  valor.textContent = item.valor;

  const etiqueta = document.createElement("span");
  etiqueta.className = "label";
  etiqueta.textContent = item.etiqueta;

  tarjeta.append(valor, etiqueta);
  contenedor.appendChild(tarjeta);
});