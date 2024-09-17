class Calculator{
    static _timesUsed;
    static _currentTotal;    
    static getTimesUsed(){
        return Calculator._timesUsed;
    }
    static getCurrentValue(){
        return Calculator._currentTotal;
    }

    static init(){
        Calculator._timesUsed = 0;
        Calculator._currentTotal = 0;
    }

    static add(val){
        if(typeof(val) !== 'number') return 'FAILURE';
        Calculator._timesUsed++;
        Calculator._currentTotal+=val;
        return 'SUCCESS';
    }

    static sub(val){
        if(typeof(val) !== 'number') return 'FAILURE';
        Calculator._timesUsed++;
        Calculator._currentTotal-=val;
        return 'SUCCESS';
    }
}

module.exports = Calculator;