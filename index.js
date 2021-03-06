const axios = require("axios");
const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const getHTML = require("html-get");
// const url = "https://www.indeed.com/jobs?q=javascript&l=New+York%2C+NY";

const url = "https://sfbay.craigslist.org/search/sof";

const scrapeSample = {
  title: "Technical Autonomous Vehicle Trainer",
  description:
    "We're the driverless car company. We're building the world's best autonomous vehicles to safely connect people to the places, things, and experiences they care about.",
  datePosted: new Date("2018-07-13"),
  url: "https://sfbay.craigslist.org/sfc/sof/d/technical-autonomous-vehicle/6642626746.html",
  hood: "(SOMA / south beach)",
  address: "1201 Bryant St.",
  compensation: "23/hr",
};

const scrapeResults = [];

async function scrapeJobHeader() {
  try {
    const html = await axios.get(url);
    //  console.log(html.data);
    const $ = await cheerio.load(html.data);
    $(".result-info").each((i, el) => {
      const title = $(el).find(".result-title");
      const titiledesc = title.text();
      const urljob = $(el).find(".result-title").attr("href");
      const jobtime = new Date($(el).find(".result-date").attr("datetime"));
      const scrapeResult = { titiledesc, urljob, jobtime };
      scrapeResults.push(scrapeResult);
      console.log(scrapeResults);
    });
  } catch (err) {
    console.error(err);
  }
}

scrapeJobHeader();
