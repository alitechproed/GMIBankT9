package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Aykut_Pages_US_15 {
    public Aykut_Pages_US_15(){
        PageFactory.initElements(Driver.getDriver(),this);

    }
    @FindBy( xpath = "//*[@id='account-menu']/a" )
    public WebElement simge;
    @FindBy( xpath = "//*[@id='login-item']/span" )//*[@id="password"]
    public WebElement signin;
    @FindBy( xpath = "//*[@id='username']" )
    public WebElement username;
    @FindBy( xpath = "//*[@id='password']")
    public WebElement password;
    @FindBy( xpath = "//*[@id='login-page']/div/form/div[3]/button[2]")
    public WebElement signinButonu;
    @FindBy( xpath = "//*[@id='entity-menu']/a")
    public WebElement myoperation;
    @FindBy( xpath = "//*[@id='entity-menu']/div/a[2]/span")
    public WebElement manegeaccount;
    @FindBy( xpath = "//*[@id='app-view-container']/div[1]/div/div/div/div/div/table/thead/tr/th[3]/span")
    public WebElement balance;
    @FindBy( xpath = "//*[@id='app-view-container']/div[1]/div/div/div/div/div/table/thead/tr/th[4]/span" )
    public WebElement accounttypes;
    @FindBy( xpath = "//*[@id='app-view-container']/div[1]/div/div/div/div/div/table/tbody/tr[1]/td[9]/div/a[1]/span/span" )
    public WebElement view;
    @FindBy( xpath = "//*[@id='app-view-container']/div[1]/div/div/div/div/h2" )
    public WebElement islem;


}
