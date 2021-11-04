import { RiCreativeCommonsNdFill } from "react-icons/ri";
// import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'
// https://www.sanity.io/docs/slug-type#isUnique-3dd89e75a768

export default {
    name: 'tag',
    title: 'Tags',
    type: 'document',
    icon: RiCreativeCommonsNdFill,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().error(`You have to define a name for this tag.`),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: `A URL friendly string, 95 characters or less.`,
            validation: Rule => Rule.required().error(`You have to define a unique slug shorter than 95 characters.`),
            options: {
                source: doc => doc.name,
                maxLength: 95,
                // isUnique: isUniqueAcrossAllDocuments,
                slugify: input => input
                    .toLowerCase()
                    .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
                    .replace(/ - /g, '-')
                    .replace(/\s+/g, '-')
                    .slice(0, 95)
            },
        },
        // tag icon type="image/svg+xml"
        {
            name: 'descShort',
            title: 'short description',
            type: 'string',
            description: `used as the tag's teaser text and as the landing page <html> <header> <title>.`,
        },
        {
            name: 'openGraph',
            title: 'Open Graph',
            type: 'openGraph',
            description: `tag Open Graph meta data; supplements document specific attributes such as Short Description.`,
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