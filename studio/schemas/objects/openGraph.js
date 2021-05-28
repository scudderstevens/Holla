export default {
    title: 'Open Graph',
    name: 'openGraph',
    type: 'object',
    fields: [
        // Open Graph Protocol https://ogp.me/
        // og:type content="website"
        // og:url - The canonical URL of your object that will be used as its permanent ID in the graph
        {
            name: 'title',
            title: 'Title',
            type: 'slug',
            description: `This will take the document's name and trim it to 60 characters`,
            validation: Rule => Rule.warning('Should be under 60 characters'),
            options: {
                source: doc => doc.name? `${doc.name}`: doc.nameMiddle? `${doc.nameFirst} ${doc.nameMiddle} ${doc.nameLast}`:`${doc.nameFirst} ${doc.nameLast}`,
                maxLength: 60,
                slugify: input => input
                    .slice(0, 60)
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'slug',
            description: `This will take the document's short descripton and trim it to 155 characters`,
            validation: Rule => Rule.warning('Should be under 155 characters'),
            options: {
                source: doc => doc.descShort,
                maxLength: 155,
                slugify: input => input
                    .slice(0, 155)
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'mainImage',
            description: `This document's featured image, recommended 1200x630 or larger (will be auto resized)`,
        },
        /*
        // You can add videos to Open Graph tags too
        {
            name: 'video',
            title: 'Video',
            type: 'mux.video'
        }
        */
        // replace default
        // og:locale
    ],
    preview: {
        select: {
            // t: 'title',
            st: 'description'
            // route: 'route.slug.current',
            // link: 'link'
        },
        prepare({ st /*, route, link */ }) {
            return {
                title: `Open Graph`,
                subtitle: `${st}`
                // subtitle: route ? `Route: /${route}/` : link ? `External link: ${link}` : 'Not set'
            }
        }
    }
}