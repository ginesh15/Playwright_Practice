/***Importing necessary functions and objects from respective files***/
import { test } from '../../src/utils/basepage.ts';
import { expect } from '@playwright/test';
import { commanpageobject } from '../../src/utils/commanpageobject.ts';

   /***The test case accepts an object with two properties: page and Commanpageobject.***/
   test( "Test case for Input Form Submit", async ({page, Commanpageobject }) => {

   
   /***visit function on the simpleFormDemopage object, which is part of the Commanpageobject object.
        which open the base URl of web page***/   
   await Commanpageobject.simpleFormDemopage.visit();

   /***input_form function presumably performs the to input the data from user actions on the web page.***/
   await Commanpageobject.inputformsubmitpage.input_form();




})