console.log('js loaded');

const projectID= 'cxhg5yyd';

const query = `
*[_type == "project"]{
    project_name,
    slug,
    tidspunkt,
    problemstilling,
    link_prototype,
    "main_image": main_image.asset->url,
    image_gallery[]  
    }` 
    ;

const url = `https://${projectID}.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;

async function getData() {
    const response = await fetch(url)
    const { result } = await response.json();
    console.log(result);


    const projectsElement = document.querySelector('.projects-wrapper')

    result.forEach(project => {
        const cardElement = document.createElement('a');
        cardElement.classList.add('card');
        cardElement.setAttribute('href', `/${project.slug.current}`)
        
        const coverElement = document.createElement('img');
        coverElement.setAttribute('src', project.main_image)

        const titleElement = document.createElement ('h3');
        titleElement.textContent = project.project_name;
        
        cardElement.append(coverElement);
        cardElement.append(titleElement);

        console.log(coverElement);
        console.log(cardElement);
        console.log(projectsElement);

        projectsElement.append(cardElement);
        console.log(projectsElement);
    });
    /*
    const projectList = document.getElementById ('projectList');
    const ulList = document.createElement('ul');
    result.forEach(project => {
        const liElement = document.createElement('li');
        liElement.textContent = project.project_name
    });*/
} 



getData();