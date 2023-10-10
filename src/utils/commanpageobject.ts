import { Page } from "@playwright/test";

/***Importing necessary classes from Playwright and custom page objects ***/
import { simpleFormDemopage } from "../Page_objects/simpleFormDemopage.ts";
import { inputformsubmitpage } from "../Page_objects/inputformsubmitpage.ts";
import { dragAndDrop } from "../Page_objects/dragAndDrop.ts";

import { radioButtonpage } from "../Page_objects/radioButtonpage.ts";
import { fileDowloadpage } from "../Page_objects/fileDowloadpage.ts";
import { windowPopupPage } from "../Page_objects/windowPopupPage.ts";

import { dropDowndemopage } from "../Page_objects/dropDowndemopage.ts";
import { dynamicDataLodingpage } from "../Page_objects/dynamicDataLoadingpage.ts";
import { tablefilterdemopage } from "../Page_objects/tablefilterdemopage.ts";
import { fileUploadpage } from "../Page_objects/fileUploadpage.ts";

/***Define and export the class 'commanpageobject' ****/
export class commanpageobject {
   
    /****Constructor to create an instance of the class with a Playwright Page object
        The 'public readonly' keyword indicates that the 'page' property can be accessed from outside the class****/
    constructor(public readonly page:Page){
        this.page = page;

    }

     /*** Getter method for accessing a 'simpleFormDemopage' object ***/
    public get simpleFormDemopage():simpleFormDemopage{
        return new simpleFormDemopage(this.page)
    }
     
     /*** Getter method for accessing an 'inputformsubmitpage' object ***/
    public get inputformsubmitpage():inputformsubmitpage{
        return new inputformsubmitpage(this.page)
    }
     /*** Getter method for accessing a 'dragAndDrop' object ***/
    public get dragAndDrop(): dragAndDrop{
        return new dragAndDrop(this.page)
    }
     /*** Getter method for accessing a 'fileUploadpage' object ***/
    public get fileUploadpage(): fileUploadpage{
       return new fileUploadpage(this.page)
   }
     /*** Getter method for accessing a 'radioButtonpage' object ***/
    public get radioButtonpage():radioButtonpage{
        return new radioButtonpage(this.page)
    }
     /*** Getter method for accessing a 'fileDowloadpage' object ***/
    public get fileDowloadpage(): fileDowloadpage{
        return new fileDowloadpage(this.page)
    }
     /*** Getter method for accessing a 'windowPopupPage' object ***/
    public get windowPopupPage(): windowPopupPage{
        return new windowPopupPage(this.page)
    }
     /*** Getter method for accessing a 'dropDowndemopage' object ***/
    public get dropDowndemopage(): dropDowndemopage{
        return new dropDowndemopage(this.page)
    }
     /*** Getter method for accessing a 'dynamicDataLodingpage' object ***/
    public get dynamicDataLodingpage(): dynamicDataLodingpage{
        return new dynamicDataLodingpage(this.page)
    }
     /*** Getter method for accessing a 'tablefilterdemopage' object ***/
    public get tablefilterdemopage(): tablefilterdemopage{
        return new tablefilterdemopage(this.page)
    }
}