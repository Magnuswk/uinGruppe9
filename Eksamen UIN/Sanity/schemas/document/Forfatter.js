const Forfatter = {
    title: 'Forfatter',
    name: 'forfatter',
    type: 'document',
    fields: [
        {
            title: 'Navn',
            name: 'navn',
            type: 'string', 
            validation: Rule => Rule.required().error('Dette feltet må utfylles') 
        },
        {
            title: 'Bilde',
            name: 'bilde',
            type: 'image',
            validation: Rule => Rule.required().error('Dette feltet må utfylles') 
        },
    ]
}
export default Forfatter