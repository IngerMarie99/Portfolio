import { cdnUrl } from "./env.js"

export function readUrl() {
    const urlString = window.location.search;
    if(urlString) {
        return (urlString.slice(1)); 
    }
    return undefined;
};

function getMarkDefType(mark, markDefs) {
    for(let i=0; i < markDefs.length; i++) {
        if(markDefs[i]._key == mark) {
            return markDefs[i]._type;
        }
    };
    return undefined;
}

function getHref(mark, markDefs) {
    for(let i=0; i < markDefs.length; i++) {
        if(markDefs[i]._key == mark) {
            return markDefs[i].href;
        }
    };
    return undefined;
}

export function handleParagraphs(blockContent, container) {
    console.log (container)
    const blockContainer = document.getElementById(container)
    console.log(blockContainer)

    if(blockContent && blockContent.length > 0) {
        blockContent.map(p => {
            switch(p._type) {
                case 'image':
                    const fileNameArray = p.asset._ref.split('-');
                    const fileName = `${fileNameArray[1]}-${fileNameArray[2]}.${fileNameArray[3]}`;
                    const  imgElement = document.createElement('img');
                    imgElement.setAttribute('src', `${cdnUrl}${fileName}`);
                    blockContainer.append(imgElement);

                    imgElement.classList.add('blockContentImage');
                break;
                default:
                    // Setting up block (paragraph / header ++)
                    let pElement;
                    if(['h1','h2','h3','h4'].includes(p.style)) {
                        pElement = document.createElement(p.style);
                    } else {
                        pElement = document.createElement('p')
                    }
                    pElement.classList.add('blockContent');

                    // Adding contents
                    if(p._type === 'block') {
                        p.children.forEach(child => {
                            if(['strong','em'].includes(child.marks[0])) {
                                let childElement = document.createElement(child.marks[0]);
                                childElement.textContent = child.text;
                                pElement.append(childElement);
                            } else if(getMarkDefType(child.marks[0], p.markDefs) == 'link') {
                                let childElement = document.createElement('a');
                                childElement.textContent = child.text;
                                childElement.setAttribute('href', getHref(child.marks[0], p.markDefs));
                                pElement.append(childElement);
                            } else {
                                pElement.append(child.text);
                            }
                        });

                        // Adding block to parent container
                        blockContainer.append(pElement)
                    }
                break;
            }    
        });
    }
}