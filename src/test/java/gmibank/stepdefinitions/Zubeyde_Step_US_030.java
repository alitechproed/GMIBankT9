package gmibank.stepdefinitions;
import gmibank.utilities.ConfigurationReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

public class Zubeyde_Step_US_030 {

    Response response;

    @Given("REST API'a bir GET isteği gönder")
    public void rest_API_a_bir_GET_istegi_gonder() {

        String url = "https://www.gmibank.com/api/users";
        response = given().
                accept(ContentType.JSON).
                when().get(url);


    }

    @Given("HTTP Durum Kodu {int} ve contentType JSON olmalıdır")
    public void http_Durum_Kodu_ve_contentType_JSON_olmalidir(Integer int1) {
        int statusCode = response.statusCode();
        String contentType = response.contentType();
        System.out.println(statusCode);
        System.out.println(contentType);

    }

    @Then("Ad, soyad ve rol gibi tüm kullanıcıların bilgileri bir pdf belgesinde olmalıdır")
    public void ad_soyad_ve_rol_gibi_tum_kullanicilarin_bilgileri_bir_pdf_belgesinde_olmalidir() {


    }

}
