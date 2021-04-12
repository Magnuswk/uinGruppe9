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
            title: 'Maintittel',
            name: 'maintittel',
            type: 'string'
        },
        {
            titel: 'Undertittel',
            name: 'undertittel',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            title: 'Innhold',
            name: 'innhold',
            type: 'array',
            of: [{type: 'text'}]
        }


    ]
}

export default Artikler
