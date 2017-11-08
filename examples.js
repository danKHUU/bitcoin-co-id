var Bitcoincoid = require('./index.js');

var publicBitcoincoid = new Bitcoincoid();

//publicBitcoincoid.getTicker('btc_idr', console.log);

//// get latest prices
//publicBitcoincoid.getTicker("btc_idr", function(err, data)
//{
//    console.log('bid ' + data.ticker.sell + ' ask ' + data.ticker.sell + ' last price ' + data.ticker.last);
//});

// // get trades
//publicBitcoincoid.getTrades('btc_idr', function(err, data)
//{
//  console.log(err, data);
//});

//publicBitcoincoid.depth('btc_idr', console.log);

var key = '';
var secret  = '';
var privateBitcoincoid = new Bitcoincoid(key, secret);

//// get user balances

//privateBitcoincoid.getAccountBalances(function(err, data)
//{
//   console.log(err,data);
//   console.log('Rupiah balance: ', data.return.balance.idr)
//});

//// get transactions history

//privateBitcoincoid.getTransactionsHistory(function(err, data)
//{
//  console.log(err,data.return.deposit.btc);
//});

//// buy or sell
//privateBitcoincoid.createOrders('btc_idr', 'buy', 77693100, 41173, function(err, data)
//{
//  console.log(err, data);
//});

//// get transaction history (brough and sold)
//privateBitcoincoid.getTradeHistory(function(err, data)
//{
//   console.log(err, data.return.trades);
//});

//// get list of current open orders (buy and sell).
//privateBitcoincoid.getActiveOrders('btc_idr', function(err, data)
//{
//    console.log(err, data.return.orders);
//  console.log(err, data.return.orders[0]);
//});

//// get list of order history (buy and sell).
//privateBitcoincoid.getOrderHistory('btc_idr', 100, 1, function(err, data)
//{
//   console.log(err, data.return.orders);
//});

//// get specific order details.
//privateBitcoincoid.getOrderDetails('btc_idr', 14005885, function(err, data)
//{
//   console.log(err, data.return.order.order_id);
//});

//// cancel existing order.
//privateBitcoincoid.cancelOrder('btc_idr', 14005885, 'buy', function(err, data)
//{
//   console.log(err, data);
//});
