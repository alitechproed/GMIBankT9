package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Hatice_Pages_US_13 {

    public Hatice_Pages_US_13(){

        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(linkText = "Sign in")
    public WebElement signinSimge;

    @FindBy(xpath = "//input[@name='username']")
    public WebElement username;

    @FindBy(xpath = "//input[@name='password']")
    public WebElement password;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement signinButton;

    @FindBy(xpath = "//*[.='My Operations']")
    public WebElement myOperations;

    @FindBy(xpath = "//*[.='Manage Accounts']")
    public WebElement manageAccounts;

    @FindBy(xpath = "//*[.='Create a new Account']")
    public WebElement createNewAccount;

    @FindBy(xpath = "//input[@name='description']")
    public WebElement description;

    @FindBy(xpath = "//input[@name='balance']")
    public WebElement balance;

    @FindBy(xpath = "//select[@name='accountType']")
    public WebElement accountType;

    @FindBy(xpath = "//select[@name='accountStatusType']")
    public WebElement accountStatusType;

    @FindBy(xpath = "//select[@name='employee.id']")
    public WebElement employee;

    @FindBy(xpath = "(//div[@class='invalid-feedback'])[1]")
    public WebElement errorMesaji;

    @FindBy(xpath = "//input[@name='description']")
    public WebElement invalid;

    @FindBy(xpath = "//input[@name='balance']")
    public WebElement invalid2;

    @FindBy(id = "save-entity")
    public WebElement saveButton;
}
