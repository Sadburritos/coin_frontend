import ChartRate from "./components/ChartRate";
import getData from "./utils/utils";


export default async function Home() {
  

  return (
    <main>
      <h1>Курс Btc</h1>
      <ChartRate/>
    </main>

  );
}
