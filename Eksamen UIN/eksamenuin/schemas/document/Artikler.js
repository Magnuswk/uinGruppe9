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
            type: 'string',
            options: {
              list: [ 
                { title: 'Tjenester', value: 'tjenester',  },
                { title: 'Sortering', value: 'sortering',  },
                { title: 'Nyheter', value: 'nyheter',  },
              ],
            },
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
