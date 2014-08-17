var dot = ".";
var at = "@";
var domain1 = "com";
var domain2 = "gmail";
var firstName = "milan";
var lastName = "fort";
var address = firstName + dot + lastName + at + domain2 + dot + domain1;

document.write("<a href='mai" + "lto:" + address + "'>" + address + "</a>");
