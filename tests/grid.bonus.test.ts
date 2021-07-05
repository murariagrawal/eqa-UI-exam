import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";

describe("Load AG Grid", () => {
  before(() => {
    Page.open();
  });
  /**
   * Before this i have done upgrade from v6 to v7 
   */
  it("Test01 - Should Validate Rating 2 and 4 star and select specfic column , create a test to change the data size to 100000 Rows, 22 Cols, change the Theme to Balham and Filter any column by Kobe", () => {
    console.log("Test01 - Should Validate Rating 2 and 4 star and select specfic column , create a test to change the data size to 100000 Rows, 22 Cols, change the Theme to Balham and Filter any column by Kobe")
    GridPage.mainGrid.waitForDisplayed();
    /**
     * @author : Murari Agrawal
     * Call SelectColumn to select required column name from side bar
     */
    GridPage.selectColumn();
    /**
     * Call Apply filter on rating column to select 2 star and 4 star
     */
    GridPage.applyFilteOnRating();
    /**
     * Call Select Data size 100000 Rows, 22 Cols
     */
    GridPage.selectDataSize("100x22")
    /**
     * Call Select Theme as Balham
     */
    GridPage.selectTheme("ag-theme-balham");
    GridPage.globalFilter.setValue("Kobe")
  });





});
