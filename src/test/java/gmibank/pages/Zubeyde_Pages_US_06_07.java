package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class Zubeyde_Pages_US_06_07 {

    public Zubeyde_Pages_US_06_07(){

        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//a[@href='#']")
    public WebElement ikonButton;

    @FindBy(xpath = "//span[.='Sign in']")
    public WebElement SignIn1;

    @FindBy(id = "username")
    public WebElement userTextbox;

    @FindBy(id = "password")
    public WebElement passwordTextbox;

    @FindBy(xpath = "(//span[.='Sign in'])[3]")
    public WebElement signInButton;

     //@FindBy(xpath = "//*[@id='account-menu']")
     // public WebElement userUserButton;

    @FindBy(xpath = "//span[.='User Info']")  //  "//a[@href='/account/settings']"
    public WebElement userInfoButton;

    @FindBy(id = "firstName")
    public WebElement firstNameTextBox;

    @FindBy(id = "lastName")
    public WebElement lastNameTextBox;

    @FindBy(id = "email")
    public WebElement emailTextBox;

    @FindBy(xpath = "//div[.='This field is invalid']")
    public WebElement errorMessage;

    @FindBy(xpath = "//span[.='Save']")
    public WebElement saveButton;

    @FindBy(id = "langKey")
    public WebElement diller;

   //  @FindBy(id = "langKey")
    //public WebElement langueDropdown;




}
