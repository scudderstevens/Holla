import S from '@sanity/desk-tool/structure-builder'
import { RiEqualizerLine } from "react-icons/ri";
// Remix Icons https://react-icons.github.io/react-icons/

export default () =>
    S.list()
        .title('desk')
        //.items(
        //    S.documentTypeListItems()
        //)
        .items([
            S.listItem()
            .title('Settings')
            .icon(RiEqualizerLine)
            .child(
                S.document()
                    .title('Settings')
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
            ),
            S.divider(),
            ...S.documentTypeListItems().filter(listItem => !['siteSettings'].includes(listItem.getId()))
        ])
