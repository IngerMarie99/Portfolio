export default {
    name:'contact',
    title:'Contact', //Dette er tittelen du ser i listen i Sanity
    type:'document',
    fields: [
        {
            name:'page_title', 
            title: 'Page Title', //dette er tittel inne i skjemaet
            type: 'string' //dette er hvilken type innhold dette er. https://www.sanity.io/docs/schema-types 
        },
        {
            name:'body_text', 
            title: 'Body text',
            type: 'string' 
        },
        {
            name:'phone_number', 
            title: 'Phone number',
            type: 'url',
            validation: Rule => Rule.uri({
            scheme: ['tel']
            }),
        },
        {
            name:'email', 
            title: 'E-mail',
            type: 'url',
            validation: Rule => Rule.uri({
            scheme: ['mailto'] 
            }),
        }, 
    ],          
}