export default {
    name: 'textBlock',
    title: 'Basic Text Block',
    type: 'object',
    fields: [
        {
            name: 'portableText',
            title: 'Basic Portable Text Block',
            type: 'portableText',
            description: `array of copy blocks.`,
        }
    ],
    preview: {
        select: {
            //t: 'here',
            s: 'title',
        },
        prepare({ s }) {
            const title=`Copy Block`
            const subtitle=`a basic copy block, defined as portable text.`
            return {
                //imageUrl: i,
                title: title,
                subtitle: subtitle,
            }
        }
    }
}