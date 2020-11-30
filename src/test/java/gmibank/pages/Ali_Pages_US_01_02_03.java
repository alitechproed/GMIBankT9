package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Ali_Pages_US_01_02_03 {
    public Ali_Pages_US_01_02_03() {
        PageFactory.initElements(Driver.getDriver(), this);

    }

    @FindBy(id = "account-menu")
    public WebElement insanFigur;
    @FindBy(xpath = "//a[@href  = '/account/register']")
    public WebElement registerDropDown;
    @FindBy(xpath = "//input[@name='ssn']")
    public WebElement ssnTextBox;
    @FindBy(className = "invalid-feedback")
    public WebElement ssnMessage;
    @FindBy(xpath = "//*[@id='register-form']/div[1]/div")
    public WebElement ssnMessageInvalid;
    @FindBy(xpath = "//input[@name='firstname']")
    public WebElement nameTextBox;
    @FindBy(xpath = "//div[@class='invalid-feedback']")
    public WebElement nameMessageInvalid;
    @FindBy(xpath = "//input[@name='lastname']")
    public WebElement lastnameTextBox;
    @FindBy(css = "#register-form > div:nth-child(3) > div")
    public WebElement lastnameMessageInvalid;
    @FindBy(id = "address")
    public WebElement adresstextBox;
    @FindBy(id = "mobilephone")
    public WebElement mobileTextBox;
    @FindBy(xpath = "@FindBy(xpath =//div[(text() ='Your mobile phone number is invalid')]')")
    public WebElement mobileTextinvalidmessage;
    @FindBy(xpath = "//*[@id='register-form']/div[5]/div")
    public WebElement mobileinvalidmessage;
    @FindBy(xpath = "//input[@name='username']")
    public WebElement userNameTextBox;
    @FindBy(xpath = "//*[@id='register-form']/div[6]/div")
    public WebElement usernameInvalidMessage;
    @FindBy(xpath = "//input[@name='email']")
    public WebElement emailTextBox;
    @FindBy(xpath = "//div[@class='invalid-feedback']")
    public WebElement emailInvalidMessage;
    @FindBy(xpath = "//input[@name='firstPassword']")
    public WebElement firstPasswordTextBox;
    @FindBy(xpath = "//input[@name='secondPassword']")
    public WebElement secondPasswordTextBox;
    @FindBy(id = "register-submit")
    public WebElement submitButton;
    @FindBy(xpath = "//div[@role='alert']")
    public WebElement successRegisterMessage;
    @FindBy(xpath = "//div[@class='alert alert-warning fade show']")
    public WebElement registerfailMessage;
    @FindBy(xpath = "//*[@id='strengthBar']/li[5]")
    public WebElement StrongPassGreen;
    @FindBy(xpath = "//*[@id='strengthBar']/li[2]")
    public WebElement WeakPassOrange;
    @FindBy(xpath = "//span[.='Manage Accounts']")
    public WebElement manageaccount;
}
