import { sanityUrl } from './env.js';
import handleHamburger from './hamburger.js';
import { handleGallery, readUrl } from './utils.js';
import { handleParagraphs } from './utils.js';

handleHamburger();

const urlString = readUrl();

if (window.scrollY) {
    console.log(window.scroll(0, 0));  // reset the scroll position to the top left of the document.
  }

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
    "main_image":main_image.asset->url,
    project_name,
    
    project_details,
    tools[]->{name, "image": image.asset->url},
    
    introduction,
    brief,
    background,
    issue,
    concept,

    about_the_name,

    gallery_heading,
    gallery_about,
    gallery[],


    

    
    link_prototype,
    competitive_analysis,

    site_map,
    

    target_audience,
    persona,
    persona_gallery[],

    visual_identity,
    mood_board,
    
    logo_heading,
    logo_text,
    "logo_file": logo_file.asset->url,

    colors_heading,
    colors_about,
    "colors_image": colors_image.asset->url,

    icons_heading,
    icons_about,
    "icons_image": icons_image.asset->url,

    icons,

    typography_heading,
    typography_about,
    "typography_image": typography_image.asset->url,
    
    pattern,

    wire_frames,
    wire_frames_gallery[],

    process,

    results,
}
`;

  // end of queries


function renderOrHide(result, propertyId, containerId) {
    if(!result[0][propertyId]) {
        document.getElementById(containerId).parentElement.style = 'display: none';
    } else {
    handleParagraphs(result[0][propertyId], containerId)
    }
}


async function getProject() {
        const response = await fetch(`${sanityUrl}${encodeURI(querySingleProject)}`);
        const { result } = await response.json();
        console.log(result);

        // PROJECT TITLE
        const titleEL = document.querySelector('.project-title');
        titleEL.textContent = result[0].project_name;

        // MAIN IMAGE
        const coverProject = document.querySelector('.project-page-top-img');
        if(result[0].main_image) {
            coverProject.setAttribute('src', result[0].main_image);
        }

        const galleryHeading = document.getElementById('gallery-header');
        galleryHeading.textContent = result[0].gallery_heading;

        const galleryAbout = document.getElementById('gallery-about');
        galleryAbout.textContent = result[0].gallery_about;

        // LOGO
        const logoHeading = document.getElementById('logo-heading');
        logoHeading.textContent = result[0].logo_heading;

        const logoText = document.getElementById('logo-text');
        if(result[0].logo_text) {
            logoText.textContent = result[0].logo_text;
        }
        const logoFile = document.querySelector('.logo-file');
        if(result[0].logo_file) {
            logoFile.setAttribute('src', result[0].logo_file);
        }
       
        // COLORS
        const colorsHeading = document.getElementById('colors-heading');
        colorsHeading.textContent = result[0].colors_heading;

        const colorsAbout = document.getElementById('colors-about');
        colorsAbout.textContent = result[0].colors_about;

        const colorsImage = document.querySelector('.colors-image');
        if(result[0].colors_image) {
            colorsImage.setAttribute('src',result[0].colors_image);
        }

        // ICONS
        const iconsHeading = document.getElementById('icons-heading');
        iconsHeading.textContent = result[0].icons_heading;

        const iconsAbout = document.getElementById('icons-about');
        iconsAbout.textContent = result[0].icons_about;

        const iconsImage = document.querySelector('.icons-image');
        if(result[0].icons_image) {
            iconsImage.setAttribute('src',result[0].icons_image);
        }
               
        // TYPOGRAPHY
        const typographyHeading = document.getElementById('typography-heading');
        if(result[0].typography_heading) {
            typographyHeading.textContent = result[0].typography_heading;
        }
        const typographyAbout = document.getElementById('typography-about');
        if(result[0].typography_about) {
            typographyAbout.textContent = result[0].typography_about;
        }
        const typographyImage = document.querySelector('.typography-image');
        if(result[0].typography_image) {
            typographyImage.setAttribute('src',result[0].typography_image);
        }


        const elements = [
            {'key': 'introduction'},
            {'key': 'brief'},
            {'key': 'background'},
            {'key': 'issue'},
            {'key': 'concept'},
            {'key': 'about_the_name', 'container': 'name'},
            {'key': 'visual_identity', 'container': 'visual-identity'},
            {'key': 'pattern'},
            {'key': 'project_details', 'container': 'project-details'},
            {'key': 'target_audience', 'container': 'target-audience'},
            {'key': 'competitive_analysis', 'container': 'competitive-analysis'},
            {'key': 'persona'},
            {'key': 'icons'},
            {'key': 'wire_frames', 'container': 'wire-frames'},
            {'key': 'process'},
            {'key': 'results'},
        ]
                
        elements.forEach(block => {
            renderOrHide(
                result,
                block.key,
                block.container ? block.container : block.key
            )
        })

        


       plotTools(result[0].tools, 'tools')
       
       handleGallery(result[0].gallery,'#project-gallery')
       handleGallery(result[0].persona_gallery,'#persona-gallery')
       handleGallery(result[0].wire_frames_gallery,'#wire-frames-gallery')


   
}

function plotTools(tools, container) {
    const  toolsEl = document.getElementById(container);
    tools.map(tool => {
        const toolContainer = document.createElement('div');
        toolContainer.classList.add('tool');
        const imgContainer =  document.createElement('img');
        imgContainer.setAttribute('src', tool.image);
        imgContainer.setAttribute('alt', `icon of ${tool.name}`)
        toolContainer.append(imgContainer);
        const toolTitle = document.createElement('span');
        toolTitle.textContent = tool.name;
        toolContainer.append(toolTitle);
        toolsEl.append(toolContainer);
    })
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


        const titleElement = document.createElement('h3');
        titleElement.textContent = project.project_name;

        projectCard.append(mainImg);
        projectCard.append(titleElement);

        

        projectsList.append(projectCard);


        
    });

} 




if (urlString === undefined) { //Forhindrer at den kaller på alle funksjoner overalt, bare på hjem-siden
    getAllProjects();
}


