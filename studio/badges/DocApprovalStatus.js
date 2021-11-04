//import React from 'react'
import { useDocumentOperation } from '@sanity/react-hooks'

export function DocApprovalStatus(props){

    if( props.draft && props.submittedAt ){
        return {
            label: 'submitted',
            title: `Approval request submitted: `+props.submittedAt,
            color: 'info',
        };
    }

    if( props.draft && props.approvedAt ){
        return {
            label: 'approved',
            title: `on: `+props.approvedAt,
            color: 'success',
        };
    }

    if( props.draft && !props.submittedAt && !props.approvedAt ){
        return {
            label: 'action required',
            title: `edits require approval before they can be published`,
            color: 'warning',
        };
    }

}