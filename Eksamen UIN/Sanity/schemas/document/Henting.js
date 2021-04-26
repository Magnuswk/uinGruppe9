const Henting = {
    title: "Henting",
    name: "henting",
    type: "document",
    fields: [
        {
        title: 'Avdeling',
        name: 'avdeling',
        type: 'string'
        },
        {
        title: "Firma navn",    
        name:"firmanavn",
        type: "string"
        },
        {
            title: "Bestillers navn",    
            name:"bestillersnavn",
            type: "string"
            },
        {
            title: "Hente adresse",
            name:"adresse",
            type: "string"
        },
        {
            title: "Epost adresse",
            name:"epost",
            type: "string"
        },
        {
            title: "Telefon nummer",
            name:"telefonnummer",
            type: "string"
        },
        {
            title: "Kontakt person ved hentestedet",
            name:"kontaktmetode",
            type: "string"
        },
        {
            title: "Telefon for kontakt person",    
            name:"telefonforkontaktperson",
            type: "string"
        },
        {
            title: "Hva gjelder din henvendelse?",
            name:"henvendelse",
            type: "text"
        },
        {
            title: "Hva skal hentes?",
            name:"hentes",
            type: "string"
        },
        {
            title: "Hentedato",
            name:"hentedato",
            type: "date"
        },
        {
            title: "Tilleggsopplysninger?",
            name:"tilleggsopplysninger",
            type: "text"
        },
        {
            title: "Ønsker dere å bli kontaktet før henting?",
            name:"kontaktforhenting",
            type: "string"
        },
        {
            title: "Noe farlig avfall som må deklareres?",
            name:"farligavfalldeklarasjon",
            type: "string"
        },
        {
            title: "Ønsker dere bytte embalasje?",
            name:"bytteembalasje",
            type: "string"
        },
    ]
}

export default Henting;