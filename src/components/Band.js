const Band = props => {
  console.log(props)
  return (
    <li key={props.band.id}>
      <span>{props.band.name}</span>
      <button onClick={() => props.deleteBand(props.band)}>DELETE</button>
    </li>
  )
}

export default Band