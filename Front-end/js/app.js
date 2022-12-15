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
    
    link_prototype,
    competitive_analysis,

    site_map,
    

    target_audience,
    persona,
    persona_gallery[],

    visual_identity,
    mood_board,
    
    logo,
    colors,
    icons,
    typography,
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


        const elements = [
            {'key': 'introduction'},
            {'key': 'brief'},
            {'key': 'background'},
            {'key': 'issue'},
            {'key': 'concept'},
            {'key': 'about_the_name', 'container': 'name'},
            {'key': 'project_details', 'container': 'project-details'},
            {'key': 'target_audience', 'container': 'target-audience'},
            {'key': 'competitive_analysis', 'container': 'competitive-analysis'},
            {'key': 'persona'},
            {'key': 'site_map', 'container': 'site-map'},
            {'key': 'visual_identity', 'container': 'visual-identity'},
            {'key': 'mood_board', 'container': 'mood-board'},
            {'key': 'logo'},
            {'key': 'colors'},
            {'key': 'icons'},
            {'key': 'typography'},
            {'key': 'pattern'},
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


