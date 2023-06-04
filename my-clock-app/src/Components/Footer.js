import React, { useState } from "react"
import "../Assets/Styles/FooterStyle.css"



const ToggleButton = ({ content, setFormatTime, timeFormats, formatData, setDisplayType, displayType }) => {
    let [isToggled, setIsToggled] = useState(true);

    let format = timeFormats;
    let defaultTime = ["hh:mm", "A", "ss", "dddd, MMMM DD"];
    let displayData = displayType;

    if (!isToggled) {
        format[formatData[1]] = formatData[0];
        setFormatTime(format);
        
        displayData[formatData[1]] = formatData[2];
        setDisplayType(displayData);
    } else {
        format[formatData[1]] = defaultTime[formatData[1]]
    }

    const switchChanges = () => {
        setIsToggled(!isToggled);
        displayData[formatData[1]] = "block"
      };

    return (
        <>
            <div className="switch-container" style={isToggled ? {flexDirection: "row-reverse"} : null}>
                <div className="switch" onClick={(event) => switchChanges(event)}></div>
            </div>
            <p>{content}</p>
        </>

    )
}

const Option = ({ timeFormat, setTimeFormat, setDisplay, displayData }) => {

    return (
        <div className="options">
            <h3>Options</h3>
            <div className="toggle-buttons">
                <ToggleButton displayType={displayData} setDisplayType={setDisplay} formatData={["HH:mm", 0, "block"]} content={"12-Hour"} setFormatTime={setTimeFormat} timeFormats={timeFormat}></ToggleButton>
                <ToggleButton displayType={displayData} setDisplayType={setDisplay} formatData={["ss", 2, "none"]} content={"Seconds"} setFormatTime={setTimeFormat} timeFormats={timeFormat}></ToggleButton>
                <ToggleButton displayType={displayData} setDisplayType={setDisplay} formatData={["dddd, MMMM DD", 3, "none"]} content={"Date"} setFormatTime={setTimeFormat} timeFormats={timeFormat}></ToggleButton>

            </div>
        </div>
    )
}

const Footer = ({ setFormatTime, timeFormats, setDisplayType, displayType }) => {

    return (
        <>
        <div className="footer">
            <div className="settings">
                <Option setTimeFormat={setFormatTime} timeFormat={timeFormats} setDisplay={setDisplayType} displayData={displayType}></Option>   
                     <div className="settings2">
                        <div id="share">
                             <h3>Share</h3>
                                 <p>You can create and share Themes; customize an existing Theme, save it under a new name, then use it's share link.</p>
                            </div>
                     </div>
                </div>
        </div>
       </>
    )
}

export default Footer;