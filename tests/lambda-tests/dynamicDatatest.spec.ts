/***Importing necessary functions and objects from respective files***/
import { test } from '../../src/utils/basepage.ts';
import { expect } from '@playwright/test';
import { commanpageobject } from '../../src/utils/commanpageobject.ts';

/***The test case accepts an object with two properties: page and Commanpageobject.***/
test( "Test case for Dynamic data Loading", async ({page, Commanpageobject }) => {

    /***visit function on the simpleFormDemopage object, which is part of the Commanpageobject object.
        which open the base URl of web page***/
    await Commanpageobject.simpleFormDemopage.visit();

    /***dynamic_data function presumably performs the random Dynamic data actions on the web page.***/
    await Commanpageobject.dynamicDataLodingpage.dynamic_data();
 
 
 })