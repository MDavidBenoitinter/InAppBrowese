// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {

//   constructor() {}

// }

import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserObject, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    options: InAppBrowserOptions = {
        location: 'yes',//Or 'no' 
        hidden: 'no', //Or  'yes',
        hideurlbar: 'yes',
        clearcache: 'yes',
        clearsessioncache: 'yes',
        zoom: 'yes',//Android only ,shows browser zoom controls 
        hardwareback: 'yes',
        mediaPlaybackRequiresUserAction: 'no',
        shouldPauseOnSuspend: 'no', //Android only 
        closebuttoncaption: 'Close', //iOS only
        disallowoverscroll: 'no', //iOS only 
        toolbar: 'yes', //iOS only 
        enableViewportScale: 'no', //iOS only 
        allowInlineMediaPlayback: 'no',//iOS only 
        presentationstyle: 'pagesheet',//iOS only 
        fullscreen: 'no',//Windows only    
    };
    constructor(private theInAppBrowser: InAppBrowser) { }

    public openWithSystemBrowser(url: string) {
        let target = "_system";
        this.theInAppBrowser.create(url, target, this.options);
    }
    public openWithInAppBrowser(url: string) {
        let target = "_blank";
        this.theInAppBrowser.create(url, target, this.options);
    }
    public openWithCordovaBrowser(url: string) {
        let target = "_self";
        this.theInAppBrowser.create(url, target, this.options);
    }
   
}