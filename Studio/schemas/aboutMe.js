export default {
    name:'aboutMe',
    title:'About me', //Dette er tittelen du ser i listen i Sanity
    type:'document',
    fields: [
        {
            name:'page_title', 
            title: 'Page title', //dette er tittel inne i skjemaet
            type: 'string' //dette er hvilken type innhold dette er. https://www.sanity.io/docs/schema-types 
        },
        {
            name:'slug', 
            title: 'Slug', 
            type: 'slug',
            options: {
                source: 'page_title',
                maxLength: 50,
              },
        }, 
        {
            name:'image',
            title: 'Image',
            type: 'image',
        },
        {
            name:'description',
            title: 'Description',
            type: 'string',
        }
        
    ]

}