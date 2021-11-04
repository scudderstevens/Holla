import { GetStaticProps, GetStaticPaths } from 'next'

import { Node } from '../../../interfaces'
import { sampleNodeData } from '../../../utils/_sample-data'

import Layout from '../../../components/_layout'
import NodeDetail from '../../../components/NodeDetail'

type Props = {
    data?: Node
    errors?: string
}

const StaticPropsDetail = ({ data, errors }: Props ) => {

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
        <Layout title={`${
            data ? data.name : 'Node Detail'
        } | Holla Tyson` }
        >
            { data && <NodeDetail data={data} />}
        </Layout>
    )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = sampleNodeData.map((data) => ({
        params: {
            cSlug: encodeURIComponent(data.cSlug),
            nSlug: encodeURIComponent(data.nSlug),
            id: data.id.toString()
        }
    }))

    console.log(`paths: `+JSON.stringify( paths ))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    //console.log(`params: `+JSON.stringify( params ))
    try {
        const slug = params?.nSlug
        const data = sampleNodeData.find((data) => data.nSlug === slug )
        // console.log(`res: `+JSON.stringify( data ))
        return { props: { data } }
    } catch (err) {
        return { props: { errors: err.message } }
    }
}