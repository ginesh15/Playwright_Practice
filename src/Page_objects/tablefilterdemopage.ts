import { Locator, Page, expect } from "@playwright/test";

export class tablefilterdemopage{
   
    /******* Locator variables for different elements on the page*********/
    table_filter_link: Locator;
    table_filter_page: Locator;
    table_row_1: Locator;
    check_row:Locator;
    hyperexecutive_btn: Locator;

    /******Initializes the 'page' property with the provided 'Page' object******/
    constructor(public readonly page:Page){

        /******* Constructor initializes the page and sets up element locators*******/
        this.page = page;

        this.table_filter_link = this.page.getByRole('link', { name: 'Table Filter' });
        this.table_filter_page = this.page.getByText('HyperExecuteSelenium TestingCypress TestingAllHyperExecuteAI-Powered Blazing Fas');
        this.table_row_1 = this.page.getByRole('cell', { name: 'HyperExecute AI-Powered Blazing Fast End-to-End Test Orchestration Cloud' }).first()
        this.hyperexecutive_btn = this.page.getByRole('button', { name: 'HyperExecute' });
        this.check_row = this.page.getByRole('cell', { name: 'HyperExecute AI-Powered Blazing Fast End-to-End Test Orchestration Cloud' }).nth(1);
    }

    public async table_filter(){

        /******Test steps for table-filter-page interaction********/
        await this.table_filter_link.click();
        /******Assertion using Playwright's expect function*******/
        await expect(this.table_filter_page).toBeVisible();
       
        /******Test steps for table-filter-page interaction********/
        await this.hyperexecutive_btn.click();
   
        /******Assertion using Playwright's expect function*******/
        await expect(this.table_row_1).toBeVisible();
        await expect(this.check_row).toBeVisible();
    

    }
}