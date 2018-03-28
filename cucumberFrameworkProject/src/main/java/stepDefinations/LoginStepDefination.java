package stepDefinations;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefination {
	public WebDriver driver;

	@Given("^user is already on login page$")
	public void user_is_already_on_login_page() {
		
		driver= new FirefoxDriver();
		System.out.println("FireFox Browser is opened");
		driver.get("https://www.freecrm.com");
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.manage().window().maximize();

	}

	@When("^title of the page is Free CRM$")
	public void title_of_the_page_is_Free_CRM() {
		String title = driver.getTitle();
		System.out.println("Title of before login is ::" + title);
		Assert.assertEquals("#1 Free CRM for Any Business: Online Customer Relationship Software", title);
	}

	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username,String password) {
		driver.findElement(By.xpath("html/body/div[2]/div/div[3]/form/div/input[1]")).sendKeys(username);
		driver.findElement(By.xpath("html/body/div[2]/div/div[3]/form/div/input[2]")).sendKeys(password);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_buttons() {
		driver.findElement(By.xpath("html/body/div[2]/div/div[3]/form/div/div/input")).click();
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page()throws Exception {
		String title = driver.getTitle();
		System.out.println("Title of the home page is ::" + title);
		Assert.assertEquals("CRMPRO", title);
		
	}
	@Then("^user moves to new contact page$")
	public void user_moves_to_new_contact_page()throws Exception{
		driver.switchTo().frame("mainpanel");
		Actions clk=new Actions(driver);
		
		//WebElement contacts=;
		WebElement newContact=driver.findElement(By.xpath("html/body/table[1]/tbody/tr[3]/td[1]/div/div/ul/li[4]/ul/li[1]/a"));
		clk.moveToElement(driver.findElement(By.xpath("html/body/table[1]/tbody/tr[3]/td[1]/div/div/ul/li[4]/a"))).build().perform();
		newContact.click();
	}
	
	@Then("^user enters contacts details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void user_enters_firstname_and_lastname_and_position(String firstname,String lastname,String position){
		WebElement firstName=driver.findElement(By.xpath("html/body/table[2]/tbody/tr[1]/td[2]/table/tbody/tr/td/fieldset/form/table/tbody/tr[2]/td[1]/table/tbody/tr[2]/td[2]/input"));
		WebElement lastName=driver.findElement(By.xpath("html/body/table[2]/tbody/tr[1]/td[2]/table/tbody/tr/td/fieldset/form/table/tbody/tr[2]/td[1]/table/tbody/tr[4]/td[2]/input"));
		WebElement Position=driver.findElement(By.xpath("html/body/table[2]/tbody/tr[1]/td[2]/table/tbody/tr/td/fieldset/form/table/tbody/tr[2]/td[1]/table/tbody/tr[9]/td[2]/input"));
		
		firstName.sendKeys(firstname);
		lastName.sendKeys(lastname);
		Position.sendKeys(position);
	}
	
	@Then("^clicks on save button$")
	public void clicks_on_save_button(){
		WebElement Savebutton=driver.findElement(By.xpath("html/body/table[2]/tbody/tr[1]/td[2]/table/tbody/tr/td/fieldset/form/table/tbody/tr[1]/td/input[2]"));
		Savebutton.click();
	}
	@Then("^close the browser$")
	public void close_the_browse(){
		driver.close();
	}
}
