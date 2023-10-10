import { Locator, Page, expect } from "@playwright/test";

/*****userData variable will contain the parsed JSON data from the payload.json file.*****/
const userData = JSON.parse(JSON.stringify(require("../resources/payload.json")))

export class fileDowloadpage{

    /******* Locator variables for different elements on the page*********/
    file_download_link: Locator;
    file_textbox: Locator;
    generateFile_button: Locator;
    download_btn: Locator;

    /******Initializes the 'page' property with the provided 'Page' object******/
    constructor(public readonly page:Page){

        /******* Constructor initializes the page and sets up element locators*******/
        this.page = page;

        this.file_download_link = this.page.getByRole('link', { name: 'File Download' });
        this.file_textbox = this.page.locator('#textbox');
        this.generateFile_button = this.page.getByRole('button', { name: 'Generate File' });
        this.download_btn = this.page.getByRole('link', { name: 'Download' });
    }

    public async file_Download(){

        /******Test steps for file-download-page interaction********/
        await this.file_download_link.click();
        await this.file_textbox.type(userData.file_data);
        await this.generateFile_button.click();
        
        /******Assertion using Playwright's expect function*******/
        await expect(this.download_btn).toBeVisible();
        
        /******Test steps for drop-down-demo-page interaction********/
        await this.download_btn.click();

    }
}