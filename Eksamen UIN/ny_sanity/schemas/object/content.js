const content = {
    title: 'Content',
    name: 'content',
    type: 'array',
    validation: Rule => Rule.required().error('Dette feltet må utfylles'),
    of: [
        {type: 'block',
        styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
                ],
                marks: {
                    decorators: [
                        {title: 'Strong', value: 'strong'},
                        {title: 'Emphasis', value: 'em'},
                        {title: 'Code', value: 'code'}
                                ],
                        },
                        
        },
        {
            type: 'image'
        },
        ],
}
export default content