////////////////////////////////////////////////
//
//  test case : open "new case" window multiple
//  times across multiple accounts. Due to its
//  random occurance nature
//
////////////////////////////////////////////////

// Include the data-config, amnd dependency function
TEST.run("data-config");

// This function allows the iteration of user objects
TEST.run("func/auth/forEachAccount");

// ForEachAccount requires the site to be loaded first
I.goTo( DATA.site );

// For each email password pair in the demo account list,
// login and execute the inner function
forEachAccount( DATA.demoAccounts, function() {
	// Click on "Create New Case"
	I.click("Create New Case");
	
	// Lets see the "New Case" UI
	I.see("New Case");
	I.see("Assign this case to");
	I.see("Add Case");
	
	// And try again for a new user
});