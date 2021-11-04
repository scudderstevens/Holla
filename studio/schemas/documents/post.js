import { RiRadioButtonFill } from "react-icons/ri";
// import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'
// https://www.sanity.io/docs/slug-type#isUnique-3dd89e75a768

/* __experimental_actions: ['update', 'create', 'delete', 'publish'], */

export default {
    name: 'post',
    title: 'Posts',
    type: 'document',
    icon: RiRadioButtonFill,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().error(`You have to define a name for this node.`),
        },
        {
            name: 'author',
            type: 'reference',
            weak: true,
            to: [ { type: 'author' } ],
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'displayAuthor',
            title: 'Display Author',
            type: 'boolean'
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
            name: 'collection',
            type: 'reference',
            weak: true,
            to: [ { type: 'collection' } ],
            // validation: (Rule) => Rule.required(),
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
            description: `used as the page's teaser text and as the page <html> <header> <title>.`,
        },
        {
            name: 'openGraph',
            title: 'Open Graph',
            type: 'openGraph',
            description: `page Open Graph meta data; supplements document specific attributes such as Short Description, Category and Tags.`,
        },
        {
            name: 'components',
            title: 'Component(s)',
            description: `page design components, displayed from top to bottom. drag and drop to change display order.`,
            type: 'array',
            of: [
                { type: 'hdrBlock' },
                { type: 'textBlock' },
                // { type: 'bannerImage' },
                // { type: 'cardDeck' },
            ],
        },
    ],
    orderings: [
        {
            name: 'nameAsc',
            title: 'Name a–>z',
            by: [{
                field: 'name',
                direction: 'asc'
            }]
        },
        {
            name: 'nameDesc',
            title: 'Name z->a',
            by: [{
                field: 'name',
                direction: 'desc'
            }]
        }
    ],
    preview: {
        select: {
            n: 'name',
            s: 'slug.current',
            i: 'openGraph.image',
        },
        prepare({ n, s, i }) {
            const title=`${n}`
            const subtitle=`${s}`
            return {
                media: i,
                title: title,
                subtitle: subtitle
            }
        }
    }
}