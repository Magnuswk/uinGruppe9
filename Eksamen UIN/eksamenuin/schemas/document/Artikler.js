const Artikler = {
    title: 'Artikler',
    name: 'artikler',
    type: 'document',
    fields: [
        {
            title: 'Tittel',
            name: 'sidebar',
            type: 'string'
        },
        {
            title: 'Sidebar content',
            name: 'sidebar_content',
            type: 'array',
            of: [{type: "string"}],
        },
        { 
            title: 'Tittel',
            name: 'tittel',
            type: 'string'
        },
        {
            title: 'Innhold',
            name: 'innhold',
            type: 'array',
            of: [{type: 'block'}]
        }


    ]
}

export default Artikler
