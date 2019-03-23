
define(["jquery"], function ($) {
    var self = {}
    
    self.loggedIn = true
    self.userid = 'Tony Hurst'

    self.getData = function(ep, parms){
        return new Promise(function(resolve, reject) {
            var data, url
            if(ep == 'transactions'){
                if (parms && parms.ticker){
                   url = '/api/transactions/' + parms.ticker
                }else{
                    url = '/api/transactions'
                }
               $.get(url).then(function(data){
                    resolve(data)
               })
            }else if(ep == 'ticker_price'){
                $.get('https://api.iextrading.com/1.0/stock/' + parms.ticker + '/price').then(function(data){ 
                    resolve(data)
                })
            }else{
                reject(-1)
            }
        })
    }

    self.createData = function(ep, parms){
        return new Promise(function(resolve, reject) {
            var data
            if(ep == 'transactions'){
               $.post('/api/transactions', parms).then(function(data){ 
                    resolve(data)
               })
            }else{
                reject(-1)
            }
        })
    }
    
    return self
});