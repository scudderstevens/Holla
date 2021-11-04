import { GetStaticProps, GetStaticPaths }from 'next'

import { Node } from '../../interfaces'
import { sampleNodeData } from '../../utils/_sample-data'

import Layout from '../../components/_layout'
import ListCategory from '../../components/ListCategory'

type Props = {
    data?: Node[]
    errors?: string
}

const WithStaticProps = ({ data, errors }: Props ) => {

    console.log(`data: `+JSON.stringify( data ))

    if(errors) {
        // console.log(`errors: `+errors)
        return (
            <Layout title="Error | HollaTyson.com">
                <p>
                    <span style={{ color: 'red' }}>Error</span> { errors }
                </p>
            </Layout>
        )
    }

    return (
        <Layout title='Category Name | Holla Tyson.com'>
            <h2>data.category</h2>
            <p>home / data.category</p>
            <p>You are currently on the data.category listing page.</p>
            
        </Layout>
    )
}

export default WithStaticProps

export const getStaticPaths: GetStaticPaths = async () => {

    const paths = sampleNodeData.map((data) => ({
        params: {
            category: data.category,
            cSlug: encodeURIComponent(data.cSlug)
        }
    }))

    //console.log(`paths: `+JSON.stringify( paths ))

    return { paths, fallback: false }
} 

export const getStaticProps: GetStaticProps = async ({params}) => {
        console.log(`params: `+JSON.stringify( params ))
        try {
            const slug = JSON.stringify(params?.cSlug)
            let i = 0
            const data = sampleNodeData.map((data, i) => {
                while( i < 1 ){
                    if( data.cSlug === slug ){
                        return data
                    } i++
                }
            })
            //console.log(`res: `+JSON.stringify( data ))
            return { props: { data } }
        } catch (err) {
            return { props: { errors: err.message } }
        }
}