package gmibank.stepdefinitions;

import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.DatabaseUtility;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class Eyup_US029_StepDefinitions {

    ResultSet resultSetName;
    ResultSet resultSetCountry;
    ResultSet resultSetState;


    List<String> namesList = new ArrayList<>();
    List<String> countryList = new ArrayList<>();
    List<String> stateList = new ArrayList<>();


   // String query = "SELECT * FROM public.jhi_user";
  // String queryCountry = "SELECT * FROM public.tp_country";
  //  String queryState = "SELECT * FROM public.tp_state";

   String query = "SELECT * FROM " + ConfigurationReader.getProperty("userTablo");
    String queryCountry = "SELECT * FROM " + ConfigurationReader.getProperty("countryTablo");
    String queryState = "SELECT * FROM " + ConfigurationReader.getProperty("stateTablo");

    @Given("database baglantisi kurulur {string} , {string} and {string}")
    public void database_baglantisi_kurulur_and(String url, String user, String password) {

        DatabaseUtility.createConnection(url,user,password);
        //     connection = DriverManager.getConnection(url,user,password);
        System.out.println("DataBase Baglantisi kuruldu...");


    }

    @Given("Kullanicilara ait tum bilgileri veritabanindan alinir")
    public void kullanicilara_ait_tum_bilgileri_veritabanindan_alinir() throws Exception {

        /*
        DatabaseUtility.executeQuery(query);

            System.out.println("Row sayisi : " + DatabaseUtility.getRowCount());
      //  System.out.println("Row HasMap : " + DatabaseUtility.getQueryResultMap(query));
        //  System.out.println("Row Map : "+ DatabaseUtility.getRowMap(query));

         */
        System.out.println("*********** TC 01 Calisiyor ***********");

        System.out.println("colum Name :" + DatabaseUtility.getColumnNames(query));
        //   String userBilgilerQuery = "SELECT * FROM public.jhi_user";
        resultSetName = DatabaseUtility.getResultSet(query);

        while (resultSetName.next()){
            String userNames = resultSetName.getString("first_name");
            namesList.add(userNames);
        }
        System.out.println(" ");
        System.out.println(namesList);


    }

    @Then("Kullanicilara ait bilgileri dogrular")
    public void kullanicilara_ait_bilgileri_dogrular() throws SQLException {


        String userFirstnameQuery = "SELECT first_name FROM public.jhi_user";
        resultSetName = DatabaseUtility.getResultSet(userFirstnameQuery);
        List<String> actualFirstName = new ArrayList<>();

        while (resultSetName.next()) {
            String firstName = resultSetName.getString("first_name");
            actualFirstName.add(firstName);
        }

        Assert.assertEquals(namesList,actualFirstName);

        System.out.println("");
        System.out.println("*********** TC 01 Bitti ***********");
        System.out.println("");
        System.out.println("");

    }


    // **********************************************************************
    // TC_02
    @Given("Tum ulkelerin bilgileri veritabanindan alinir")
    public void tum_ulkelerin_bilgileri_veritabanindan_alinir() throws SQLException {

        System.out.println("*********** TC 02 Calisiyor ***********");
        System.out.println("colum Name :" + DatabaseUtility.getColumnNames(queryCountry));
     //   String userCountryQuery = "SELECT * FROM public.tp_country";
        resultSetCountry = DatabaseUtility.getResultSet(queryCountry);

        while (resultSetCountry.next()){
            String namesCountry = resultSetCountry.getString("name");
            countryList.add(namesCountry);
        }
        System.out.println(countryList);

    }

    @Then("Tum ulkelerin bilgileri dogrulanir")
    public void tum_ulkelerin_bilgileri_dogrulanir() throws SQLException {

        String userCountryQuery = "SELECT name FROM public.tp_country";
        resultSetCountry = DatabaseUtility.getResultSet(userCountryQuery);
        List<String> actualCountryName = new ArrayList<>();

        while (resultSetCountry.next()) {
            String countryName = resultSetCountry.getString("name");
            actualCountryName.add(countryName);
        }

        Assert.assertEquals(countryList,actualCountryName);

        System.out.println("");
        System.out.println("*********** TC 02 Bitti ***********");
        System.out.println("");

    }


    //*************************************************************************
    // TC_03
    @Given("{string} ile ilgili tum eyaletler veritabanindan alinir")
    public void abd_ile_ilgili_tum_eyaletler_veritabanindan_alinir(String state) throws SQLException {


        System.out.println("*********** TC 03 Calisiyor ***********");
        System.out.println("colum Name :" + DatabaseUtility.getColumnNames(queryState));
        String userStateQuery = "SELECT name FROM public.tp_state";
        resultSetState = DatabaseUtility.getResultSet(userStateQuery);

        int rowSayisi = 0;

        while (resultSetState.next()){
            String namesState = resultSetState.getString("name");
            if (namesState.equals(state)) {
                stateList.add(namesState);
                rowSayisi++;
            }
        }
        System.out.println(stateList);
        System.out.println("Row Sayisi : " + rowSayisi);
        System.out.println("*************");
     //   System.out.println(stateList.contains(state));
    //    Assert.assertTrue(stateList.contains(state));


    }

    @Then("{string} ile ilgili tum eyaletler dogrulanir")
    public void abd_ile_ilgili_tum_eyaletler_dogrulanir(String state) {

        System.out.println(stateList.contains(state));
        Assert.assertTrue(stateList.contains(state));

        DatabaseUtility.closeConnection();
        System.out.println(" ");
        System.out.println("DataBase baglantisi kapatildi");

    }
}
