import React from 'react'
import Link from 'next/link'

import {Node} from '../interfaces'

type Props = {
    data: Node
}

const ListCategory = ( { data }: Props ) => (

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

)

export default ListCategory