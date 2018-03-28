package myRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="F:\\Selenium_Hybrid_Framework\\Test Scripts\\cucumberFrameworkProject\\src\\main\\java\\Features\\Contacts.feature",
		glue={"stepDefinations"},
		format={"pretty","html:test-output"},
		monochrome=true,
		dryRun=false
		
		)


public class TestRunner {

}
