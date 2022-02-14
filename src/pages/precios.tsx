import type { NextPage } from "next"
import { Layout } from 'layout';

const Precios: NextPage = () => {
  return (
    <Layout pageName="Precios">
      <div className={`px-5 pb-5 mx-auto max-w-screen-2xl`}>
        <div className="bg-white p-4 font-semibold text-center rounded-md shadow-sm">
          Precios
        </div>
      </div>
    </Layout>
  )
}
export default Precios
