package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.w3c.dom.html.HTMLInputElement;

public class HakanPages_9_10_11 {


    public HakanPages_9_10_11(){
     PageFactory.initElements(Driver.getDriver(), this);

}

    @FindBy(id = "account-menu")
    public WebElement insanResmi;
    @FindBy(id = "login-item")
    public WebElement sigInButonu;
    @FindBy(id = "username")
    public WebElement userNameButonu;
    @FindBy(id = "password")
    public WebElement passwordKutusu;

    @FindBy(xpath = "//*[@id='login-page']/div/form/div[3]/button[2]/span")
    public WebElement submitSignInButonu;
    ////*[@id="entity-menu"]/a/span
    @FindBy(css = "#entity-menu > a > span")
    public WebElement myOperationButonu;
    @FindBy(xpath = "//*[@id='entity-menu']/div/a[1]")
    public WebElement manageCustomerButonu;


    @FindBy(id = "jh-create-entity")
    public WebElement creatNewCustomer;
    @FindBy(id= "search-ssn")
    public WebElement ssnAramaKutusu;
    @FindBy(xpath = "//*[@id=\"app-view-container\"]/div[1]/div/div/div/div[2]/div/form/div[1]/button")
    public WebElement searchButonu;

    @FindBy(xpath = "//*[@class='Toastify__toast-body']")
    public WebElement popUpMesaj;

    @FindBy(name = "//*[@name='firstName']")
    public WebElement firstName;
    @FindBy(name = "//*[@name='lastName']")
    public WebElement lastName;


}
