import React from 'react'
import { useDocumentOperation } from '@sanity/react-hooks'

import { RiEmotionHappyFill, RiQuestionFill, RiInformationFill, RiCheckboxCircleFill } from 'react-icons/ri'

// https://www.sanity.io/docs/document-actions
// https://www.sanity.io/docs/studio-react-hooks
// https://www.sanity.io/ui/docs

export function DocSubmitReview(props){

    const { patch, publish } = useDocumentOperation(props.id, props.type);

    //const [isSubmitting, setisSubmitting] = useState(false)

    return {
        label: 'Submit for Review',
        disabled: publish.disabled,
        icon: RiEmotionHappyFill,
    };
}