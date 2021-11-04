import { RiDvdFill } from "react-icons/ri";
// import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'
// https://www.sanity.io/docs/slug-type#isUnique-3dd89e75a768

export default {
    name: 'collection',
    title: 'Collections',
    type:'document',
    icon: RiDvdFill,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().error(`You have to define a name for this node.`),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: Rule => Rule.required().error(`You have to define a unique slug for this node, no longer than 95 characters.`),
            description: `A URL friendly string, 95 characters or less.`,
            options: {
                source: doc => doc.name,
                maxLength: 95,
                //isUnique: isUniqueAcrossAllDocuments,
                slugify: input => input
                    .toLowerCase()
                    .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
                    .replace(/ - /g, '-')
                    .replace(/\s+/g, '-')
                    .slice(0, 95)
            },
        },
        {
            name: 'category',
            type: 'reference',
            weak: true,
            to: [ { type: 'category' } ],
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'descShort',
            title: 'short description',
            type: 'string',
            description: `used as the collection's teaser text and as the page <html> <header> <title>.`,
        },
        {
            name: 'openGraph',
            title: 'Open Graph',
            type: 'openGraph',
            description: `collection Open Graph meta data; supplements document specific attributes such as Short Description.`,
        }
        // manifest
        // theme-color
    ],
    orderings: [
        {
            name: 'nameAsc',
            title: 'Location Name a–>z',
            by: [{
                    field: 'name',
                    direction: 'asc'
            }]
        },
        {
            name: 'nameDesc',
            title: 'Location Name z->a',
            by: [{
                    field: 'name',
                    direction: 'desc'
            }]
        }
    ],
    preview: {
        select: {
            t: 'name',
            s: 'slug.current',
            i: 'openGraph.image',
        },
        prepare({ t, s, i }) {
            const title=`${t}`
            const subtitle=`${s}`
            return {
                media: i,
                title: title,
                subtitle: subtitle
            }
        }
    }
}