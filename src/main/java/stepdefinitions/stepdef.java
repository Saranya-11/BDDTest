package stepdefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class stepdef {
	WebDriver driver;
	@Given ("^Launch the demosite URL$")
	public void Launch()
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\DELL\\Desktop\\Jar\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://demo.automationtesting.in/");
	}
	@Then ("^click on Skip Sign In button$")
	public void Skip()
	{
		driver.findElement(By.id("btn2")).click();
		driver.navigate().refresh();
	}
	@Then ("^Enter the \"(.*)\" and \"(.*)\"$")
	public void name(String FirstName,String LastName)
	{
		driver.findElement(By.xpath("//input[@placeholder='First Name']")).sendKeys(FirstName);
		driver.findElement(By.xpath("//input[@placeholder='Last Name']")).sendKeys(LastName);
	}
	@And ("^Enter the Emailaddress as \"(.*)\"$") 
	public void email(String Emailaddress)
	{
		driver.findElement(By.xpath("//input[@type='email']")).sendKeys(Emailaddress);
	}
	@Then ("^Enter the Phone as \"(.*)\"$")
	public void phone(String Phone)
	{
		driver.findElement(By.xpath("//input[@type='tel']")).sendKeys(Phone);	
	}
	@Then ("^Select the Gender as \"(.*)\"$")
	public void gender(String Gender)
	{
		List<WebElement> Genbutton=driver.findElements(By.xpath("//input[@name='radiooptions']"));
		  for(WebElement temp:Genbutton)
			 {
			   if(temp.getAttribute("Value").equalsIgnoreCase(Gender))
			   {
				   temp.click();
			   }
			 }
	}
	@And ("^Select the Country as \"(.*)\"$")
	public void country(String Country)
	{
		Select obj1 = new Select(driver.findElement(By.xpath("//select[@id='countries']")));
		obj1.selectByVisibleText(Country);
	}
	
	
}
