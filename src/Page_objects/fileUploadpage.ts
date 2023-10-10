import { Locator, Page, expect } from "@playwright/test";

/*****userData variable will contain the parsed JSON data from the payload.json file.*****/
const userData = JSON.parse(JSON.stringify(require("../resources/payload.json")))

export class fileUploadpage{

    /******* Locator variables for different elements on the page*********/
    uploadFile_link: Locator;
    uploadfile_button: Locator;
    success_file_uploaded: Locator;

    /******Initializes the 'page' property with the provided 'Page' object******/
    constructor(public readonly page:Page){

        /******* Constructor initializes the page and sets up element locators*******/
        this.page = page;

        this.uploadFile_link = this.page.getByRole('link', { name: 'Upload File Demo' });
        this.uploadfile_button = this.page.locator('#file');
        this.success_file_uploaded = this.page.getByText('File Successfully Uploaded');


    }

    public async upload_file(){

        /******Test steps for upload-file-page interaction********/
        await this.uploadFile_link.click();

        /******Test steps for setInput or upload a file from resource folder********/
        await this.uploadfile_button.setInputFiles(userData.upload_file_path);
        await this.uploadfile_button.click();
        
        /******Assertion using Playwright's expect function*******/
        await expect(this.success_file_uploaded).toBeVisible();

    }
}