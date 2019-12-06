const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// MY CODE \\
// Images
document.getElementById("cta-img").src="img/header-img.png";

document.getElementById("middle-img").src ="img/mid-page-accent.jpg";

const ctaText = document.querySelector(".cta-text h1")
siteContent.cta.h1 = "DOM <br> IS <br> AWESOME"
ctaText.innerHTML = siteContent.cta.h1

const buttonText = document.querySelector(".cta button");
buttonText.innerText = siteContent.cta.button

const navLinks = document.querySelectorAll("nav a");
console.log(navLinks)
navLinks[0].text = siteContent.nav["nav-item-1"]
navLinks[1].text = siteContent.nav["nav-item-2"]
navLinks[2].text = siteContent.nav["nav-item-3"]
navLinks[3].text = siteContent.nav["nav-item-4"]
navLinks[4].text = siteContent.nav["nav-item-5"]
navLinks[5].text = siteContent.nav["nav-item-6"]

const bottomHeaders = document.querySelectorAll(".text-content h4")
bottomHeaders[0].innerText = siteContent["main-content"]["features-h4"]
bottomHeaders[1].innerText = siteContent["main-content"]["about-h4"]
bottomHeaders[2].innerText = siteContent["main-content"]["services-h4"]
bottomHeaders[3].innerText = siteContent["main-content"]["product-h4"]
bottomHeaders[4].innerText = siteContent["main-content"]["vision-h4"]

const bottomPara = document.querySelectorAll(".text-content p")
bottomPara[0].innerHTML = siteContent["main-content"]["features-content"]
bottomPara[1].innerHTML = siteContent["main-content"]["about-content"]
bottomPara[2].innerHTML = siteContent["main-content"]["services-content"]
bottomPara[3].innerHTML = siteContent["main-content"]["product-content"]
bottomPara[4].innerHTML = siteContent["main-content"]["vision-content"]

const contactHeader = document.querySelector(".contact h4")
contactHeader.innerText = siteContent["contact"]["contact-h4"]

const contactPara = document.querySelectorAll(".contact p")
contactPara[0].innerText = siteContent["contact"]["address"]
contactPara[1].innerText = siteContent["contact"]["phone"]
contactPara[2].innerText = siteContent["contact"]["email"]