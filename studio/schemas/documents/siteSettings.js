import { RiEqualizerLine } from "react-icons/ri";

export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    icon: RiEqualizerLine,
    fields: [
        // Open Graph Protocol https://ogp.me/
        // og:site_name	The name of the site.
        // og:type The type of page/resource.
            // website on the homepage.
            // profile on user profile pages.
            // article on all pages/posts and other templates.
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'This is the default page title.',
            //validation: Rule => Rule.max(60).warning('Should be under 60 characters')
        },
        // og:url	The canonical URL of the page.
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'This is the default page description.',
            //validation: Rule => Rule.max(155).warning('Should be under 155 characters')
        },
        {
            name: 'image',
            title: 'Image',
            type: 'mainImage',
            description: 'This is the default featured image, Facebook recommends 1200x630 (will be auto resized)',
        },
        {
            name: 'locale',
            title: 'Locale',
            type: 'string',
            description: `This website's default language. Format language_TERRITORY. Default is en_US.`
        }
        // og:locale:alternate, other locales this page is available in.
        // icon type="image/svg+xml"
        // logo type="image/svg+xml"
        // tag(s) free form, array of strings,
        // manifest
        // theme-color
        /*
        // You can add videos to Open Graph tags too
        {
            name: 'video',
            title: 'Video',
            type: 'mux.video'
        }
        */
    ],
}