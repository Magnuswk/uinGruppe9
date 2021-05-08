const FAQ = {
    title: 'FAQ',
    name: 'faq',
    type: 'document',
    fields: [
        {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: 'string',
            validation: Rule => Rule.required().error('Dette feltet må utfylles')
        },
        {
            title: 'Svar',
            name: 'svar',
            type: 'text'
        }
    ]
}
export default FAQ