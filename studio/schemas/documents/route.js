import sanityClient from '@sanity/client'
import { RiGitPullRequestLine } from "react-icons/ri";
import category from './category';


const client = sanityClient({
    //projectId: process.env.SANITY_PROJECT_ID,
    //dataset: process.env.SANITY_DATASET,

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
        //console.log(`id: `+process.env.SANITY_PROJECT_ID)
        //console.log(`id: `+process.env.SANITY_DATASET)
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
            title: 'Visibility',
            name: 'visibility',
        },
    ],
    fields: [
        {
            name: 'target',
            description: 'The page you want to appear at this path. Remember it needs to be published.',
            type: 'reference',
            weak: true,
            to: [ 
                { type: 'node'     },
                { type: 'category' },
                { type: 'tag'      },
                { type: 'author'   },
            ],
            //validation: (Rule) => Rule.required(),
        },
        {
            name: 'path',
            title: 'Path',
            type: 'slug',
            description: 'This is the website path the page will accessible on',
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
                slugify: myAsyncSlugifier
            }
        },
        {
            name: 'useSiteTitle',
            title: 'Use site title?',
            type: 'boolean',
            description: 'Use the site settings title as page title instead of the title on the referenced node',
        },
        /*
        {
            name: 'openGraph',
            title: 'Open graph',
            type: 'openGraph',
            description: 'These values populate meta tags',
        },
        */
        {
            name: 'includeInSitemap',
            title: 'Include in sitemap',
            type: 'boolean',
            description: 'For search engines. Will be generateed to /sitemap.xml',
            fieldset: 'visibility'
        },
        {
            name: 'disallowRobots',
            title: 'Disallow in robots.txt',
            type: 'boolean',
            description: 'Hide this route for search engines like google',
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
            description: 'UTM for campaings'
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
            t: 'target.name',
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