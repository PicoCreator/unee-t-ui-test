////////////////////////////////////////////////
//
//  test case : valid-signup
//
//  Properly performing and 
//  testing the signup process
//
////////////////////////////////////////////////

// Include the data-config
TEST.run("data-config");

// Go to the signup page
I.goTo( DATA.site );

// Click on signup
I.click( "Sign Up" );

// Fill up the form
I.fill("Name", DATA.signup_email );
I.fill("Phone", "98765432" );
I.fill("Country", "Singapore" );
I.fill("Email", DATA.signup_email );
I.fill("Password", DATA.signup_pass );

// Agree to T&C
I.select("By signing up");

// Submit the form
I.click("SUBMIT");

// See dashboard
I.see("My Units");
I.see("ALL UNITS");