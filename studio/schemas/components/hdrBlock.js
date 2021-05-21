export default {
    name: 'hdrBlock',
    title: 'Header Block',
    type: 'object',
    fields: [
        {
            name: 'number',
            title: 'number',
            type: 'string',
                options: {
                    list: [
                        { title: '<h2>', value: '2' },
                        { title: '<h3>', value: '3' },
                        { title: '<h4>', value: '4' },
                        { title: '<h5>', value: '5' },
                        { title: '<h6>', value: '6' },
                ]},
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: `<header> text block.`,
        },
    ],
    preview: {
        select: {
            t: 'number',
            st: 'title',
        },
        prepare({ t, st }) {
            const title=`<h${t}>`
            const subtitle=`${st}`
            return {
                //imageUrl: i,
                title: title,
                subtitle: subtitle,
            }
        }
    }
}