var portfolio = TAFFY([
    {
        name: "Ads for Dagen@IFI",
        description: "In need for ads to promote the largest IT-career day in Oslo, I made som ads for them to be displayed in Computerworld.",
        type: "Graphic",
        image: "img/dagen.png"
    },
    {
        name: "Business cards for Cloud Solutions (CS)",
        description: "In need of a new layout for the business, I started working on a new design strategy for all the marketing materials for CS. The business cards were a part of the more minimal approach with a bit toned-down colours.",
        type: "Graphic",
        image: "img/businesscards.png"
    },
    {
        name: "Rollup for CS",
        description: "I designed a rollup that can be used at different types of events, highlighting the most important aspects of CS.",
        type: "Graphic",
        image: "img/rollup.png"
    },
    {
        name: "Website for AGS Forsikring",
        description: "A long time customer of Cloud Insurance needed a new website to draw more attention to their business. I created wireframes in Sketch before I tested the design out on colleagues. I ended up developing the website in the lightweight CMS Grav using Twig and CSS. In the prototyping-phase, I relied heavily on paperbased wireframes.",
        type: "Web",
        image: "img/ags.jpg"
    },
    {
        name: "Trettifem.no",
        description: "Trettifem is the number of representatives in the student parlament at the University of Oslo. Me and a friend wanted more transparency in the student environment, and created a website to see which student parties who voted for what causes.",
        type: "Web",
        image: "img/trettifem.jpg"
    },
    {
        name: "Designs for iNext",
        description: "A large insurance company in the states wanted a new flow for onboarding users. I started creating flows for how the user would go through the registration and payment process, before testing this out on colleagues. I then used Sketch for the graphical bit, and Invision in order to let both the customers and the others at the office test the design out. After the implementation of my design, twice as many signed up for an insurance in the first month.",
        type: "Web",
        image: "img/inext.jpg"
    },
    {
        name: "HTTP2-push.io",
        description: "A friend of mine couldn't find a way to test his http2-push implementation, so we made one together. I designed it with a minimalistic mindset - focusing on the most important aspect of the service. I spent a lot of time perfecting the SEO of the website, and we now appear on top of Google if you search for 'http2 push test'.",
        type: "Web",
        image: "img/http2push.jpg"
    },
    {
        name: "Leader for Navet (2017-2018)",
        description: "With around 50 events per year, Navet is the largest career-oriented organisation at the University of Oslo. I'm responsible for the day-to-day operations, and about 25 people involved in Navet.",
        type: "Organisation",
        image: "img/navet.jpg"
    },
    {
        name: "The Greenphones project",
        description: "In one of my bachelor courses, I worked with a company called Greenphones, and three other students. We went through an extensive design process, which ended up with a complete redesign for the client. We used the rapid protoyping methodology, and methods such as observation, expert-evaluations, gerilja testing, GIGA-mapping and a lot of user testing.",
        link: "./greenphones-rapport.pdf",
        type: "Interaction design",
        image: "img/greenphones.png"
    },
    {
        name: "Board member for Output (2017-2018)",
        description: "Me and a couple of friends got together and started publishing a magazine at the institute for informatics, where we wanted to discuss the general student life, and bring some entertainment to the students lunch. I wrote articles and was responsible for getting people involved and join the 'newsroom'.",
        type: "Organisation",
        image: "img/output.jpg"
    },
    {
        name: "UX internship @ Cisco",
        description: "In the summer of 2017 I worked at Cisco Norway as a UX intern. My goal was to create a framework for implementation of third-party apps. Me and a M.Sc student did interviews and evaluation of the prototypes made, and presented it all in front of the Cisco scientists.",
        type: "Internship",
        image: "img/cisco.png"
    },
    {
        name: "Steinerhøyskolen",
        description: "Working together with a graphic designer, I developed much of Steinerhøyskolens website, and did a lot of wordpress-debugging, tweaking, and development in order for the website to be as the specified design.",
        type: "Web",
        image: "img/steiner.png"
    },
    {
        name: "Board member for SVFF (2017)",
        description: "I was a board member in 2017 for the faculty pub U1 at the University of Oslo. I was responsible for a group of 10 people who helped me arrange debates and other political and cultural events.",
        type: "Organisation",
        image: "img/u1.jpg"
    },
    {
        name: "The 'panteboks' project",
        description: "My first interaction design project was completely open, with the only specification being that we had to use an Arduino in the functionality. We ended up creating a bottle-collector to be placed in various places around Oslo. People could drop a bottle down, and select a charitable organisation to give the value of the bottle to.",
        link: "https://drive.google.com/open?id=0B72-3c9INuoFUjFuX1R1NENUSWs",
        type: "Interaction design",
        image: "img/inf1510.png"
    }
]);

function writeHTML(r){
    var createSingle = document.createElement("div");
    createSingle.className = "single";
    document.getElementById("portfolio-singles").appendChild(createSingle);

    var image = document.createElement("img");
    image.setAttribute("src", r.image);
    createSingle.appendChild(image);

    var title = document.createElement("h2");
    var titleText = document.createTextNode(r.name);
    createSingle.appendChild(title);
    title.appendChild(titleText);

    var paragraph = document.createElement("p");
    var paragraphText = document.createTextNode(r.description + " ");
    createSingle.appendChild(paragraph);
    paragraph.appendChild(paragraphText);

    if(r.link != undefined){
      var link = document.createElement("a");
      link.setAttribute("href", r.link);
      var linkText = document.createTextNode("Read more.");
      createSingle.appendChild(link);
      link.appendChild(linkText);
      paragraph.appendChild(link);
    }

    var type = document.createElement("div");
    type.className = "type";
    type.innerText = r.type;
    createSingle.appendChild(type);
}
