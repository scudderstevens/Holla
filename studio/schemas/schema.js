import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// components
import hdrBlock from './components/hdrBlock'
import textBlock from './components/textBlock'

//objects
import cta from './objects/cta'
import mainImage from './objects/mainImage'
import openGraph from './objects/openGraph'
import portableText from './objects/portableText'

// documents
import author from './documents/author'
import category from './documents/category'
import collection from './documents/collection'
import page from './documents/page'
import post from './documents/post'
import navigationMenu from './documents/navigationMenu'
//import route from './documents/route'
import siteSettings from './documents/siteSettings'
import tag from './documents/tag'

export default createSchema({
  name: 'blog',
  types: schemaTypes.concat([
    // objects
    cta,
    mainImage,
    openGraph,
    portableText,
    hdrBlock,
    textBlock,
    // documents
    post,
    page,
    tag,
    category,
    collection,
    author,
    //route,
    navigationMenu,
    siteSettings
  ]),
})
