const currencyFormatter = (numero) => {
  if (isNaN(numero)) {
    return 'Invalid number'
  }
  const currency = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  })
  return currency.format(numero)
  //Salida -> $25,000.00
}

const dateFormatter = (fecha) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/

  if (fecha == undefined || fecha.match(regex) === null) {
    return 'Invalid date'
  }
  const date = new Intl.DateTimeFormat('es-MX', {
    dateStyle: 'long',
  })
  return date.format(new Date(fecha))
  //Salida -> 28 de octubre de 2022
}

export { currencyFormatter, dateFormatter }
