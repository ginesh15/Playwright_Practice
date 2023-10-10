import { Locator, Page, expect } from "@playwright/test";

export class dragAndDrop{

    /******* Locator variables for different elements on the page*********/
    drag_drop_link: Locator;
    drag_element_1: Locator;
    drag_to_element: Locator;
    drag_element_2: Locator;
    check_draggable_element: Locator;

    /******Initializes the 'page' property with the provided 'Page' object******/
    constructor(public readonly page:Page){

        /******* Constructor initializes the page and sets up element locators*******/
        this.page = page;

        this.drag_drop_link = this.page.getByRole('link', { name: 'Drag and Drop' });
        this.drag_element_1 = this.page.getByText('Draggable 1');
        this.drag_to_element = this.page.locator('#mydropzone');
        this.drag_element_2 = this.page.getByText('Draggable 2');
        this.check_draggable_element = this.page.getByText('Dropped Items ListDraggable 1Draggable 2');

    }

    public async drag_drop(){

        /******Test steps for drag-and-drop interaction********/
        await this.drag_drop_link.click();
        await this.drag_element_1.dragTo(this.drag_to_element);
        await this.drag_element_2.dragTo(this.drag_to_element);

        /******Assertion using Playwright's expect function*******/
        await expect(this.check_draggable_element).toBeVisible();
       

    }
}