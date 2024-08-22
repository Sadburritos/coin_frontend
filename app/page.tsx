'use client'

import Image from "next/image";
import ChartRate from "./components/ChartRate";
import getData from "./utils/utils";


export default function Home() {
  const data = getData()

  return (
    <main>
      <h1>Курс Btc</h1>
      <ChartRate timestamps = {data.labels} rates = {data.data}></ChartRate>
    </main>

  );
}
