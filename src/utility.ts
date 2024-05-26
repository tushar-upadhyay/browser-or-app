import BraveIcon from './assets/brave.svg';
import SafariIcon from './assets/safari.svg';
import FirefoxIcon from './assets/firefox.svg';
import ChromeIcon from './assets/chrome.svg';
import PlayStoreIcon from './assets/playstore.svg';
import AppStoreIcon from './assets/iosstore.png';
import { AppUrls } from './components/interfaces';

export default function getBroswerIcon() {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Edge") > -1) {
        return ChromeIcon;
    } else if (userAgent.indexOf("Chrome") > -1) {
        return ChromeIcon;
    } else if (userAgent.indexOf("Firefox") > -1) {
        return FirefoxIcon;
    } else if (userAgent.indexOf("Safari") > -1) {
        return SafariIcon;
    } else if (userAgent.indexOf("Brave") > -1) {
        return BraveIcon;
    }

    return ChromeIcon;
}

export const  isMobileAgent = ()=>{
    return /Android|iPhone/i.test(navigator.userAgent);
}



export const getAppIcon = (appIcon?: string)=>{
    if(appIcon){
        return appIcon;
    }
    if( /Android/i.test(navigator.userAgent)){
        return PlayStoreIcon;
    }
    if(/IPhone/i.test(navigator.userAgent)){
        return AppStoreIcon;
    }
    return PlayStoreIcon;
}

export const getAppUrl = (appUrls: AppUrls): string => {
    if( /Android/i.test(navigator.userAgent)){
        return appUrls.playStoreUrl || '#';
    }
    if(/IPhone/i.test(navigator.userAgent)){
        return appUrls.appStoreUrl || '#'; 
    }
    return '#';
}