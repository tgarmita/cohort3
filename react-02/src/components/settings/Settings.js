import React from 'react';


const Settings = (props) => {
  const handleOptionChange = (event) => {
    props.changeTheme(event.target.value)
  }

  return (
    <div className="settings">
      <h3>Select Theme:</h3>
      
      <input type="radio" name="players" value="day" onChange={handleOptionChange} />Day
      <input type="radio" name="players" value="sunset" onChange={handleOptionChange} />Sunset
    </div >
  );
}

export default Settings;