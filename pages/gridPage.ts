import { expect } from "chai";
import { Page } from "../pages/page";

export class GridPage {
  public static get mainGrid() {
    return $('[ref="eRootWrapper"] > .ag-root-wrapper-body');
  }

  public static get sideBar() {
    return $('[ref="eRootWrapper"] .ag-side-bar');
  }

  public static get gridContainer() {
    return $(
      '[ref="eRootWrapper"] > .ag-root-wrapper-body [ref="eCenterContainer"]'
    );
  }

  public static get colName() {
    return $$('[ref="eCenterContainer"] [col-id="name"]');
  }

  public static get colDecember() {
    return $$('[ref="eCenterContainer"] [col-id="dec"]');
  }

  public static get columnHeader() {
    return $$('[aria-rowindex="1"] > [role="columnheader"]');
  }

  public static get secondaryColumnHeader() {
    return $$('[aria-rowindex="2"] > [role="columnheader"]');
  }
  /**
   * @author : Murari Agrawal
   * Used locator xpath for column button
   */
  public static get columnButton() {
    return $("//button/span[text()='Columns']")
  }
  /**
   * locator for side primary column
   */
  public static get sidePrimaryColumn() {
    return "//span[@ref='eLabel'][text()='columnName']"
  }
  /**
   * locator for input of name column
   */
  public static get inputNameColumn() {
    return $("//input[@aria-label='Name Filter Input']")
  }
  /**
   * locator for input oct column
   */
  public static get inputOctColumn() {
    return $("//input[@aria-label='Oct Filter Input']")
  }
  /**
   * locator for filter Oct btn
   */
  public static get filterOctBtn() {
    return $("//input[@aria-label='Oct Filter Input']/../../../../following-sibling::div/button/span")
  }
  /**
   * locator to select less than value 
   */
  public static get lessThan() {
    return $("//span[normalize-space()='Less than']")
  }
  /**
   * Locator for filter operator 
   */
  public static get filteringOperator() {
    return $("//div[@ref='eOptions1']//div[@aria-label='Filtering operator']/div[1]")
  }
  /**
   * locator for filtering value 
   */
  public static get filteringValue() {
    return $("//div[@ref='eValueFrom1']//input[@aria-label='Filter Value']")
  }
  /**
   * locator for reset button 
   */
  public static get resetBtn() {
    return $("//button[contains(text(),'Reset')]")
  }
  /**
   * locator for center column container
   */
  public static get centerColsContainer() {
    return $$("div.ag-center-cols-container > div")
  }
  /**
   * locator for secondary Name column
   */
  public static get secondaryNameColumn() {
    return $("//span[@ref='eText'][text()='Name']")
  }
  /**
   * #Bonus 
   * locator for toggel select all columns
   */
  public static get toggleSelectAllColumns() {
    return $("//input[@aria-label='Toggle Select All Columns']")
  }
  /**
   * locator for filter rating button
   */
  public static get filterRatingBtn() {
    return $("//input[@aria-label='Rating Filter Input']/../../../../following-sibling::div/button/span")
  }
  /**
   * locator for to select checkbox for select all
   */
  public static get selectALL() {
    return $("//span[contains(text(),'Select All')]");
  }
  /**
   * locator for to select checkbox for twostars
   */
  public static get twoStars() {
    return $("//div[@role='listbox']/div[2]/div[4]/div/div");
  }
  /**
   * locator for to select checkbox for fourstars
   */
  public static get fourStar() {
    return $("//div[@role='listbox']/div[2]/div[6]/div/div");
  }
  /**
   * locator for global filter
   */
  public static get globalFilter(){
    return $("//input[@id='global-filter']")
  }
  /**
   * @author : Murari Agrawal
   * Method use for verifying the Proimary column header
   * Using for each case to irriating for all primary column present and according perform the required operation
   * 1. To verify Monthly Breakdown column we have to close columns side bar 
   * 2. Added one counter to verify the column as there are some empty columns also 
   * 3. Add Switch case with respect to count verifying the gettext() with primary column name
   * ## We have take column name from data file
   * 
   */
  public static verifyPrimaryColumnHeader() {
    this.columnButton.click();
    let count = 0;
    this.columnHeader.forEach((el) => {
      count = count + 1;
      switch (count) {
        case 1:
          expect(el.getText()).to.eql('Participant');
          break;
        case 2:
          expect(el.getText()).to.eql('Game of Choice');
          break;
        case 3:
          expect(el.getText()).to.eql('Performance');
          break;
        case 4:
        case 5:
          break;
        case 6:
          expect(el.getText()).to.eql('Monthly Breakdown');
          break;
        default:
          throw new Error("Primary Column header not found")
      }
    })
  }
  /**
   * @author Murari Agrawal
   * Method is used to verify Primary column from Side bar , 
   * Here I used a parameterised locator and replacing it with the respective column , 
   * Also i have used waitForElementTobeVisible , Used scrollIntoView to view the particular element as
   * initially rating column is not visible we have to scroll to that element.
   * ## We have take column name from data file , we can create one json file to maintian data for each test case
   */
  public static verifyPrimaryColumnInSideBar() {
    this.columnButton.click();
    Page.waitForElementTobeVisible($(this.sidePrimaryColumn.replace(/columnName/, "Participant")))
    expect($(this.sidePrimaryColumn.replace(/columnName/, "Participant")).isDisplayed()).to.eql(true)
    expect($(this.sidePrimaryColumn.replace(/columnName/, "Game of Choice")).isDisplayed()).to.eql(true)
    expect($(this.sidePrimaryColumn.replace(/columnName/, "Performance")).isDisplayed()).to.eql(true)
    $(this.sidePrimaryColumn.replace(/columnName/, "Performance")).scrollIntoView()
    Page.waitForElementTobeVisible($(this.sidePrimaryColumn.replace(/columnName/, "Rating")))
    expect($(this.sidePrimaryColumn.replace(/columnName/, "Rating")).isDisplayed()).to.eql(true)
    expect($(this.sidePrimaryColumn.replace(/columnName/, "Total Winnings")).isDisplayed()).to.eql(true)
    expect($(this.sidePrimaryColumn.replace(/columnName/, "Monthly Breakdown")).isDisplayed()).to.eql(true)
  }
  /**
   * Methos is used to verify secondary column and from side bar also 
   * Here first creating a for each  loop on secondary column to get secondary column name and 
   * then based on name search it in side bar and verify
   */
  public static verifySecondaryColumn() {
    this.secondaryColumnHeader.forEach((el) => {
      el.scrollIntoView(false);
      let columnName = el.getText();
      let selector = $(this.sidePrimaryColumn.replace(/columnName/, columnName))
      Page.waitForElementTobeVisible(selector)
      selector.scrollIntoView()
      expect(selector.isDisplayed()).to.eql(true)
    })
  }
  /**
   * Method is used validate and filter on based on Name column 
   * Here based on the result validating with expect condition
   * @param name : pass name as parameter 
   */
  public static filterAndValidateNameColumn(name: string) {
    this.inputNameColumn.setValue(name);
    expect(this.centerColsContainer.length > 1).to.eql(true)

  }
  /**
   * Method is to apply filter for oct column 
   * Here using do while to scroll for oct column then select filter for less than 5000
   */
  public static applyFilterToOct() {
    browser.pause(3000)
    this.columnButton.click();
    this.secondaryNameColumn.click();
    do {
      browser.keys('\uE004');
    } while (this.inputOctColumn.isDisplayed() !== true);
    browser.keys('\uE004');
    browser.keys('\uE004');
    browser.keys('\uE004');
    Page.waitForElementTobeVisible(this.filterOctBtn)
    this.filterOctBtn.click();
    Page.waitForElementTobeVisible(this.filteringOperator)
    this.filteringOperator.click();
    Page.waitForElementTobeVisible(this.lessThan)
    this.lessThan.click();
    Page.waitForElementTobeVisible(this.filterOctBtn)
    this.filteringValue.setValue("5000")
    expect(this.centerColsContainer.length > 1).to.eql(true)

  }

