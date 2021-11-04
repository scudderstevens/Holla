import * as React from 'react'

import { Node } from '../interfaces'

type NodeDetailProps = {
    data: Node
}

const NodeDetail = ({ data: n }: NodeDetailProps ) => (
    <div>
        <h2>Detail for { n.name }</h2>
        <p>ID: { n.id }</p>
    </div>
)

export default NodeDetail