

export default async function getData(){
    const res = await fetch("http://192.168.50.64:8080/rateData").then(response => response.json())
    const timestamp = res.map((x: { timestamp: any; }) => x.timestamp);
    const rateUsd = res.map((x: { rateUsd: any; }) => x.rateUsd);

    const res1 =  {
        labels: timestamp,
        datasets: [
            {
                label: 'BTC',
                data: rateUsd,
            }
        ]
    };
    console.log(res1)

    return res1
}