import type { NextPage } from "next"
import { CarList, Categories, FilterList } from 'components';
import { Layout } from 'layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout pageName="Listado de vehículos">
        <Categories />
        <div
          className={`px-5 max-w-screen-2xl mx-auto md:flex md:flex-row gap-5 py-5`}
        >
          <div className={`flex-initial md:block md:basis-2/5 lg:basis-1/5`}>
            <FilterList />
          </div>
          <div className="mx-auto md:basis-3/5 lg:basis-4/5">
            <CarList />
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Home
