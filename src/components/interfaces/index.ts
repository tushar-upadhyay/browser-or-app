import { JsxElement } from "typescript";

export interface BrowserOrAppInput {
    title: string;
    appIcon: string;
    appName: string;
    showRating: boolean;
    openAppButtonColor: string;
    additionalBottomContent?: JsxElement;
    appUrls: AppUrls

}

export interface AppUrls {
    appStoreUrl?: string;
    playStoreUrl?: string;    
}

export interface ButtonInput {
    color: string;
    backgroundColor: string;
    children: any;
    href?: string;
    onClick: any;
}