package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Gulser_pages_US_04_05 {

    public Gulser_pages_US_04_05(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "//a[@aria-haspopup='true']")
    public WebElement loginButton;
    @FindBy(xpath= "//span[.='Sign in']")
    public WebElement signInButton;
    @FindBy(xpath = "//input[@name='username']")
    public WebElement username;
    @FindBy(xpath = "//input[@name='password']")
    public WebElement password;
    @FindBy(xpath = "(//span[.='Sign in'])[3]")
    public WebElement sigIn;
    @FindBy(xpath = "//*[text()=' Please check your credentials and try again.']")
    public WebElement errorMessage;
    @FindBy(xpath = "(//span)[21]")
    public WebElement cancel;
    @FindBy(xpath = "//span[.='Did you forget your password?']")
    public WebElement passwordForget;
    @FindBy(xpath = "//span[.='Register a new account']")
    public WebElement registerNewAcount;
    @FindBy(xpath = "//span[.='Home']")
    public WebElement homeHeader;
    @FindBy(xpath = "//input[@name='email']")
    public WebElement emailCheckBox;
    @FindBy(xpath = "//span[.='Reset password']")
    public WebElement resetPassword;
    @FindBy(xpath = "//div[@role='alert']")
    public WebElement resetPasswordAlert;
    @FindBy(xpath = "//span[.='Registration']")
    public WebElement verifyRegistration;
}
