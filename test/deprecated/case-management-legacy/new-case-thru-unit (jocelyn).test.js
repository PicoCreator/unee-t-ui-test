/////////////////////////////////////////////////////////////
//
//  test case : create-a-new-case using jocelyn account
//
/////////////////////////////////////////////////////////////

// Include the default config, such as site settings for demo environment
TEST.run("suite/config/demo");

// Import any required functions
TEST.run("func/auth/loginAccount");
TEST.run("func/chance/randomAnimal");

// Prepare the required data variables
DATA.newCase_petAnimal   = DATA.newCase_petAnimal || randomAnimal();
DATA.newCase_petTitle    = "Are pet "+DATA.newCase_petAnimal+"'s allowed?";
DATA.newCase_petDetails  = "A friend of mine is flying overseas, and would want me to take care of his pet "+DATA.newCase_petAnimal+" for 2 months";

// Login as jocelyn
loginAccount("jocelyn@inboxkitten.com");

// Click on the Plus signed button
I.click('//*[@id="app"]/div/div/div[1]/div[2]/div[1]/div/div[2]');
I.see("My Units");

// Verify that the existing unit is there and create a case for that unit
I.see("Demo - Unit 01-02");
I.click("Add Case");

// Fill in some other details
I.fill( "Case title", DATA.newCase_petTitle   );
I.fill( "Details",    DATA.newCase_petDetails );

// Fill in category details
I.see("Category");
I.click('//div[contains(@id,"Category")]');
I.click("Housekeeping");

// Fill in sub category details
I.see("Sub-category");
I.click('//div[contains(@id,"Sub-category")]');
I.click("Other H");

// Seelect Priority
I.see("Priority");
I.click('//div[contains(@id,"Priority")]');
I.click("P3");

// Select severity
I.see("Severity");
I.click('//div[contains(@id,"Severity")]');
I.click("minor");

// Select Assignment
I.select("Owner/Landlord");

// Submit the case
I.click("Add Case");

// See confirmation
//I.see("CONFIRMED");
I.see( DATA.newCase_petDetails );