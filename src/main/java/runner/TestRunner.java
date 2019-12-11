package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		format={"pretty","html:report/html"},
		tags={"@LoginFunctionality"},
		features="src/main/java/Features",
		glue={"stepdefinitions"}
	)
public class TestRunner extends AbstractTestNGCucumberTests{

}
