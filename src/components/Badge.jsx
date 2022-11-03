const Badge = (props) => {
  return (
    <span
      className={`${
        props.status == 'Sin pagar'
          ? 'bg-red-100 text-red-800'
          : 'bg-indigo-100 text-indigo-800'
      } text-sm font-semibold px-2.5 py-0.5 rounded`}
    >
      {props.status}
    </span>
  )
}
export default Badge
