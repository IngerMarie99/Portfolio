export default {
    name:'project',
    title:'Project', //Dette er tittelen du ser i listen i Sanity
    type:'document',
    fields: [
        {
            name:'main_image',
            title:'Main image',
            type:'image',
        },
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
            name:'project_details',
            title: 'Project details',
            type:'blockContent',
        },
        {
            name: 'tools',
            title: 'Tools',
            type: 'array',
            of: [{type: 'reference', to: {type: 'tools'}}],
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
            name:'background',
            title:'Background',
            type:'blockContent',
        },

        {
            name:'issue',
            title:'Issue',
            type:'blockContent',
        },

        {
            name:'concept',
            title:'Concept',
            type:'blockContent',
        },
        
        {
            name:'about_the_name',
            title:'About the name',
            type:'blockContent',
        },


        // IMAGE GALLERY

        {
            name:'gallery_heading',
            title:'Gallery heading',
            type:'string',
        },
        {
            name:'gallery_about',
            title:'About the gallery',
            type:'string',
        },
        {
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{type:'image'}],
        },

        // TARGET AUDIENCE
        
        {
            name:'target_audience',
            title:'Target audience',
            type:'blockContent',
        },

        // PERSONA
        {
            name:'persona',
            title:'Persona',
            type:'blockContent',
        },
        {
            name: 'persona_gallery',
            title: 'Persona gallery',
            type: 'array',
            of: [{type:'image'}],
        },
        
        // COMPETITIVE ANALYSIS
        {
            name: 'competitive_analysis',
            title: 'Competitive analysis', 
            type: 'blockContent',
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

        // VISUAL IDENTITY
        {
            name:'mood_board',
            title:'Mood board',
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

         // ICONS 2
         {
            name:'icons',
            title:'Icons',
            type:'blockContent',
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
        // PATTERN
        {
            name:'pattern',
            title:'Pattern',
            type:'blockContent',
        },
        // WIRE FRAMES
        {
            name:'wire_frames',
            title:'Wire frames',
            type:'blockContent',
        },
        {
            name: 'wire_frames_gallery',
            title: 'Wire frames gallery',
            type: 'array',
            of: [{type:'image'}],
        },

        {
            name:'process',
            title:'Process',
            type:'blockContent',
        },
        
        {
            name:'results',
            title:'Results',
            type:'blockContent',
        },
        
    ]

}