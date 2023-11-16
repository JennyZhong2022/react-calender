import './SelectionButtons.css'

const SelectionButtons = ({color, setColor}) => {

  const handleSelection = (color) => {
    setColor(color)
  } 
 console.log(color);

  return (
    <div className="selectionButtons">
      <button style={{backgroundColor:'yellow'}} onClick={()=>handleSelection('yellow')}>Holiday</button>
      <button style={{backgroundColor:'blue'}} onClick={()=>handleSelection('blue')}>Work</button>
      <button style={{backgroundColor:'green'}} onClick={()=>handleSelection('green')}>Errands</button>
      <button style={{backgroundColor:'red'}} onClick={()=>handleSelection('red')}>Sick</button>
    </div>

  )

}

export default SelectionButtons