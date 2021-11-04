import defaultResolve from 'part:@sanity/base/document-badges'
import { DocApprovalStatus } from './DocApprovalStatus'
// import { RiInformationFill, RiCheckboxCircleFill } from 'react-icons/ri'

export default function resolveDocumentBadges(props){
    if ( props.type == 'page' ){
        return [ ...defaultResolve(props), DocApprovalStatus ]
    }
    return defaultResolve(props)
}