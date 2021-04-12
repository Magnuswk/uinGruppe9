const Nyheter = {
    title: 'Nyheter',
    name: 'nyheter',
    type: 'document',
    fields: [
        {
            title: 'Tittel',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.required().min(0).max(30).error('Dette feltet må utfylles')
        },
        {
            title: 'Innhold',
            name: 'innhold',
            type: 'text',
            validation: Rule => Rule.required().error('Dette feltet må utfylles')
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
        },
        {
            title: 'Dato',
            name: 'dato',
            type: 'datetime',
            validation: Rule => Rule.required().error('Dette feltet må utfylles')
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
