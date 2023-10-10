import { Locator, Page, expect } from "@playwright/test";

export class dropDowndemopage{
    
    /******* Locator variables for different elements on the page*********/
    drop_downlist_link: Locator;
    select_demo:Locator;
    day_selected: Locator;
    multiselect: Locator;
    first_select: Locator;
    last_select: Locator;
    check_daySelected: Locator;
    first_selectedOption: Locator;
    last_selectedOption: Locator;

    /******Initializes the 'page' property with the provided 'Page' object******/
    constructor(public readonly page:Page){

        /******* Constructor initializes the page and sets up element locators*******/
        this.page = page;

        this.drop_downlist_link = this.page.getByRole('link', { name: 'Select Dropdown List' });
        this.select_demo = this.page.locator('#select-demo');
        this.day_selected = this.page.getByText('Day selected :- Friday');
        this.check_daySelected = this.page.getByText('Day selected :- Friday');
        this.multiselect = this.page.locator('#multi-select');
        this.first_select = this.page.getByRole('button', { name: 'First Selected' });
        this.last_select = this.page.getByRole('button', { name: 'Get Last Selected' });
        this.first_selectedOption = this.page.getByText('First selected option is : New Jersey');
        this.last_selectedOption = this.page.getByText('Last selected option is : Pennsylvania');

    }

    public async drop_down(){

         /******Test steps for drop-down-demo-page interaction********/
        await this.drop_downlist_link.click();
        await this.select_demo.selectOption('Friday');
        await this.day_selected.click();

        /******Assertion using Playwright's expect function*******/
        await expect(this.check_daySelected).toBeVisible();
        
        /******Test steps for drop-down-demo-page interaction********/
        await this.multiselect.selectOption('New Jersey');
        await this.first_select.click();
        await this.multiselect.selectOption('Pennsylvania');
        await this.last_select.click();

     

    }

}