import {browser, element, by} from 'protractor';
import {expand} from "rxjs/operator/expand";

describe('Projectdetails e2e', () => {

  beforeAll(() => {
    browser.get('http://localhost:8100/');

    let login = new Login;
    login.password.sendKeys("testje");
    login.username.sendKeys("vhsiebe@gmail.com");
    login.loginbtn.click();
    browser.sleep(2000);

    var demo = element.all(by.className("input-wrapper"));
    demo.click();
  });

  it('user should see his projectdetails', function () {
    var cards = element.all(by.css("ion-card"));
    cards.count().then(function (amount) {
      expect(amount).toBeGreaterThan(0);
    });
  });

  it('user should see his indiegogo backers graph', function () {
    var backersCard = element(by.className("backers"));
    expect(backersCard.isPresent()).toBe(true);
    backersCard.click();
    var canvas = element(by.css("canvas"));
    expect(canvas.isPresent()).toBe(true);
  });

  it('user should see his indiegogo perks graph', function () {
    var perksCard = element(by.className("perks"));
    expect(perksCard.isPresent()).toBe(true);
    perksCard.click();
    var canvas = element(by.css("canvas"));
    expect(canvas.isPresent()).toBe(true);
  });

  it('user should see his indiegogo funds graph', function () {
    var fundsCard = element(by.className("funds"));
    expect(fundsCard.isPresent()).toBe(true);
    fundsCard.click();
    var canvas = element(by.css("canvas"));
    expect(canvas.isPresent()).toBe(true);
  });

  it('user should see his twitter followers graph', function () {
    var followers = element(by.className("twitterFollowers"));
    expect(followers.isPresent()).toBe(true);
    followers.click();
    var canvas = element(by.css("canvas"));
    expect(canvas.isPresent()).toBe(true);
  });

  it('user should see his twitter favorites graph', function () {
    var favorites = element(by.className("twitterFavsGraph"));
    expect(favorites.isPresent()).toBe(true);
    favorites.click();
    var canvas = element(by.css("canvas"));
    expect(canvas.isPresent()).toBe(true);
  });

  it('user should see his twitter retweets graph', function () {
    var retweets = element(by.className("twitterRetweetsGraph"));
    expect(retweets.isPresent()).toBe(true);
    retweets.click();
    var canvas = element(by.css("canvas"));
    expect(canvas.isPresent()).toBe(true);
  });

  it('user should see his instagram followers graph', function () {
    var instagramfollowers = element(by.className("instaFollowers"));
    expect(instagramfollowers.isPresent()).toBe(true);
    instagramfollowers.click();
    var canvas = element(by.css("canvas"));
    expect(canvas.isPresent()).toBe(true);
  });

  it('user should see his facebook likes graph', function () {
    var likes = element(by.className("fbLikes"));
    expect(likes.isPresent()).toBe(true);
    likes.click();
    var canvas = element(by.css("canvas"));
    expect(canvas.isPresent()).toBe(true);
  });

  it('user should see his facebook posts graph', function () {
    var posts = element(by.className("fbPostGraph"));
    expect(posts.isPresent()).toBe(true);
    posts.click();
    var canvas = element(by.css("canvas"));
    expect(canvas.isPresent()).toBe(true);
  });

  it('user should see his facebook post table', function () {
    var post = element(by.className("fbPostTable"));
    expect(post.isPresent()).toBe(true);
    post.click();
    var canvas = element(by.css("canvas"));
    expect(canvas.isPresent()).toBe(true);
  });

  it('user should see his projectmembers', function () {
    var members = element(by.className("members"));
    expect(members.isPresent()).toBe(true);
    members.click();

    var ptags = element.all(by.css("p"));
    ptags.count().then(function (amount) {
      expect(amount).toBeGreaterThan(0);
    });
  });

  it('user could add a member', function () {
    var members = element(by.className("members"));
    members.click();

    var ptags = element.all(by.css("p"));
    var memberCount;
    ptags.count().then(function (amount) {
      memberCount = amount;
    });


    var input = element(by.className("text-input"));
    input.sendKeys("smitsrob2242@gmail.com");
    element(by.buttonText("Add Member")).click();

    var ptags = element.all(by.css("p"));
    ptags.count().then(function (amount) {
      expect(amount).toBe(memberCount + 1);
    });
  });
});


let Login = function () {
  let btnLogin = element(by.className('btnLogin'));
  btnLogin.click();
  browser.sleep(1000);

  this.password = element(by.name("password"));
  this.username = element(by.name("username"));
  this.loginbtn = element(by.className("auth0-lock-submit"));
};
module.exports = Login;
