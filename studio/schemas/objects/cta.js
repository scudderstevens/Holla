export default {
    title: 'Call to action',
    name: 'cta',
    type: 'object',
    fieldsets: [
        {
            name: 'link',
            title: 'Link',
            description: 'Only the first value of these will be used'
        }
    ],
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'route',
            title: 'Target Path',
            type: 'reference',
            weak: true,
            to: [ {type: 'route'} ],
            fieldset: 'link'
        },
        {
            name: 'path',
            title: 'Path',
            type: 'string',
            description: 'local path without a route: /blog',
            fieldset: 'link'
        },
        {
            name: 'link',
            title: 'External link',
            type: 'string',
            description: 'Example: https://www.sanity.io',
            fieldset: 'link'
        },
        {
            name: 'kind',
            title: 'Kind',
            type: 'string',
            options: {
                layout: 'radio',
                list: ['button', 'link']
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