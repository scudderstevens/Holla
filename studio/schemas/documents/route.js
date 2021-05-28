import sanityClient from '@sanity/client'
import { RiGitPullRequestLine } from "react-icons/ri";
import category from './category';
// import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'
// https://www.sanity.io/docs/slug-type#isUnique-3dd89e75a768

// https://www.sanity.io/docs/studio-environment-variables
const client = sanityClient({
    //projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
    //dataset: process.env.SANITY_STUDIO_API_DATASET,
    projectId: "wnaacdfy",
    dataset: "holla",
    //apiVersion: '2021-03-25',
    token: '', // or leave blank for unauthenticated usage
    useCdn: false, // `true` or `false` if you want to ensure fresh data
})

function myAsyncSlugifier(input) {
    const query = `*[ _id == "`+input._ref+`" ][0]{
        'name': name,
        'slug': slug.current,
        'type': _type,
        'category': category->{ 'cslug': slug.current },
    }`
    //
    return client.fetch(query).then((doc) => {
        //console.log(`id: `+process.env.SANITY_STUDIO_API_PROJECT_ID)
        //console.log(`data: `+process.env.SANITY_STUDIO_API_DATASET)
        //console.log(`doc: `+JSON.stringify(doc))
        if( doc.type == 'node' ){
            //console.log(`if: `+JSON.stringify(doc.category.cslug))
            return `${ doc.category.cslug+'/'+doc.slug }`
        } else {
            //console.log(`else: `+JSON.stringify(doc.slug))
            return `${ doc.slug }`
        }
    });
}

export default {
    name: 'route',
    title: 'Routes',
    type: 'document',
    icon: RiGitPullRequestLine,
    initialValue: {
        useSiteTitle: false,
    },
    fieldsets: [
        {
            title: 'Meta Data',
            name: 'metadata',
        },
        {
            title: 'Visibility',
            name: 'visibility',
        },
    ],
    fields: [
        {
            name: 'target',
            description: `Only required if you want to OVERRIDE the DEFAULT path. a default node path: /<category>/<node-slug>`,
            type: 'reference',
            validation: (Rule) => Rule.required(),
            weak: true,
            to: [ 
                { type: 'node'     },
                { type: 'category' },
                { type: 'tag'      },
                { type: 'author'   },
            ],

        },
        {
            name: 'path',
            title: 'Path',
            type: 'slug',
            description: `The path where the document will accessible, remember the target document needs to be published.`,
            /* validation: (Rule) =>
                Rule.required().custom((slug) => {
                if (slug && slug.current && slug.current === '/') {
                    return 'Cannot be /'
                }
                    return true
            }),
            */
            options: {
                source: 'target',
                maxLength: 95,
                // isUnique: isUniqueAcrossAllDocuments,
                slugify: myAsyncSlugifier
            }
        },
        // path icon type="image/svg+xml"
        {
            name: 'useSiteTitle',
            title: 'Use default title?',
            type: 'boolean',
            description: 'use the page Title defined in Site Settings as the <html> <header> <title> instead of the short description of the target document.',
            fieldset: 'metadata',
        },
        {
            name: 'useSiteOpenGraph',
            title: 'Use default Open Graph meta data?',
            type: 'boolean',
            description: 'use the open graph meta tags defined in Site Settings instead of the open graph details of the target document.',
            fieldset: 'metadata',
        },
        {
            name: 'includeInSitemap',
            title: 'Include in sitemap',
            type: 'boolean',
            description: 'for search engines. Will be generateed to /sitemap.xml',
            fieldset: 'visibility'
        },
        {
            name: 'disallowRobots',
            title: 'Disallow in robots.txt',
            type: 'boolean',
            description: 'hide this route for search engines like google',
            fieldset: 'visibility'
        },
        /*
        // This can be used by a server-side rendered website. We plan to figure out proper JAMstack support
        {
            name: 'queries',
            type: 'array',
            description: 'Used to return personalized content based on paid search terms and remarketing',
            of: [ { type: 'string' } ],
            options: {
                layout: 'tags'
            }
        },
        */
        /*
        {
            name: 'campaign',
            title: 'Campaign',
            type: 'string',
            description: 'UTM for campaigns'
        },
        */
        /*
        // This can be used by a server-side rendered website. We plan to figure out proper JAMstack support
        {
            name: 'experiment',
            type: 'experiment',
            description: 'Use this to A/B/n test this route towards different pages',
        },
        */
    ],
    preview: {
        select: {
            t: 'target.slug.current',
            s: 'path.current',
            lp: 'landingpage',
        },
        prepare({ t, s }) {
            const title = `${t}`
            const subtitle = `/ ${s}`
            return {
                title: title,
                subtitle: subtitle
            }
        },
    },
}