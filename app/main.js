require(['app/services', 'vue'], function(svc, Vue) {

		var app = new Vue({
			el: '#view',
			data: {
				user: svc.userid,
				msg: '',
				shares:0,
				ticker:'',
				price:0,
				total_price:0,
				ticker_filter:'',
				transactions : [
				
				]
			},
			methods: {
				addTran: function () {
					var self = this;
					svc.createData('transactions', {shares:self.shares, ticker:self.ticker, price:self.price}).then(function(data){
						app.loadTrans() // reload transactions for display
					})
				},
				loadTrans: function(){
					var self = this;
					svc.getData('transactions', {ticker:self.ticker_filter}).then(function(data){
						self.transactions = data
					})
				},
				getTickerPrice: function(){
					var self = this;
					svc.getData('ticker_price', {ticker:self.ticker}).then(function(price){
						self.price = price
					})
				},
				updateTotal: function(){
					var self = this;
					self.total_price = self.shares * self.price
				}
			}
		})
	
		app.loadTrans() // load all transactions on page load
});