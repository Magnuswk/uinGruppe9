const Kategori = {
    title: 'Kategori',
    name: 'kategori',
    type: 'document',
    fields: [
        {
            title: 'Kategori',
            name: 'kategori',
            type: 'string', 
            validation: Rule => Rule.required().error('Dette feltet må utfylles') 
        }
    ]
}
export default Kategori