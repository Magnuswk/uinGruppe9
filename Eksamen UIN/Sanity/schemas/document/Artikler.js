const Artikler = {
    title: 'Artikler',
    name: 'artikler',
    type: 'document',
    fields: [
        {
            title: 'Bilde',
            name: 'bilde',
            type: 'image',
            validation: Rule => Rule.required().error('Dette feltet må utfylles'), 
            options: {
                hotspot: true
            },
            fields: [
                {
                    title: 'Alt tekst',
                    name: 'alttekst',
                    type: 'string',
                    options: {
                        isHighlighted: true
                    }
                }
            ]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            validation: Rule => Rule.required().error('Dette feltet må utfylles'),
            options: {
                source: 'tittel'
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
            title: 'Content',
            name: 'body',
            type: 'content',
            validation: Rule => Rule.required().error('Dette feltet må utfylles') 
        },
        {
            title: 'Kategori',
            name: 'kategori',
            type: 'reference',
            validation: Rule => Rule.required().error('Dette feltet må utfylles'),
            to:[{type: 'kategori', title: 'kategori'}]
        },
        {   
            title: 'Nokkelord',
            name: 'nokkelord',
            type: "array",
            validation: Rule => Rule.required().error('Dette feltet må utfylles'),
            of: [{type: "string"}]
            
        }


    ],

    preview: {
        select: {
            ImageUrl: 'asset.url'
        }
    }
}

export default Artikler
