import { cars } from 'cars';
import { VehicleDetail } from 'components';
import { Layout } from 'layout';
import { CarModel } from 'models/Car';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import type { NextPage } from "next"
const Detail: NextPage = () => {
  const [car, setCar] = useState<CarModel | undefined>()
  const router = useRouter()

  useEffect(() => {
    const { id } = router.query
    if (typeof id !== "string") return
    setCar(() => cars[parseInt(id)])
  }, [router])

  if (car === undefined) return <></>

  return (
    <Layout pageName={`${car.make} ${car.model} ${car.year}`}>
      <div className={`md:px-5 py-5 max-w-screen-2xl`}>
        <div className="bg-white ">
          <VehicleDetail car={car} />
        </div>
      </div>
    </Layout>
  )
}
export default Detail
