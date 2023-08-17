export default {
    name:'funFacts',
    title:'Fun Facts', //Dette er tittelen du ser i listen i Sanity
    type:'document',
    fields: [
        {
            name:'FunFactTitle', 
            title: 'Fun Fact title', //dette er tittel inne i skjemaet
            type: 'string' //dette er hvilken type innhold dette er. https://www.sanity.io/docs/schema-types 
        },
        {
            name:'funFact',
            title:'Fun Fact',
            type:'blockContent',
        },
        {
            name: 'funFact_image',
            title: 'Fun Fact image',
            type: 'array',
            of: [{type:'image'}],
        },


    ]

}