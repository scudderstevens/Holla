import { RiAccountCircleFill } from "react-icons/ri";
// import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'
// https://www.sanity.io/docs/slug-type#isUnique-3dd89e75a768

export default {
    name: 'author',
    title: 'Authors',
    type: 'document',
    icon: RiAccountCircleFill,
    fields: [
        {
            name: 'nameFirst',
            title: 'first',
            type: 'string',
            validation: Rule => Rule.error(`You have to define the provider's first name.`).required(),
        },
        {
            name: 'nameMiddle',
            title: 'middle (optional)',
            type: 'string',
            description: `leave off any periods (.)`,
        },
        {
            name: 'nameLast',
            title: 'last',
            type: 'string',
            validation: Rule => Rule.error(`You have to define the provider's last name.`).required(),
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            description: `A URL friendly string, 95 characters or less.`,
            validation: Rule => Rule.required().error(`You have to define a unique slug shorter than 95 characters.`),
            options: {
                source: doc => doc.nameMiddle? `${doc.nameFirst}-${doc.nameMiddle}-${doc.nameLast}`:`${doc.nameFirst}-${doc.nameLast}`,
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
            name: 'tag',
            title: 'Tag(s)',
            description: `free form subject tags. each 'tag' option must be defined first before they can be attached to this node.`,
            type: 'array',
            of: [ {
                type: 'reference',
                weak: true,
                to: { type: 'tag' },
            } ],
        },
        {
            name: 'descShort',
            title: 'short description',
            type: 'string',
            description: `used as the author's teaser text and as the profile page <html> <header> <title>.`,
        },
        {
            name: 'openGraph',
            title: 'Open Graph',
            type: 'openGraph',
            description: `author Open Graph meta data; supplements document specific attributes such as Short Description and Tags.`,
        }
    ],
    orderings: [
        {
            name: 'nameAsc',
            title: 'Author Name a–>z',
            by: [{
                field: 'name',
                direction: 'asc'
            }]
        },
        {
            name: 'nameDesc',
            title: 'Author Name z->a',
            by: [{
                field: 'name',
                direction: 'desc'
            }]
        }
    ],
    preview: {
        select: {
            f: 'nameFirst',
            l: 'nameLast',
            s: 'slug.current',
            i: 'openGraph.image',
        },
        prepare({ f, l, s, i }) {
            const title=`${f} ${l}`
            const subtitle=`${s}`
            return {
                media: i,
                title: title,
                subtitle: subtitle
            }
        }
    }
}