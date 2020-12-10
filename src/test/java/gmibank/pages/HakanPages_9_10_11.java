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
    public WebElement sigInText;
    @FindBy(xpath ="//*[@name='username']")
    public WebElement userNameButonu;
    @FindBy(xpath ="//*[@name='password']")
    public WebElement passwordKutusu;
   // @FindBy(xpath = "//*[@id='login-page']/div/form/div[3]/button[2]/span")
    @FindBy(xpath = "//*[@type='submit']")
    public WebElement signInButonu;
    ////*[@id="entity-menu"]/a/span
    @FindBy(css = "#entity-menu > a > span")
    public WebElement myOperationButonu;
    @FindBy(xpath = "//*[@id='entity-menu']/div/a[1]")
    public WebElement manageCustomerButonu;
    @FindBy(id = "jh-create-entity")
    public WebElement creatNewCustomer;
    @FindBy(id= "search-ssn")
    public WebElement ssnAramaKutusu;
    @FindBy(xpath = "//*[@id='app-view-container']/div[1]/div/div/div/div[2]/div/form/div[1]/button")
    public WebElement searchButonu;
   // @FindBy(xpath = "//*[@class='Toastify__toast-body']")
    @FindBy(xpath = "//*[@class='Toastify__toast-container Toastify__toast-container--top-left toastify-container']")
    public WebElement popUpMesaj;
    // .........................................
    @FindBy(xpath = "//*[@name='firstName']")
    public WebElement firstNameCustomer;
    @FindBy(xpath = "//*[@name='lastName']")
    public WebElement lastNameCustomer;
    @FindBy(xpath = "//*[@name='middleInitial']")
    public WebElement middleInitialCustomer;
    @FindBy(xpath = "//*[@name='email']")
    public WebElement emailCustomer;
    @FindBy(xpath = "//*[@name='mobilePhoneNumber']")
    public WebElement mobilePhoneNumberCustomer;
    @FindBy(xpath = "//*[@name='zipCode']")
    public WebElement zipCodeCustomer;
    @FindBy(xpath = "//*[@name='address']")
    public WebElement addressCustomer;
    @FindBy(xpath = "//*[@name='city']")
    public WebElement cityCustomer;
    @FindBy(xpath = "//*[@name='ssn']")
    public WebElement ssnCustomer;
    @FindBy(xpath = "//*[@name='createDate']")
    public WebElement createDateCustomer;
    @FindBy(id = "tp-customer-country")
    public WebElement countryCustomer;
}
