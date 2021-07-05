import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";

describe("Load AG Grid", () => {
  before(() => {
    Page.open();
  });

  it("Test01 - Should Validate Primary Column Headers with text", () => {
    console.log("Test01 - Should Validate Primary Column Headers with text")
    GridPage.mainGrid.waitForDisplayed();
    /**
     * @author : Murari Agrawal
     * Calling below method to verify primary column from Grid Page object
     */
    GridPage.verifyPrimaryColumnHeader();
  });

  it("Test02 - Should Validate Primary Column Headers are available in the Columns Sidebar options", () => {
    console.log("Test02 - Should Validate Primary Column Headers are available in the Columns Sidebar options")
    /**
     * @author : Murari Agrawal
     * Calling below method to verify primary column from side bar
     */
    GridPage.verifyPrimaryColumnInSideBar();
  });

  it("Test03 - Should Validate Primary Column Headers are available in the Columns Sidebar options", () => {
    console.log("Test03 - Should Validate Primary Column Headers are available in the Columns Sidebar options")
    Page.open()
    /**
     * @author : Murari Agrawal
     * Calling below method to verify primary column from side bar
     */
    GridPage.verifySecondaryColumn();
  });

  it("Test04 - Should Validate that Filtering Name will return result", () => {
    console.log("Test04 - Should Validate that Filtering Name will return result")
    Page.open()
    /**
     * @author : Murari Agrawal
     * Calling below method to verify primary column from side bar
     */
    GridPage.filterAndValidateNameColumn("Gil");
    GridPage.filterAndValidateNameColumn("Tony");
    GridPage.filterAndValidateNameColumn("Isabella");
    GridPage.filterAndValidateNameColumn("Poppy");

  });

  it("Test05 - Should Validate that Winnings in October is less than 5000", () => {
    console.log("Test05 - Should Validate that Winnings in October is less than 5000")
    Page.open()
    /**
     * @author : Murari Agrawal
     * Calling below method to verify primary column from side bar
     */
    GridPage.applyFilterToOct();  
  });




});
