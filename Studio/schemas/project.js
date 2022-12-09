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
            type: 'blockContent' //dette er hvilken type innhold dette er. https://www.sanity.io/docs/schema-types 
        },
        {
            name:'brief',
            title:'Brief',
            type:'blockContent',
        },
        {
            name:'issue',
            title:'Issue',
            type:'blockContent',
        },
        {
            name:'when',
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
            name:'time_frame',
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
        
        // COMPETITIVE ANALYSIS
        {
            name: 'competitive_analysis',
            title: 'Competitive analysis', 
            type: 'blockContent',
        },

        // TARGET AUDIENCE
        {
            name:'target_audience_heading',
            title:'Target audience heading',
            type:'string',
        },
        {
            name:'target_audience',
            title:'Target audience text',
            type:'string',
        },
        {
            name:'target_audience_img',
            title:'Target audience image',
            type:'image',
        },

         // PERSONAS
        {
            name:'personas',
            title:'Personas',
            type:'blockContent',
        },

        // SITE MAP
        {
            name:'site_map',
            title:'Site map',
            type:'blockContent',
        },


        // VISUAL IDENTITY
        {
            name:'visual_identity',
            title:'Visual identity',
            type:'blockContent',
        },
        
        
        // PROJECT LOGO
        {
            name:'logo_heading',
            title:'Logo heading',
            type:'string',
        },
        {
            name:'logo_text',
            title:'About the logo',
            type:'string',
        },
        {
            name:'logo_file',
            title:'Logo file',
            type:'image',
        },


        // COLORS
        {
            name:'colors_heading',
            title:'Colors heading',
            type:'string',
        },
        {
            name:'colors_about',
            title:'About the colors',
            type:'string',
        },
        {
            name:'colors_image',
            title:'Colors image',
            type:'image',
        },

        // ICONS
        {
            name:'icons_heading',
            title:'Icons heading',
            type:'string',
        },
        {
            name:'icons_about',
            title:'About the icons',
            type:'string',
        },
        {
            name:'icons_image',
            title:'Icons image',
            type:'image',
        },


        // TYPOGRAPHY
        {
            name:'typography_heading',
            title:'Typography heading',
            type:'string',
        },
        {
            name:'typography_about',
            title:'About the typography',
            type:'string',
        },
        {
            name:'typography_image',
            title:'Typography image',
            type:'image',
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
            name:'main_image',
            title:'Main image',
            type:'image',
        },
        {
            name:'second_image',
            title:'Second image',
            type:'image',
        },

        
    ]

}