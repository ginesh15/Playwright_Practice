/***Importing necessary functions and objects from respective files***/
import { test } from '../../src/utils/basepage.ts';
import { expect } from '@playwright/test';
import { commanpageobject } from '../../src/utils/commanpageobject.ts';

/***The test case accepts an object with two properties: page and Commanpageobject.***/
test( "Test case for Table Filter Data", async ({page, Commanpageobject }) => {

    /***visit function on the simpleFormDemopage object, which is part of the Commanpageobject object.
        which open the base URl of web page***/ 
    await Commanpageobject.simpleFormDemopage.visit();

    /***table_filter function presumably performs the to filter the data from user actions on the web page.***/
    await Commanpageobject.tablefilterdemopage.table_filter();
 
 
 })