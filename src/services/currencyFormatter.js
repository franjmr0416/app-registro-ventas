const currencyFormatter = (numero) => {
  const currency = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  })
  return currency.format(numero)
}
export default currencyFormatter