  /**
   * Methid is used to select column based on array , so first click on the toggle selectALL column
   * and then use for each loop to select from array list and check the colun
   */
  public static selectColumn() {
    this.toggleSelectAllColumns.click();
    let columnName: string[] = ["Name", "Country", "Game Name", "Rating", "Jan", "Feb", "Mar", "Apr", "May"]
    columnName.forEach(element => {
      console.log("****" + element)
      $(this.sidePrimaryColumn.replace(/columnName/, element)).scrollIntoView();
      $(this.sidePrimaryColumn.replace(/columnName/, element) + "//../div").click();

    });
    this.columnButton.click();

  }
  /**
   * Method is used to apply filter in rating , so first i am click on the filter button then
   * click on checkbox for select all so that all the checkbox get unchecked then i clicked on two star and four star
   * and last i am verifying that data populated are more than 1 or 2 
   */
  public static applyFilteOnRating() {
    this.filterRatingBtn.click();
    Page.waitForElementTobeVisible(this.selectALL)
    this.selectALL.click()
    Page.waitForElementTobeVisible(this.twoStars)
    this.twoStars.click();
    Page.waitForElementTobeVisible(this.fourStar)
    this.fourStar.click();
    expect(this.centerColsContainer.length > 2).to.eql(true)

  }
  /**
   * Medthod is used to select different data size So here I am using select by Attribute method
   * @param val 
   */
  public static selectDataSize(val: string) {
    const selectBox = $("//select[@id='data-size']");
    selectBox.selectByAttribute('value', val);
  }
  /**
   * Medthod is used to select different theme So here I am using select by Attribute method
   * @param val 
   */
  public static selectTheme(val: string) {
    const selectBox = $("//select[@id='grid-theme']");
    selectBox.selectByAttribute('value', val);
  }
}

