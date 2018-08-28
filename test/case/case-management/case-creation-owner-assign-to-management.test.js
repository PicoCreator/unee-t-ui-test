////////////////////////////////////////////////
//
//  test case : owner create case assign to management
//
////////////////////////////////////////////////

// Include the data-config, and login util function
TEST.run("data-config");
TEST.requireOnce("case/unit-management/unit-creation-as-owner");

// Add a case
I.click("add");

// Fill in some other details
I.fill( "Case title", "New management company onboarding to Unee-t" );
I.fill( "Details",    "Welcome aboard!" );

// Fill in category details
I.see("Category");
I.click('//div[contains(@id,"Category")]');
I.click("Other");

// Fill in sub category details
I.see("Sub-category");
I.click('//div[contains(@id,"Sub-category")]');
I.click("Viewing");

// Seelect Priority
I.see("Priority");
I.click('//div[contains(@id,"Priority")]');
I.click("P3");

// Select severity
I.see("Severity");
I.click('//div[contains(@id,"Severity")]');
I.click("minor");

// Select Assignment
I.select("Management Company");
// Select occupant
I.click("Email of the Management Company to invite")
I.type(getUniqueTestEmail("management"));

// Submit the case 
I.click("Add Case");

// Wait for create case to complete
I.dontSee("New Case");
I.see("Open");
I.see("Closed");
