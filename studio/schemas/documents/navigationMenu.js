import { RiGitMergeFill } from "react-icons/ri";

export default {
    name: 'navigationMenu',
    title: 'Menus',
    type: 'document',
    icon: RiGitMergeFill,
    fields: [
        {
            name: 'title',
            type: 'string',
            description: `the name of this menu or sub-menu`
        },
        // collection of CTAs, sub-menu
        {
            name: 'items',
            type: 'array',
            of: [
                {   type: 'cta' },
                // TODO : prevent circular references.
                {   type: 'reference',
                    weak: true,
                    to: [ { type: 'navigationMenu' } ]
                }
            ]
        }
    ]
}