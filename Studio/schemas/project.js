export default {
    name:'project',
    title:'Project', //Dette er tittelen du ser i listen i Sanity
    type:'document',
    fields: [
        {
            name:'project_name', 
            title: 'Project name', //dette er tittel inne i skjemaet
            type: 'string' //dette er hvilken type innhold dette er. https://www.sanity.io/docs/schema-types 
        },
        {
            name:'slug', 
            title: 'Slug', 
            type: 'slug',
            options: {
                source: 'project_name',
                maxLength: 50,
              },
        }, 
        {
            name:'tidspunkt',
            title:'Tidspunkt for prosjekt',
            type:'string',
        }, 
        {
            name:'tidsramme',
            title:'Tidsramme',
            type:'string',
        },
        
        {
            name: 'tools',
            title: 'Tools',
            type: 'array',
            of: [{type: 'reference', to: {type: 'tools'}}],
          },
        {
            name:'problemstilling',
            title:'Problemstilling',
            type:'string',
        },
        {
            name:'link_prototype',
            title:'Link til prototype',
            type:'url',
        },
        {
            name:'malgruppe',
            title:'Målgruppe',
            type:'string',
        },
        {
            name:'leveranse',
            title:'Leveranse',
            type:'string',
        },
        {
            name:'main_image',
            title:'Main image',
            type:'image',
        },
        {
            name:'second_image',
            title:'Second image',
            type:'image',
        },
        {
            name:'image_gallery',
            title:'Image gallery',
            type:'array',
            of: [{type: 'image'}]
        },
        
    ]

}