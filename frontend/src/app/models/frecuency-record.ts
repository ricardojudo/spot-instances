export class FrecuencyRecord{
    lowLimit: number;
    highLimit: number;
    frecuency: number;
    percentace: number;
    constructor(lowLimit,highLimit){
      this.lowLimit=lowLimit
      this.highLimit=highLimit
    }

    build(prices){
      let n = prices.length
      this.frecuency = prices.filter(i => i>=this.lowLimit && i<=this.highLimit).length
      this.percentace = this.frecuency / n
    }
}

export class FrecuencyTable{
    prices: number[]
    records: FrecuencyRecord[] = []                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    r:number
    k:number
    w:number
    max:number
    min:number
    n:number
    classes: number[] = []
    frecuencies: number[] = []

    public build(prices){
        this.prices=prices
        this.max=Math.max(...prices)
        this.min=Math.min(...prices)
        this.n = prices.length
        this.r=this.max - this.min
        this.k=Math.sqrt(this.n)
        this.w = this.r/this.k;

        for(var i=this.min;i<=this.max;i+=this.w){         
          this.classes.push(i)
          var record = new FrecuencyRecord(i, i + this.w)
          record.build(prices)
          this.records.push(record)
        }


    }
}