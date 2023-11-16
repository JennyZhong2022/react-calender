import { useState } from 'react';
import './CalendarBlocks.css'

const CalendarBlocks = ({ dates, days, color }) => {
  
  // set block colors to be a array for each date null
  const [ blockColors,setBlockColors]=useState(Array(dates.length).fill(null))

  const handleCalendarBlocks = (index) => {

    // Check if the block already has a color assigned but it is not user friendly 
    // if (blockColors[index] !== null) {
    //   return
    // }
    
    // shallow copy whole color array as you can't mutate blockColors
    const updatedColors = [...blockColors]
    // one of array block color change to props color value 
    updatedColors[index] = color
    // give values to blockColors 
    setBlockColors(updatedColors)
   
  }

  return (
    <div className="calendarBlocks">
      {dates.map((date, index) => {
        const dayIndex = index % days.length; // Cycle through days, 0%7=0,1%7=1，2%7=2...6%7=6,7%7=0,8%7=1.。。27%7=6
        const dayName = days[dayIndex].name;  // days[0].name,days[1].name,days[2].name,days[3].name,days[4].name,days[5].name,days[6].name,days[0].name....
        return (
          <button key={index} className="calendarBlock"
          onClick={()=>{handleCalendarBlocks(index)}}
          style={{backgroundColor:blockColors[index]}}
          >
            <span>{date}</span>
            <span>{ dayName}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CalendarBlocks;
