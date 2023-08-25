const Filter = ({active, setActiveFactor, factor, key }) => {
  const handleActive = () => {
    setActiveFactor(factor)
  }
  return ( 
    <button onClick={handleActive} className={`filter ${active ? 'active' : ''}`} key={key}>
      {factor}
    </button>
  );
}
 
export default Filter;