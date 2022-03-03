import './Button.scss';
import { Link } from "react-router-dom";

export default function Button({title, linkto}) {
    if(linkto){
        return(
            <button className="mr-1 button"><Link to={linkto}>{title}</Link></button>
        )
    }else {
        return(
            <button className="mr-1 button">{title}</button>
        )
    }
}