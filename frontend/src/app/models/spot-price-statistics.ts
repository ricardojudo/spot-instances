import { jStat } from "jStat";
export class SpotPriceStatistics{
    private data
    stats
    histogram
    constructor(data){
        console.log(data)
        this.data=data
        let _stats=jStat(data)
        this.stats={
            'Count': data.length,
            'Range': _stats.range(),
            'Min': _stats.min(),
            'Max': _stats.max(),
            'Mode': _stats.mode(),
            'Mean': _stats.mean(),
            'Median': _stats.median(),
            'Variance': _stats.variance(),
            'St Dev': _stats.stdev(),
            'Kurtosis': _stats.kurtosis(),
            'Coef Var': _stats.coeffvar()
        }
        this.histogram=jStat.histogram(data, Math.sqrt(data.length))
    }

    getStats(){
        return this.stats
    }

    getHistogram(){
      let h=[]
      let min = this.stats['Min']
      let k= Math.sqrt(this.data.length)
      let r = this.stats['Range']
      let w = r/k;
      let j = min
      this.histogram.forEach((f)=>{
          j += w
          h.push({label:j.toString(), value:f})
      })      
      return h

    }
}