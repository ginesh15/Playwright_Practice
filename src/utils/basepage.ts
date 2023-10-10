/***Importing test and expect functions from the Playwright Test library.***/
/** 'test' is aliased as 'base' for convenience. ***/
import { test as base ,expect} from '@playwright/test';
import { commanpageobject } from './commanpageobject.ts';

/*** Defining a new test using Playwright Test's 'base.extend()' function.***/
/***We are also defining a type for the fixture using TypeScript generic syntax. ***/
export const test = base.extend<{Commanpageobject:commanpageobject}>

({
   
    //define fixture
    Commanpageobject:async ({page},use) =>
    {
      /*** Creating an instance of the 'commanpageobject' class, passing the 'page' object to it.****/
        const comman_page = new commanpageobject(page);

       /*** 'use' is a function provided by Playwright Test to associate the fixture with the test.
    /*** We are passing the 'comman_page' instance to the test using 'use'. ***/
      await use (comman_page );

    },

});