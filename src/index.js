module.exports = function makeExchange(currency) {
    var h, q, d, n, p = 0;
    var obj = {};
    if ( currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }  
    if ( currency == 0) {
        return {};
    }
    h = parseInt((currency / 50),10);
    var h1 = currency%50;
    if ( h > 0) {
        obj.H = h;
    }
    q = parseInt((h1/25),10);
    var q1 = h1%25;
    if ( q > 0) {
        obj.Q = q;
    }
    d = parseInt((q1/10),10);
    var d1 = q1%10;
    if ( d > 0) {
        obj.D = d;
    }
    n = parseInt((d1/5),10);
    var n1 = d1%5;
    if ( n > 0) {
        obj.N = n;
    }
    p = parseInt((n1/1),10);
    var p1 = n1%1;
    if ( p > 0) {
        obj.P = p;
    }
    return obj
   
    

    
    

    
   
    
    
  
    
}
