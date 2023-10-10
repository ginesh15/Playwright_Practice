import { Locator, Page, expect } from "@playwright/test";

export class dynamicDataLodingpage{

    /******* Locator variables for different elements on the page*********/
    dynamic_data_link: Locator;
    get_random_user_button: Locator;
    check_imag: Locator;

    /******Initializes the 'page' property with the provided 'Page' object******/
    constructor(public readonly page:Page){

        /******* Constructor initializes the page and sets up element locators*******/
        this.page = page;

        this.dynamic_data_link = this.page.getByRole('link', { name: 'Dynamic Data Loading' });
        this.get_random_user_button = this.page.getByRole('button', { name: 'Get Random User' });
        this.check_imag = this.page.locator('#loading').getByRole('img');
    }

    public async dynamic_data(){

         /******Test steps for drop-down-demo-page interaction********/
        await this.dynamic_data_link.click();
        await this.get_random_user_button.click();
        setTimeout:12000;
       
        /******Assertion using Playwright's expect function*******/
        await expect(this.check_imag).toBeVisible();
    }

}