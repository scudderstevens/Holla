import { RiGitMergeLine } from "react-icons/ri";

export default {
    name: 'navigationMenu',
    title: 'Menus',
    type: 'document',
    icon: RiGitMergeLine,
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'items',
            type: 'array',
            of: [{ type: 'cta' }]
        }
        // collection of CTAs, sub-menu
    ]
}