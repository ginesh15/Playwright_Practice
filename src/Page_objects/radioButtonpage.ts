import { Locator, Page, expect } from "@playwright/test";

export class radioButtonpage{

    /******* Locator variables for different elements on the page*********/
    Radio_link: Locator;
    first_radio: Locator;
    get_first_value: Locator;
    check_first_value:Locator;
    second_radio: Locator;
    third_radio: Locator;
    get_second_value: Locator;
    check_second_value: Locator;
    check_third_value: Locator;

    /******Initializes the 'page' property with the provided 'Page' object******/
    constructor(public readonly page:Page){

        /******* Constructor initializes the page and sets up element locators*******/
        this.page = page;

        this.Radio_link = this.page.getByRole('link', { name: 'Radio Buttons Demo' });
        this.first_radio = this.page.getByText('Male').first();
        this.get_first_value = this.page.getByRole('button', { name: 'Get value', exact: true });
        this.check_first_value = this.page.getByText('Radio button \'Male\' is checked');
        this.second_radio = this.page.getByText('Male').nth(3);
        this.third_radio = this.page.getByText('15 to 50');
        this.get_second_value = this.page.getByRole('button', { name: 'Get values' });
        this.check_second_value = this.page.getByText('Gender : Male', { exact: true })
        this.check_third_value = this.page.getByText('Age : 15 - 50');
    }

    public async radio_button(){

        /******Test steps for radio-button-page interaction********/
        await this.Radio_link.click();
        await this.first_radio.check();
        await this.get_first_value.click();
        
         /******Assertion using Playwright's expect function*******/
        await expect(this.check_first_value).toBeVisible();

        await this.second_radio.check();
        await expect(this.second_radio.isChecked()).toBeTruthy();

        await this.third_radio.check();
        await expect(this.third_radio.isChecked()).toBeTruthy();

        await this.get_second_value.click();

        await expect(this.check_second_value).toBeVisible();
        await expect(this.check_third_value).toBeVisible();






    }
}