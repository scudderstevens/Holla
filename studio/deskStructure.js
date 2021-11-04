import S from '@sanity/desk-tool/structure-builder'
import { RiDvdFill } from "react-icons/ri";
import { RiEqualizerFill } from "react-icons/ri";
// Remix Icons https://react-icons.github.io/react-icons/

export default () =>
    S.list()
        .title('Desk')
        .items([
            S.listItem()
            .title('by Collection')
            .icon(RiDvdFill)
            .child(
                S.documentTypeList('collection')
                    .title('Collections')
            ),
            S.divider(),
            ...S.documentTypeListItems().filter(listItem => !['siteSettings' || 'collection'].includes(listItem.getId())),
            S.divider(),
            S.listItem()
            .title('Settings')
            .icon(RiEqualizerFill)
            .child(
                S.document()
                    .title('Settings')
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
            ),
        ])
