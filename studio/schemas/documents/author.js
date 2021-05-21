import { RiAccountCircleFill } from "react-icons/ri";

export default {
    name: 'author',
    title: 'Authors',
    type: 'document',
    icon: RiAccountCircleFill,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: `A URL friendly string, 95 characters or less.`,
            //validation: Rule => Rule.required().max(95).error(`You have to define a unique slug shorter than 95 characters.`),
            options: {
                source: doc => doc.name,
                // maxLength: 95,
                slugify: input => input
                    .toLowerCase()
                    .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
                    .replace(/ - /g, '-')
                    .replace(/\s+/g, '-')
                    .slice(0, 95)
            },
        },
        {
            name: 'descShort',
            title: 'short description',
            type: 'string',
            description: `Author teaser text`,
        },
        {
            name: 'openGraph',
            title: 'Open Graph',
            type: 'openGraph',
            description: `author specific open graph meta tags, replaces default values as defined in Site Settings`,
        },
        {
            name: 'components',
            title: 'Component(s)',
            description: `author profile design components, displayed from top to bottom. drag and drop to change display order.`,
            type: 'array',
            of: [
                { type: 'hdrBlock' },
                { type: 'textBlock' },
                //{ type: 'bannerImage' },
                //{ type: 'cardDeck' },
            ],
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
            title: 'name',
            subtitle: 'slug.current',
            //media: 'image'
        }
    }
}