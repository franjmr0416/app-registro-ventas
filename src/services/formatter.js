const currencyFormatter = (numero) => {
  const currency = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  })
  return currency.format(numero)
  //Salida -> $25,000.00
}

const dateFormatter = (fecha) => {
  const date = new Intl.DateTimeFormat('es-MX', {
    dateStyle: 'long',
  })
  return date.format(new Date(fecha))
  //Salida -> 28 de octubre de 2022
}

export { currencyFormatter, dateFormatter }
