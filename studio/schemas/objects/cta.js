import asyncslugifier from '../../components/asyncSlugifier'

export default {
    title: 'Call-to-Action',
    name: 'cta',
    type: 'object',
    fields: [
        {
            name: 'target',
            title: 'Target',
            type: 'reference',
            weak: true,
            to: [ { type: 'page' } ]
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Text used for menu item, button or link.',
        },
        {
            name: 'path',
            title: 'Path',
            type: 'string',
            description: 'local path without a route: /blog',
            inputComponent: asyncslugifier
        },
        {
            name: 'link',
            title: 'External link',
            type: 'string',
            description: 'Example: https://www.sanity.io',
        },
        {
            name: 'kind',
            title: 'Kind',
            type: 'string',
            options: {
                layout: 'radio',
                list: [ 'button', 'link' ]
            }
        }
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
            r: 'route.path.current',
            l: 'link'
        },
        prepare ({t, r, l}) {
            let title = `${t}`
            let subtitle = 'Not set'
            if (r) {
                subtitle = `route: /${r}`
            }
            if (l) {
                subtitle = `external: ${l}`
            }
            return {
                title,
                subtitle
            }
        }
    }
}