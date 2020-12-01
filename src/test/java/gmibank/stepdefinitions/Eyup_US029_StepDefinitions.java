package gmibank.stepdefinitions;

import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.DatabaseUtility;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import javax.sql.rowset.RowSetMetaDataImpl;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Eyup_US029_StepDefinitions {

    Connection connection;
    ResultSet resultSet;
    Statement statement;

    List<Object> allFirstName = new ArrayList<>();
    List<String> butunBilgilerList = new ArrayList<>();


    String bilgiler = "Select * from " + ConfigurationReader.getProperty("tabloName");
    ResultSet resultSetUser;
    List<String> userFirstName = new ArrayList<>();

    String ulkeAdi = "Select * from " + ConfigurationReader.getProperty("countryName");

    String eyaletAdi = "Select * from " + ConfigurationReader.getProperty("eyaletName");

    String query = "select * from tp_customer";

    @Given("database baglantisi kurulur {string} , {string} and {string}")
    public void database_baglantisi_kurulur_and(String url, String user, String password) {

        DatabaseUtility.createConnection(url,user,password);

    }

    @Given("Kullanicilara ait tum bilgileri veritabanindan alinir")
    public void kullanicilara_ait_tum_bilgileri_veritabanindan_alinir() throws SQLException {

        ResultSetMetaData userMetaData = resultSetUser.getMetaData();
        int columnCount = userMetaData.getColumnCount();

        for (int i = 1; i <= columnCount; i++) {
            System.out.println(userMetaData.getColumnName(i));
        }

        while (resultSetUser.next()) {
            String firstname = resultSetUser.getString("first_name");
            userFirstName.add(firstname);
        }

        System.out.println(userFirstName);



     //   System.out.println(DatabaseUtility.getColumnNames(query));
/*
        resultSet = statement.executeQuery(query);
        resultSet.beforeFirst();
        String degerler= resultSet.getString(2);
        while (resultSet.next()){
            System.out.println(degerler);
        }


        resultSet = statement.executeQuery(query);
        ResultSetMetaData rsdm = resultSet.getMetaData();
        int columnSayisi = rsdm.getColumnCount();
        List<String> columnListesi = new ArrayList<>();
        System.out.println("Column sayisi...: " + columnSayisi);
        for (int i=1; i<=columnSayisi; i++){
            columnListesi.add(rsdm.getColumnName(i));
        }
        System.out.println(columnListesi);

*/

    }

    @Then("Kullanicilara ait bilgileri dogrular")
    public void kullanicilara_ait_bilgileri_dogrular() {

    }


    // **********************************************************************
    // TC_02
    @Given("Tum ulkelerin bilgileri veritabanindan alinir")
    public void tum_ulkelerin_bilgileri_veritabanindan_alinir() {


    }

    @Then("Tum ulkelerin bilgileri dogrulanir")
    public void tum_ulkelerin_bilgileri_dogrulanir() {

    }


    //*************************************************************************
    // TC_03
    @Given("ABD ile ilgili tum eyaletler veritabanindan alinir")
    public void abd_ile_ilgili_tum_eyaletler_veritabanindan_alinir() {


    }

    @Then("ABD ile ilgili tum eyaletler dogrulanir")
    public void abd_ile_ilgili_tum_eyaletler_dogrulanir() {

    }
}
