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
            name:'introduction', 
            title: 'Introduction', //dette er tittel inne i skjemaet
            type: 'string' //dette er hvilken type innhold dette er. https://www.sanity.io/docs/schema-types 
        },
        {
            name:'tidspunkt',
            title:'When',
            type:'string',
        }, 
        {
            name:'subject',
            title:'Subject',
            type:'string',
        },
        {
            name:'client',
            title:'Client',
            type:'string',
        }, 
        {
            name:'tidsramme',
            title:'Time frame',
            type:'string',
        },
        {
            name:'group_members',
            title:'Group members',
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
            title:'issue',
            type:'string',
        },
        {
            name: 'competetive_analysis',
            title: 'Competetive Analysis', 
            type: 'blockContent',
        },
        {
            name:'target_audience',
            title:'Target audience',
            type:'blockContent',
        },
        {
            name:'personas',
            title:'Personas',
            type:'blockContent',
        },
        {
            name:'site_map',
            title:'Site map',
            type:'blockContent',
        },
        {
            name:'project_logo',
            title:'Logo',
            type:'blockContent',
        },
        {
            name:'colors',
            title:'Colors',
            type:'blockContent',
        },
        {
            name:'icons',
            title:'Icons',
            type:'blockContent',
        },
        {
            name:'typography',
            title:'Typography',
            type:'blockContent',
        },
        {
            name:'results',
            title:'Results',
            type:'blockContent',
        },
        {
            name:'link_prototype',
            title:'Link til prototype',
            type:'url',
        },
        {
            name:'malgruppe',
            title:'Målgruppe',
            type:'blockContent',
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