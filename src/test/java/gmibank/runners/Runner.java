package gmibank.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/default-cucumber-reports",
                "json:target/json-reports/cucumber.json",
                "junit:target/xml-report/cucumber.xml"},
        features = "src/test/resources/features",
        glue = "gmibank/stepdefinitions",

<<<<<<< HEAD
        tags = "@all",
        dryRun =false
=======
        tags = "@US_030",
        dryRun = true
>>>>>>> master

)
public class Runner {

}