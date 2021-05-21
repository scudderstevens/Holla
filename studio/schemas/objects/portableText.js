export default {
    name: 'portableText',
    title: 'Basic Portable Text Block',
    type: 'array',
    of: [{
        type: 'block',
        title: 'Copy Block',
        styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
            { title: 'H6', value: 'h6' },
            { title: 'Quote', value: 'blockquote' }
        ],
        lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Numbered', value: 'number' }],
        marks: {
            decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' }],
            // Annotations can be any object structure – e.g. a link or a footnote.
        },
    }]
}