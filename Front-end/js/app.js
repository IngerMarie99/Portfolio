import { sanityUrl } from './env.js';
import handleHamburger from './hamburger.js';
import readUrl from './utils.js';


handleHamburger();

const urlString = readUrl();



const queryAllProjects = `
*[_type == "project"]{
    project_name,
    slug,
    tidspunkt,
    problemstilling,
    link_prototype,
    "main_image": main_image.asset->url,
    "second_image":second_image.asset->url,
    image_gallery[]  
    }
    `;

const querySingleProject = `
*[slug.current == "${urlString}"]{
    project_name,
    "main_image": main_image.asset->url,
    tidspunkt,
    problemstilling,
    link_prototype,
    colors,
    competetive_analysis,
    group_members,
    introduction,
    personas,
    subject,
}
`;


  // end of queries

async function getProject() {
        const response = await fetch(`${sanityUrl}${encodeURI(querySingleProject)}`);
        const { result } = await response.json();
        console.log(result);

        const titleEL = document.querySelector('.project-title');
        titleEL.textContent = result[0].project_name;

        const coverProject = document.querySelector('.project-page-top-img');
        coverProject.setAttribute('src', result[0].main_image);
    
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


