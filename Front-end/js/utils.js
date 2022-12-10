import { cdnUrl } from "./env.js"

export function readUrl() {
    const urlString = window.location.search;
    if(urlString) {
        return (urlString.slice(1)); 
    }
    return undefined;
};


export function handleParagraphs(blockContent, container) {
    console.log (container)
    const blockContainer = document.getElementById(container)
    console.log(blockContainer)

    if(blockContent && blockContent.length > 0) {
        blockContent.map(p => {
            if(p._type === 'block') {
                let pElement = document.createElement('p');
                if (p.style === 'normal') {
                    pElement = document.createElement('p')
                }
                if (p.style === 'h1') {
                    pElement = document.createElement('h1')
                }
                if (p.style === 'h2') {
                    pElement = document.createElement('h2')
                }
                if (p.style === 'h3') {
                    pElement = document.createElement('h3')
                }
                if (p.style === 'h4') {
                    pElement = document.createElement('h4')
                }
                if (p.children[0].marks = 'strong') {
                    pElement == document.createElement('strong')
                }
                if (p.children[0].marks = 'em') {
                    pElement == document.createElement('em')
                }

                
                pElement.classList.add('blockContent');

                pElement.textContent = p.children[0].text;
                blockContainer.append(pElement)
            }

            if(p._type === 'image') {
                const fileNameArray = p.asset._ref.split('-');
                const fileName = `${fileNameArray[1]}-${fileNameArray[2]}.${fileNameArray[3]}`;
                const  imgElement = document.createElement('img');
                imgElement.setAttribute('src', `${cdnUrl}${fileName}`);
                blockContainer.append(imgElement);

                imgElement.classList.add('blockContentImage');
            }
        });
    }
}