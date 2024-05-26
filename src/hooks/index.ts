import { useState } from "react"
import { isMobileAgent } from "../utility";

export const useBrowserOrApp = ():[boolean,()=>void]=>{
    const [show,setShow] = useState(!localStorage.getItem('hideUseBrowserOrApp') && isMobileAgent());

    function hide(){
        localStorage.setItem('hideUseBrowserOrApp','true');
        setShow(false);
    }

    return [show,hide];

}




