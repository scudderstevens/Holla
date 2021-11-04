// import the default document actions
import defaultResolve, { DeleteAction, DuplicateAction } from 'part:@sanity/base/document-actions'
import { DocSubmitReview } from './DocSubmitReview'
// https://www.sanity.io/docs/document-actions-api

export default function resolveDocumentActions(props){
    // console.log( `action: ` + JSON.stringify(props))
    // TODO: Submit Page for approval, based on Author's Role Permissions
    if ( props.type == 'page' ){
        return [ DocSubmitReview, DeleteAction, DuplicateAction ]
    }
    return defaultResolve(props)
}