package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Zeynep_Pages_US_08_14 {

    public Zeynep_Pages_US_08_14(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//a[@aria-haspopup='true']")
    public WebElement loginButton;
    @FindBy(xpath= "//a[@id='login-item']")
    public WebElement signInButton;
    @FindBy(xpath = "//input[@name='username']")
    public WebElement username;
    @FindBy(xpath = "//input[@name='password']")
    public WebElement password;
    @FindBy(xpath = "//button[@type='submit']")
    public WebElement sigIn;
   // @FindBy(xpath = "//span[.='User99 User']")
    //public WebElement User99;
   // @FindBy(xpath = "//span[.='User user']")
    //public WebElement Useruser;
    @FindBy(xpath = "(//a[@href='#'])[2]")
    public WebElement isimSoyisim;
    @FindBy(xpath = "//span[.='Password']")
    public WebElement Password;
    @FindBy(xpath = "//input[@name='currentPassword']")
    public WebElement currentpassword;
    @FindBy(xpath = "//input[@name='newPassword']")
    public WebElement newpassword;
    @FindBy(xpath = "//*[@id='strengthBar']")
    public WebElement Passwordstrenght;
    @FindBy(xpath = "//*[@id='strengthBar']/li[2]")
    public WebElement strenghtbarorange;
    @FindBy(xpath = "//a[@href='/logout']")
    public WebElement signout;
    //@FindBy(xpath = "(//a[@class='dropdown-item'])[5]")
    //public WebElement signout;
    @FindBy(xpath = "//input[@id='confirmPassword']")
    public WebElement confirmPasswordBox;
    @FindBy(xpath = "//button[@type='submit']")
    public WebElement saveButton;
    @FindBy(xpath = "//strong[.='Password Changed']")
    public WebElement passwordChanged;
    @FindBy(xpath = "//*[@id='strengthBar']/li[4]")
    public WebElement strenghtbargreen;
    @FindBy(xpath = "//input[@name='newPassword']")
    public WebElement newpassword2;
    @FindBy(xpath = "//input[@name='newPassword']")
    public WebElement newpassword3;
    @FindBy(xpath = "//input[@name='newPassword']")
    public WebElement newpassword4;
    @FindBy(xpath = "//*[@id='strengthBar']/li[4]")
    public WebElement strenghtbarGreen;
    @FindBy (xpath = "(//a[@href='/login'])[2]")
    public WebElement signinagain;
   // @FindBy (xpath = "//div[@class='alert alert-danger fade show']")
   // public WebElement failedsignin;
    @FindBy(xpath = "//div[@class='modal fade show']")
    public WebElement notfound;


    @FindBy (xpath = "//span[.='My Operations']")
    public WebElement myoperations;
    @FindBy(xpath = "//a[@id='jh-create-entity']")
    public WebElement newaccount;
    @FindBy(xpath = "//input[@name='createDate']")
    public WebElement createdate;
    @FindBy(xpath = "//span[.='Manage Accounts']")
    public WebElement manageaccount;
    @FindBy(xpath = "//input[@name='closedDate']")
    public WebElement closedate;
    @FindBy(xpath = "//select[@name='employee.id']")
    public WebElement employee;
    @FindBy(xpath = "//span[.='Back']")
    public WebElement BackButton;











}
