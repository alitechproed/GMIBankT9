package gmibank.stepdefinitions;

import gmibank.utilities.DatabaseUtility;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;

import java.util.List;

public class DBStepDefinitions {


    @Given("Kullanici veritabanina baglanir.")
    public void kullanici_veritabanina_baglanir() {

        DatabaseUtility.createConnection();

        String query = "SELECT * FROM public.tp_customer";
        List<Object>list=DatabaseUtility.getColumnData(query,"email");

        for (Object w:list) {
            System.out.println(w.toString());
        }


        Driver.getDriver().get("www.google.com");
        System.out.println("Ali");

    }

}
