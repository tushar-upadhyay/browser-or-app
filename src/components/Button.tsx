import './css/button.css';
import { ButtonInput } from './interfaces';

export default function Button(props: ButtonInput){

    return (
        <div onClick={props.onClick} style={{backgroundColor: props.backgroundColor}} className='button'>
            {props.href ? <a style={{ color: props.color}} className='a' href={props.href}>{props.children}</a> : <div style={{color: props.color}}>{props.children}</div>}
        </div>
    )

}