import { GetStaticProps } from 'next'

import { Node } from '../interfaces'
import { sampleNodeData } from '../utils/_sample-data'

import Layout from '../components/_layout'
import List from '../components/List'

type Props = {
  data: Node[]
}

const WithStaticProps = ({ data }: Props ) => (
  <Layout title="Node List | Next.js + TypeScript">
    <h2>Node List</h2>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on the home page</p>
    <List data={data} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const data: Node[] = sampleNodeData
  return { props: { data } }
}

export default WithStaticProps