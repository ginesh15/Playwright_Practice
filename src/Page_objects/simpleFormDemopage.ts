import { Locator, Page, expect } from "@playwright/test";

/*****userData variable will contain the parsed JSON data from the payload.json file.*****/
const userData = JSON.parse(JSON.stringify(require("../resources/payload.json")))

export class simpleFormDemopage {

  /******* Locator variables for different elements on the page*********/
   form_link: Locator;
   enter_msg: Locator;
   click_btn: Locator;
   first_value: Locator;
   second_value: Locator;
   sum_btn: Locator;
   nameText_visible: Locator;
   sum_value_visible: Locator;
   
   /******Initializes the 'page' property with the provided 'Page' object******/
    constructor(public readonly page:Page){

      /******* Constructor initializes the page and sets up element locators*******/
        this.page = page;
       
        this.form_link = this.page.getByRole('link', { name: 'Simple Form Demo' });
        this.enter_msg = this.page.getByPlaceholder('Please enter your Message');
        this.click_btn = this.page.getByRole('button', { name: 'Get Checked Value' });
        this.first_value = this.page.getByPlaceholder('Please enter first value');
        this.second_value = this.page.getByPlaceholder('Please enter second value');
        this.sum_btn = this.page.getByRole('button', { name: 'Get Sum' });
        this.nameText_visible = this.page.getByText('Hi this this Ginesh');
        this.sum_value_visible = this.page.getByText('40', { exact: true });
      }

      

      public async simpleDemo(){

        /******Test steps for simple-demo-page interaction********/
        await this.form_link.click();
        await this.enter_msg.type(userData.enter_msg);
        await this.click_btn.click();
        
        await this.first_value.type(userData.first_value);
        await this.second_value.type(userData.second_value);
        await this.sum_btn.click()

      }

      public async get_text(){

         /******Assertion using Playwright's expect function*******/
        await expect(this.nameText_visible).toBeVisible();
        await expect(this.sum_value_visible).toBeVisible();
        
      }

      public async visit(){
         /******Visit the Base URL by Playwright.config properties file*******/
        await this.page.goto('./');

    }
}