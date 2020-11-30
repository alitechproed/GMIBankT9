package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class Eyup_US012_Page {

    public Eyup_US012_Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    // TC01
    @FindBy(id = "account-menu")
    public WebElement sagIkon;
    @FindBy(id = "login-item")
    public WebElement signInText;
    @FindBy(xpath ="//*[@name='username']")
    public WebElement userName;
    @FindBy(xpath ="//*[@name='password']")
    public WebElement password;
    @FindBy(xpath = "//*[@type='submit']")
    public WebElement signIn;
    @FindBy(id = "entity-menu")
    public WebElement myOperation;
    @FindBy(xpath = "//*[@href='/tp-customer']")
    public WebElement manageCustomer;

  //  @FindBy(xpath = "//*[@id=\"app-view-container\"]/div[1]/div/div/div/div[1]/div/table/tbody")
 //   public List<WebElement> bilgiler;

    @FindBy(xpath = "//*[@id=\"app-view-container\"]/div[1]/div/div/div/div[1]/div/table")
    public List<WebElement> bilgiler;


    // ******** @@@@@@@@@@@@ ********************************
    // TC02  -- TC03
    @FindBy(xpath = "//*[@class='btn btn-info btn-sm']")
    public WebElement viewButtonu;
    @FindBy(xpath = "//*[@class='btn btn-primary btn-sm']")
    public WebElement editButtonu;


    // **********************************************
    //TC04
    @FindBy(xpath = "//*[@name='id']")
    public WebElement id;
    @FindBy(xpath = "//*[@name='firstName']")
    public WebElement firstName;
    @FindBy(xpath = "//*[@name='lastName']")
    public WebElement lastName;
    @FindBy(xpath = "//*[@name='middleInitial']")
    public WebElement middleName;
    @FindBy(xpath = "//*[@name='email']")
    public WebElement eMail;
    @FindBy(xpath = "//*[@name='mobilePhoneNumber']")
    public WebElement mobilePhoneNumber;
    @FindBy(xpath = "//*[@name='phoneNumber']")
    public WebElement phoneNumber;

    @FindBy(xpath = "//*[@name='zipCode']")
    public WebElement zipCode;
    @FindBy(xpath = "//*[@name='address']")
    public WebElement address;
    @FindBy(xpath = "//*[@name='city']")
    public WebElement city;
    @FindBy(xpath = "//*[@name='ssn']")
    public WebElement ssn;
    @FindBy(id = "tp-customer-createDate")
    public WebElement createDate;

    @FindBy(xpath = "//*[@value='18906']")
    public WebElement country;
    @FindBy(xpath = "//*[@name='state']")
    public WebElement state;
    @FindBy(xpath = "//*[@name='user.id']")
    public WebElement userId;
    @FindBy(id = "tp-customer-account") // bu bir dropdown.. ona göre işlem yapmak lazım. sendkeys ile olmaz, seçim yapılması lazım
    public WebElement account;
    @FindBy(xpath = "//*[@name='zelleEnrolled']")
    public WebElement zelleEnrolled;
    @FindBy(id = "save-entity")
    public WebElement save;

    @FindBy(xpath = "//*[@class='Toastify__toast-container Toastify__toast-container--top-left toastify-container']")
    public WebElement saveOnay;


    //**********************************************************
    //TC05
    @FindBy(xpath = "//*[@id='app-view-container']/div[1]/div/div/div/div[1]/div/table/tbody/tr[1]/td[10]/div/a[3]")
  //  @FindBy(xpath = "/html/body/div/div/div/div[3]/div[1]/div/div/div/div[1]/div/table/tbody/tr[1]/td[10]/div/a[3]/span/span")
    public WebElement deleteVarMi;

    @FindBy(xpath = "//*[@class='modal-content']")
    public WebElement uyariMesaji;

    @FindBy(id = "jhi-confirm-delete-tPCustomer")
    public WebElement deleteButtonu;

    @FindBy(xpath = "//*[@id='root']/div/div/div[1]/div")
    public WebElement deleteMesaji;



}

