import { IconContext } from "react-icons";
import "./button.css";

export default function Button({text, styleClass, icon: Icon, iconPosition = 'left', onClick }) {
    return (
        <button className={`button ${styleClass}`} onClick={onClick}>
            {iconPosition === 'left' && Icon && (
                <IconContext.Provider value={{className: 'button-icon'}}>
                    <Icon />
                </IconContext.Provider>
            )}
            {text}
            {iconPosition === 'right' && Icon && (
                <IconContext.Provider value={{className: 'button-icon-right'}}>
                    <Icon />
                </IconContext.Provider>
            )}
        </button>
    );
}