package gmibank.stepdefinitions;

import gmibank.utilities.ConfigurationReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;
import static io.restassured.RestAssured.*;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.path.json.JsonPath;



public class Ali27 {
    Response response;
    JsonPath json;
    Response deleteResponse;

    @Given("Api adresine GET request gonder {string}")
    public void api_adresine_GET_request_gonder(String apiadress) {

        response=given().auth().oauth2(ConfigurationReader.getProperty("token")).
                accept(ContentType.JSON).
                when().get(apiadress);
        response.prettyPrint();

    }

    @Then("StatusCode u {int} olup olmadigini kontrol et")
    public void statuscode_u_olup_olmadigini_kontrol_et(Integer statuscode) {
        response.then().assertThat().statusCode(200);
    }

    @Then("response formatinin JSON oldugunu kontrol et")
    public void response_formatinin_JSON_oldugunu_kontrol_et() {
        response.then().assertThat().contentType(ContentType.JSON);
    }

    @Then("id nin {int} oldugunu dogrula")
    public void id_nin_oldugunu_dogrula(Integer id) {
        response.then().assertThat().body("id",Matchers.equalTo(25386), "name",Matchers.equalTo("Centre"));


        json=response.jsonPath();
        int actualId=json.get("id");
        System.out.println(actualId);
        Assert.assertEquals(id,(Integer)actualId);
    }

    @Then("response name inin {string} oldugunu dogrula")
    public void response_name_inin_oldugunu_dogrula(String expectedName) {

        String actualName=json.get("name");
        Assert.assertEquals(expectedName,actualName);


    }

    @Given("Verilen API adresine DELETE requesti gonder {string}")
    public void verilen_API_adresine_DELETE_requesti_gonder(String deleteAPI) {

        deleteResponse=given().auth().oauth2(ConfigurationReader.getProperty("token")).
                accept(ContentType.JSON).
                when().delete(deleteAPI);

    }

    @Then("Sildikten sonra Statuscode un {int} oldugunu dogrula")
    public void sildikten_sonra_Statuscode_un_oldugunu_dogrula(Integer int1) {

        deleteResponse.then().assertThat().statusCode(int1);
    }







}
