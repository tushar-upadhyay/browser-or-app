import { BrowserOrAppInput } from "./interfaces"
import './css/container.css'
import Button from "./Button"
import getBroswerIcon, { getAppIcon, getAppUrl } from "../utility"
import { useBrowserOrApp } from "../hooks";

export default function BrowserOrApp(props: BrowserOrAppInput){

    const [show,hide] = useBrowserOrApp();

    if(!show){
        return null;
    }

    return (
        <div className="container">
            <div className="inner-container">
                <div className="card">
                    <div className="card-content">
                        <p className="title">{props.title}</p>
                        <div className="card-body">
                            <div className="card-body-left">
                            <img width={32} height={32} src={getAppIcon(props.appIcon)}/>
                            <h3>{props.appName}</h3>
                            </div>
                            <Button onClick={()=>hide()} href={getAppUrl(props.appUrls)} color="white" backgroundColor="#FF2323">Open</Button>
                        </div>
                        <div className="card-body">
                        <div className="card-body-left">
                            <img width={32} height={32} src={getBroswerIcon()}/>
                            <h3>Browser</h3>
                            </div>
                            <Button onClick={()=>hide()} color="black" backgroundColor="#F5F5F5">Continue</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    

}