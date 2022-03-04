import './Button.scss';
import { Link } from "react-router-dom";

export default function Button({title, linkto, type}) {
    if(linkto){
        return(
            <Link to={linkto}><button className="mr-1 button">{title}</button></Link>
        )
    }else {
        return(
            <button type={type} className="mr-1 button">{title}</button>
        )
    }
}