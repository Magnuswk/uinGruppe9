const Artikler = {
    title: 'Artikler',
    name: 'artikler',
    type: 'document',
    fields: [
        {
            title: 'Bilde',
            name: 'bilde',
            type: 'image',
            validation: Rule => Rule.required().error('Dette feltet må utfylles') 
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            validation: Rule => Rule.required().error('Dette feltet må utfylles'),
            options: {
                source: 'title'
            },
        },
        { 
            title: 'Tittel',
            name: 'tittel',
            type: 'string',
            validation: Rule => Rule.required().error('Dette feltet må utfylles') 
        },
        { 
            title: 'Beskrivelse',
            name: 'beskrivelse',
            type: 'string',
            validation: Rule => Rule.required().error('Dette feltet må utfylles') 
        },
        {
            title: 'Innhold',
            name: 'innhold',
            type: 'array',
            of: [{type: 'block'}],
            validation: Rule => Rule.required().error('Dette feltet må utfylles') 
        },
        {
            title: 'Kategori',
            name: 'kategori',
            type: 'reference',
            to:[{type: 'kategori', title: 'kategori'}]
        },
        {   
            title: 'Nokkelord',
            name: 'nokkelord',
            type: "array",
            validation: Rule => Rule.required().error('Dette feltet må utfylles'),
            of: [{type: "string"}]
            
        }


    ]
}

export default Artikler
