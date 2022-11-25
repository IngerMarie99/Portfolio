import handleHamburger from './hamburger.js';


handleHamburger();


const projectID= 'cxhg5yyd';

const query = `
*[_type == "project"]{
    project_name,
    slug,
    tidspunkt,
    problemstilling,
    link_prototype,
    "main_image": main_image.asset->url,
    "second_image":second_image.asset->url,
    image_gallery[]  
    }` 
    ;

const url = `https://${projectID}.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;

async function getData() {
    const response = await fetch(url)
    const { result } = await response.json();


    /*const projectsElement = document.querySelector('.projects-wrapper')*/

    const projectsList = document.querySelector('#main')

    result.forEach(project => {

        

        const projectCard = document.createElement('a');
        projectCard.classList.add('projectCard');
        projectCard.setAttribute('src', `/${project.slug.current}`)

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





getData();

