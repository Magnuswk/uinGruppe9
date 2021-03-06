const Nyheter = {
    title: 'Nyheter',
    name: 'nyheter',
    type: 'document',
    fields: [
        {
            title: 'Tittel',
            name: 'tittel',
            type: 'string',
            validation: Rule => Rule.required().min(0).max(30).error('Dette feltet må utfylles')
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
            title: 'Beskrivelse',
            name: 'beskrivelse',
            type: 'string',
            validation: Rule => Rule.required().error('Dette feltet må utfylles')
        },
        {
            title: 'Bilde',
            name: 'bilde',
            type: 'image',
            validation: Rule => Rule.required().error('Dette feltet må utfylles'),
        },
        {
            title: 'Dato',
            name: 'dato',
            type: 'date',
            validation: Rule => Rule.required().error('Dette feltet må utfylles'),
            options: {
                dateFormat: "DD-MM-YYYY",
                calendarTodayLabel: "Today"
            }
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
            title: 'Nokkelord',
            name: 'nokkelord',
            type: "array",
            validation: Rule => Rule.required().error('Dette feltet må utfylles'),
            of: [{type: "string"}]
        },
        {
            title: 'Forfatter',
            name: 'forfatter',
            type: 'reference',
            to: [{type: 'forfatter', title: 'navn'}],
            validation: Rule => Rule.required().error('Dette feltet må utfylles')
        }
    ],
}

export default Nyheter
