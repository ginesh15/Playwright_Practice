import { Locator, Page, expect } from "@playwright/test";

/*****userData variable will contain the parsed JSON data from the payload.json file.*****/
const userData = JSON.parse(JSON.stringify(require("../resources/payload.json")))

export class windowPopupPage{
   
    /******* Locator variables for different elements on the page*********/
    window_pop_link: Locator;
    click_multiple_window_link: Locator;
  multipage: any;

    /******Initializes the 'page' property with the provided 'Page' object******/
    constructor(public readonly page:Page){

        /******* Constructor initializes the page and sets up element locators*******/
        this.page = page;

        this.window_pop_link = this.page.getByRole('link', { name: 'Window Popup Modal' });
        this.click_multiple_window_link = this.page.getByText('Follow Twitter & Facebook');

    }
    public async window_popup(){

         /******Test steps for window_popUp-page interaction********/
        await this.window_pop_link.click();
       
        /****To wait for two actions simultaneously. First, it waits for a "popup" event,
          which occurs when a new pop-up window is opened. Second, it clicks on a link****/
        const [multiPage] = await Promise.all([
            
          this.page.waitForEvent("popup"),
          this.click_multiple_window_link.click()
        ])
           /****waits for the pop-up window to finish loading its content.***/
           await multiPage.waitForLoadState();

           /***Gets an array of all pages (including the main page and any opened pop-up windows) in 
             the current browser context.*****/
           const pages = multiPage.context().pages();
                     
           await expect(await pages[2]).toHaveTitle(userData.Multipage_check);

    }
    

}