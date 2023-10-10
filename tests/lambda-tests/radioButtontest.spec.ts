/***Importing necessary functions and objects from respective files***/
import { test } from '../../src/utils/basepage.ts';
import { expect } from '@playwright/test';
import { commanpageobject } from '../../src/utils/commanpageobject.ts';

/***The test case accepts an object with two properties: page and Commanpageobject.***/
test( "Test case for Radio button actions", async ({page, Commanpageobject }) => {

    /***visit function on the simpleFormDemopage object, which is part of the Commanpageobject object.
        which open the base URl of web page***/
    await Commanpageobject.simpleFormDemopage.visit();

    /***radio_button function presumably performs the to radio button actions on the web page.***/
    await Commanpageobject.radioButtonpage.radio_button();
 
 
 })