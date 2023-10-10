import { Locator, Page, expect } from "@playwright/test";
const fs = require('fs');
/*****userData variable will contain the parsed JSON data from the payload.json file.*****/
const userData = JSON.parse(JSON.stringify(require("../resources/payload.json")))

export class inputformsubmitpage{

    /******* Locator variables for different elements on the page*********/
    input_form_link: Locator;
    name: Locator;
    email: Locator;
    password: Locator;
    company_name: Locator;
    website_name: Locator;
    select_option: Locator;
    city_name: Locator;
    address1: Locator;
    address2: Locator;
    state: Locator;
    zipcode: Locator;
    submit_button: Locator;
    expected_msg: Locator;
    
    /******Initializes the 'page' property with the provided 'Page' object******/
    constructor(public readonly page:Page){

       /******* Constructor initializes the page and sets up element locators*******/
        this.page = page;

        this.input_form_link = this.page.getByRole('link', { name: 'Input Form Submit' });
        this.name = this.page.getByPlaceholder('Name', { exact: true });
        this.email = this.page.getByPlaceholder('Email', { exact: true });
        this.password = this.page.getByPlaceholder('Password');
        this.company_name = this.page.getByPlaceholder('Company');
        this.website_name = this.page.getByPlaceholder('Website');
        this.select_option = this.page.getByRole('combobox');
        this.city_name = this.page.getByPlaceholder('City');
        this.address1 = this.page.getByPlaceholder('Address 1');
        this.address2 = this.page.getByPlaceholder('Address 2');
        this.state = this.page.getByPlaceholder('State');
        this.zipcode = this.page.getByPlaceholder('Zip code');
        this.submit_button = this.page.getByRole('button', { name: 'Submit' });
        this.expected_msg = this.page.getByText('Thanks for contacting us, we will get back to you shortly.');
      }

      

      public async input_form(){

        /******Test steps for input-form-page interaction********/
        await this.input_form_link.click();
        await this.name.type(userData.name);
        await this.email.type(userData.email);
        await this.password.type(userData.password);
        await this.company_name.type(userData.company);
        await this.website_name.type(userData.website);
        await this.select_option.selectOption('IN');
        await this.city_name.type(userData.city);
        await this.address1.type(userData.address_1);
        await this.address2.type(userData.address_2);
        await this.state.type(userData.state);
        await this.zipcode.type(userData.zip_code);
        await this.submit_button.click();
        
         /******Assertion using Playwright's expect function*******/
        await expect(this.expected_msg).toBeVisible();
        
       /*****Visual Testing Screen_shot path*********/
        await this.page.screenshot({ path: "./visual_testing_screenshot/"+"Input_form_page.png" });  
       
       /******expect or match the screen_shot with previous one to check the visible testing*****/
        expect(await this.page.screenshot()).toMatchSnapshot("visualtesting_inputForm.png");

       
       
      
      }
}