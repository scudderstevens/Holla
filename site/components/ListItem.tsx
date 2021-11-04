import React from 'react'
import Link from 'next/link'

import { Node } from '../interfaces'

type Props = {
    data: Node
}

const ListItem = ( { data }: Props) => (

    <span>
        <Link
        as={
            `/${encodeURIComponent(data.cSlug)}/${encodeURIComponent(data.nSlug)}`
        } href={{
            pathname:`/[cSlug]/[nSlug]/index.tsx`,
            query: {
                cSlug: `${encodeURIComponent(data.cSlug)}`,
                nSlug: `${encodeURIComponent(data.nSlug)}`,
            }
        }}>
            <a>{data.name}</a>
        </Link>
        
        <Link
        as={
            `/${encodeURIComponent(data.cSlug)}`
        } href={{
            pathname:`/[cSlug]/index.tsx`,
            query: {
                cSlug: `${encodeURIComponent(data.cSlug)}`,
                category: data.category,
            }
        }}>
            <a>{data.category}</a>
        </Link>
    </span>
)

export default ListItem