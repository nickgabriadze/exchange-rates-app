import useGetRates from "./useGetRates";


export function useAlphaCodes(){
    let alphaCodes = []
    let ratesObject = useGetRates('https://www.floatrates.com/daily/usd.json')
    let values = Object.values(ratesObject);

    for(let i = 0; i < values.length; i++){
        alphaCodes.push([values[i].alphaCode, parseFloat(values[i].rate), values[i].name])
    }
    alphaCodes.push(["USD", 1 ,"United States Dollar"])
    return alphaCodes;
}

export default useAlphaCodes;