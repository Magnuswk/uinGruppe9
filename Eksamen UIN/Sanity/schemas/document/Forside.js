const forside = {
    name: "Forside",
    title: "Forside",
    type: "document",
    fields: [
        {
        name:"tittel",
        title: "Tittel",
        type: "string",
        validation: Rule => Rule.required().error('Dette feltet må utfylles'),
        },
        {
        name:"bilde",
        title: "Bilde",
        type: "image",
        validation: Rule => Rule.required().error('Dette feltet må utfylles'),
        },
        {
        name:"link",
        title: "link",
        type: "string",
        validation: Rule => Rule.required().error('Dette feltet må utfylles'),
        },
    ]
}

export default forside;