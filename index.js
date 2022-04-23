const request = require("request-promise");
const cheerio = require("cheerio");

const url = "https://sfbay.craigslist.org/d/software-qa-dba-etc/search/sof";

const scrapeSample = {
  title: "Full Stack Developer - Intern",
  description:
    "We are building an advanced financial and money management platform. We are looking for a Software Development intern to join our team. This is a paid internship with a likelihood to convert into a full-time opportunity.",
  datePosted: new Date("2022-04-22 16:04"),
  url: "https://sfbay.craigslist.org/sby/sof/d/san-jose-full-stack-developer-intern/7474691802.html",
  hood: "(SOMA / south beach)",
  address: "1201 Bryant St.",
  compensation: "23/hr",
};
async function getData() {
  try {
    const htmlResult = await request.get(url);
    const $ = cheerio.load(htmlResult);
    console.log($.body);
  } catch (error) {
    console.log(error);
  }
}

getData();
