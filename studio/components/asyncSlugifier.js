import React, { useEffect, useState } from 'react'
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent'
import { FormField } from '@sanity/base/components'
import { withDocument } from 'part:@sanity/form-builder'
import sanityClient from 'part:@sanity/base/client'
import { useId } from "@reach/auto-id" // hook to generate unique IDs

// Import UI components from Sanity UI
import { TextInput } from '@sanity/ui'

const client = sanityClient.withConfig({ apiVersion: '2021-03-25' })

const asyncSlugifier = React.forwardRef((props, ref) => {

    const [slug, setSlug] = useState([])

    var ta, ty = ''
    const arr = Object.keys(props.document.cta).map( key => props.document.cta[key] )
    arr.forEach( item => {
        if( item._type === 'cta' ) {
            ta = item.cta?._ref 
            ty = item._type
        }
    })
    const inputId = useId()

    const {
        type,         // Schema information
        value,        // Current field value
        readOnly,     // Boolean if field is not editable
        placeholder,  // Placeholder text from the schema
        markers,      // Markers including validation rules
        presence,     // Presence information for collaborative avatars
        compareValue, // Value to check for "edited" functionality
        onFocus,      // Method to handle focus state
        onBlur,       // Method to handle blur state
        onChange      // Method to handle patch events
    } = props

    // Creates a change handler for patching data
    const handleChange = React.useCallback(
        // useCallback will help with performance
        (event) => {
            const inputValue = event.currentTarget.value
            // get current value
            // if the value exists, set the data, if not, unset the data
            onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()))
        }, [onChange]
    )

    useEffect(() => {

        if (ta) {
            const query = `*[_type == $ty && _id == $ta ][0]{
                "tslug": slug.current
                "cslug": category->slug.current
            }`
            const params = { ty, ta }

            client.fetch(query, params).then(doc => {
                setSlug( doc.cslug? `${doc.cslug}/`+`${doc.tslug}` : `${doc.tslug}` )
            })
        }

    }, [ta])

    if (slug) return (
        <FormField
            description={type.description}  // Creates description from schema
            title={type.title}              // Creates label from schema title
            __unstable_markers={markers}    // Handles all markers including validation
            __unstable_presence={presence}  // Handles presence avatars
            compareValue={compareValue}     // Handles "edited" status
            >
            <TextInput
                id={inputId}                  // A unique ID for this input
                value={value}                 // Current field value
                readOnly={readOnly}           // If "readOnly" is defined make this field read only
                placeholder={placeholder}     // If placeholder is defined, display placeholder text
                onFocus={onFocus}             // Handles focus events
                onBlur={onBlur}               // Handles blur events
                onChange={handleChange}       // A function to call when the input value changes
                ref={ref}
            />
        </FormField>
    )
    else return null
})

export default withDocument(asyncSlugifier)