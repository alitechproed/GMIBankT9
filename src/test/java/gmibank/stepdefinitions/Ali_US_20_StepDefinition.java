package gmibank.stepdefinitions;

import static org.hamcrest.Matchers.*;
import static io.restassured.RestAssured.*;

import com.sun.xml.internal.ws.policy.AssertionSet;
import gmibank.utilities.ConfigurationReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.path.json.JsonPath;
import org.junit.Assert;

import java.util.List;
import java.util.Map;

public class Ali_US_20_StepDefinition {
    Response response;
    JsonPath json;
    List<Map<String, Object>> allCustomerData;

    @Given("verilen endpointi kullan {string}")
    public void verilen_endpointi_kullan(String endpoint) {

        response = given().auth().oauth2(ConfigurationReader.getProperty("token")).
                accept(ContentType.JSON).
                when().get(endpoint);
        //response.prettyPrint();

        response.then().assertThat().statusCode(200);

    }

    @Given("Customer bilgilerini java formatinda al")
    public void customer_bilgilerini_java_formatinda_al() {

        JsonPath json = response.jsonPath();
        allCustomerData = json.getList("$");
        System.out.println(allCustomerData);
    }

    @Given("Onaylanmis {int} tane Customer oldugunu dogrula")
    public void onaylanmis_tane_Customer_oldugunu_dogrula(Integer int1) {
        System.out.println(allCustomerData.size());
        Assert.assertTrue(allCustomerData.size() == int1);
    }

    @Given("ikinci Customer in tum bilgilerini al")
    public void ikinci_Customer_in_tum_bilgilerini_al() {
        String secondCustomerData = allCustomerData.get(1).toString();
        System.out.println(secondCustomerData);
        Assert.assertFalse(secondCustomerData.isEmpty());
    }

    @Then("ikinci Customer in ssn numarasinin {string} oldugunu dogrula")
    public void ikinci_Customer_in_ssn_numarasinin_oldugunu_dogrula(String ssn) {

        String secondCustomerSSN = allCustomerData.get(1).get("ssn").toString();
        Assert.assertEquals(ssn, secondCustomerSSN);
    }

    @Given("besinci Customer in firstname inin {string} oldugunu dogrula")
    public void besinci_Customer_in_firstname_inin_oldugunu_dogrula(String expectedName) {
        String fifthCustomerName = allCustomerData.get(4).get("firstName").toString();
        Assert.assertEquals(expectedName, fifthCustomerName);
    }
    @Given("besinci Customer in email inin {string} oldugunu dogrula")
    public void besinci_Customer_in_email_inin_oldugunu_dogrula(String email) {
        Assert.assertEquals(email, allCustomerData.get(4).get("email").toString());
    }
    @Given("ikinci Customer in ID sinin {int} oldugunu dogrula")
    public void ikinci_Customer_in_ID_sinin_oldugunu_dogrula(Integer idOfCustomer) {
        int idOfSecondCustomer= (int) allCustomerData.get(1).get("id");
        Assert.assertTrue(idOfCustomer==idOfSecondCustomer);
    }
    @Given("Son Customer in Soyismini al ve dogrula")
    public void son_Customer_in_Soyismini_al_ve_dogrula() {
        String lastNameofLastCustomer=allCustomerData.get(allCustomerData.size()-1).get("lastName").toString();
        Assert.assertFalse(lastNameofLastCustomer.isEmpty());
        System.out.println(lastNameofLastCustomer);
    }


}
