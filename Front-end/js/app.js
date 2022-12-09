import { sanityUrl } from './env.js';
import handleHamburger from './hamburger.js';
import { readUrl } from './utils.js';
import { handleParagraphs } from './utils.js';


handleHamburger();

const urlString = readUrl();



const queryAllProjects = `
*[_type == "project"]{
    project_name,
    slug,
    "main_image": main_image.asset->url,
    "second_image":second_image.asset->url,
    }
    `;

const querySingleProject = `
*[slug.current == "${urlString}"]{
    project_name,
    "main_image":main_image.asset->url,
    
    when,
    subject,
    client,
    time_frame,


    introduction,
    brief,
    issue,

    
    link_prototype,
    colors,
    competitive_analysis,
    group_members,

    personas,
    site_map,
    

    target_audience_heading,
    target_audience,
    "target_audience_img": target_audience_img.asset->url

    visual_identity,
    
    logo_heading,
    logo_text,
    logo_file,

    colors_heading,
    colors_about,
    colors_image,

    icons_heading,
    icons_about,
    icons_image,

    typography_heading,
    typography_about,
    typography_image,



}
`;


  // end of queries

async function getProject() {
        const response = await fetch(`${sanityUrl}${encodeURI(querySingleProject)}`);
        const { result } = await response.json();
        console.log(result);

        // PROJECT TITLE
        const titleEL = document.querySelector('.project-title');
        titleEL.textContent = result[0].project_name;

        // MAIN IMAGE
        const coverProject = document.querySelector('.project-page-top-img');
        coverProject.setAttribute('src', result[0].main_image);

        // TARGET AUDIENCE
        const targetAudienceHeading = document.getElementById('target-audience-heading');
        targetAudienceHeading.textContent = result[0].target_audience_heading;
        
        const targetAudience = document.getElementById('target-audience');
        targetAudience.textContent = result[0].target_audience;
        
        const targetAudienceImage = document.getElementById('target-audience-image');
        targetAudienceImage.setAttribute('src', result[0].target_audience_img);

        // LOGO
        const logoHeading = document.getElementById('logo-heading');
        logoHeading.textContent = result[0].logo_heading;

        const logoText = document.getElementById('logo-text');
        logoText.textContent = result[0].logo_text;

        const logoFile = document.querySelector('.logo-file');
        logoFile.setAttribute('src', result[0].logo_file._ref);
       
        // COLORS
        const colorsHeading = document.getElementById('colors-heading');
        colorsHeading.textContent = result[0].colors_heading;

        const colorsAbout = document.getElementById('colors-about');
        colorsAbout.textContent = result[0].colors_about;

        const colorsImage = document.getElementById('colors-image');
        //colorsImage.setAttribute('src',result[0].colors_image.asset._ref);

        // ICONS
        const iconsHeading = document.getElementById('icons-heading');
        iconsHeading.textContent = result[0].icons_heading;

        const iconsAbout = document.getElementById('icons-about');
        iconsAbout.textContent = result[0].icons_about;

        const iconsImage = document.getElementById('icons-image');
       // iconsImage.setAttribute('src',result[0].icons_image.asset._ref);
               
        // TYPOGRAPHY
        const typographyHeading = document.getElementById('typography-heading');
        typographyHeading.textContent = result[0].typography_heading;

        const typographyAbout = document.getElementById('typography-about');
        typographyAbout.textContent = result[0].typography_about;

        const typographyImage = document.getElementById('typography-image');
    // typographyImage.setAttribute('src',result[0].typography_image.asset._ref);

       handleParagraphs(result[0].introduction, 'introduction') 
       handleParagraphs(result[0].brief, 'brief')
       handleParagraphs(result[0].issue, 'issue')
       handleParagraphs(result[0].visual_identity, 'visual-identity')


       
       
   
}

if (urlString !== undefined) {
    getProject();
}



async function getAllProjects() {
    const response = await fetch(`${sanityUrl}${encodeURI(queryAllProjects)}`);
    const { result } = await response.json();


    /*const projectsElement = document.querySelector('.projects-wrapper')*/

    const projectsList = document.querySelector('#main')

    result.forEach(project => {

        

        const projectCard = document.createElement('a');
        projectCard.classList.add('projectCard');
        projectCard.setAttribute('href', `/projects/?${project.slug.current}`);

        const mainImg = document.createElement('img');
        mainImg.setAttribute('src', project.main_image);

        const secondImg = document.createElement('img');
        secondImg.setAttribute('src', project.second_image);

        const titleElement = document.createElement('h2');
        titleElement.textContent = project.project_name;

        projectCard.append(mainImg);
        projectCard.append(secondImg);
        projectCard.append(titleElement);

        

        projectsList.append(projectCard);


        
    });

} 




if (urlString === undefined) { //Forhindrer at den kaller på alle funksjoner overalt, bare på hjem-siden
    getAllProjects();
}


