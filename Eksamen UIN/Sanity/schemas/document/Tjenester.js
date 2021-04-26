const Tjenester = {
    title: "Tjenester",
    name: "tjenester",
    type: "document",
    fields: [
        {
        title: 'Avdeling',
        name: 'avdeling',
        type: 'string'
        },
        {
        title: "Navn",    
        name:"navn",
        type: "string"
        },
        {
            title: "Adresse",
            name:"adresse",
            type: "string"
        },
        {
            title: "Post nummer",
            name:"postnummer",
            type: "string"
        },
        {
            title: "Post sted",
            name:"poststed",
            type: "string"
        },
        {
            title: "Epost adresse",
            name:"epostadresse",
            type: "string"
        },
        {
            title: "Telefon nummer",
            name:"telefonnummer",
            type: "string"
        },
        {
            title: "Hva gjelder din henvendelse?",
            name:"henvendelse",
            type: "text"
        },
        {
            title: "Kontakt metode",
            name:"kontaktmetode",
            type: "string"
        },

        
    ]
}

export default Tjenester;