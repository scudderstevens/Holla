import * as React from 'react'
import ListItem from './ListItem'
import { Node } from '../interfaces/index'

type Props = {
    data: Node[]
}

const List = ({ data }: Props ) => (
    <ul>
        { data.map((d) => (
            <li key={d.id}>
                <ListItem data={d} />
            </li>
        ))}
    </ul>
)

export default List