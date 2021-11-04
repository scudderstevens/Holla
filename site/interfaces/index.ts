// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { Node } from 'path/to/interfaces';

export type Node = {
    id: number
    name: string
    nSlug: string
    category: string
    cSlug: string
    author: string
}