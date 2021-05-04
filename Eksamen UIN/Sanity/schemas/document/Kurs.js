const Kurs = {
    title: "Kurs",
    name: "kurs",
    type: "document",
    fields: [
            {
                title: "Tittel",    
                name:"tittel",
                type: "string"
            },
            {
                title: "Bilde",    
                name:"bilde",
                type: "image"
            },
            {
                title: "Beskrivelse",    
                name:"beskrivelse",
                type: "string"
            },
            {
                title: "Adresse",    
                name:"adresse",
                type: "string"
            },
            {
                title: "Postnummer",    
                name:"postnummer",
                type: "string"
            },
            {
                title: "Poststed",    
                name:"poststed",
                type: "string"
            },
            {
                title:"Slug",    
                name:"slug",
                type: "slug",
                options: {
                    source: 'tittel'
            }},
            {
                title: 'Start dato',
                name: 'startdato',
                type: 'date' 
            },
            {
                title: 'Pris',
                name: 'pris',
                type: 'string'
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

    ]
}
export default Kurs
