const services = document.getElementsByClassName('service-card');
const droneText = document.getElementById('drone-title')
const droneDesc = document.getElementById('drone-desc')
const serviceColumn = document.getElementById('service-column')
const hoverHandler = () => {
    for(const service of services)
    {
        if(service.matches(":hover"))
        {
            droneText.innerText = service.innerText
            droneDesc.innerText = textObject[service.innerText]
        }
    }
}
const textObject = {
    "SOCIAL MEDIA MARKETING": "Text1",
    "INFLUENCER CAMPAIGNS":"Text2",
    "COLLABORATIONS & ACQUISITION MARKETING": "Text3",
    "ALPHA CALLS": "Text4",
    "DISCORD GROWTH": "Text5",
    "COPYWRITING": "Text6",
    "DEVELOPMENT": "Text7",
    "B2B CAMPAIGNS": "Text8",
    "GRAPHIC DESIGN & DIGITAL ILLUSTRATION": "Text9",
    "TWITTER SPACE PACKAGES & HOSTING": "Text10",
    "STRATEGY & ADVISORY": "Text11",
    "PPC MARKETING":"Text12"
}
serviceColumn.addEventListener('mouseover', hoverHandler)
