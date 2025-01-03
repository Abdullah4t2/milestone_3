import {defineField } from "sanity";
export const author = defineField({
    name:'author',
    type:'document',
    title:'Author',
    fields:[
        defineField({
            name:'name',
            type:'string',
            title:'AuthorName',
        }),
        defineField({
            name:'bio',
            type:'text',
            title:'Bio',
        }),
        defineField({
            name:'image',
            type:'image',
            title:'image',
            options:{
            hotspot:true
            }
        }),
    ]
})