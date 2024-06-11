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
            name:'short_intro', 
            title: 'Short intro', //dette er tittel inne i skjemaet
            type: 'blockContent', //dette er hvilken type innhold dette er. https://www.sanity.io/docs/schema-types 
        },
        {
            name:'introduction', 
            title: 'Introduction', 
            type: 'blockContent',
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

        // MOOD BOARD
        {
            name:'mood_board',
            title:'Mood board',
            type:'blockContent',
        },
        
        
        // PROJECT LOGO
        {
            name:'logo',
            title:'Logo',
            type:'blockContent',
        },

        // COLORS
        {
            name:'colors',
            title:'Colors',
            type:'blockContent',
        },

         // ICONS
        {
            name:'icons',
            title:'Icons',
            type:'blockContent',
        },
         
        // TYPOGRAPHY
        {
            name:'typography',
            title:'Typography',
            type:'blockContent',
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
        // PROCESS
        {
            name:'process',
            title:'Process',
            type:'blockContent',
        },
         // RESULTS
        {
            name:'results',
            title:'Results',
            type:'blockContent',
        },
        {
            name: 'results_gallery',
            title: 'Results gallery',
            type: 'array',
            of: [{type:'image'}],
        },
        
    ]

}