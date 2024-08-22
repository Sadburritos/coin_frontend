

export default async function getData(){
    const res = await fetch("http://localhost:8080/rateData").then(response => response.json())
    const timestamp = res.map((x: { timestamp: any; }) => x.timestamp);
    const rateUsd = res.map((x: { rateUsd: any; }) => x.rateUsd);

    

    return {labels: timestamp, data: rateUsd}
}