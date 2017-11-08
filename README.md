# bitcoin-co-id

This is a node.js API wrapper for the private and public methods exposed by the Bitcoin.co.id API. You will need have a registered an account with bitcoin.co.id and requested API keys to access the private methods.

Check out example.js for a list of private calls and their parameters.

# Installation:

npm install bitcoin-co-id

# Usage:

var Bitcoincoid = require('./index.js');

var publicBitcoincoid = new Bitcoincoid();

publicBitcoincoid.getTicker('btc_idr', console.log);

//// get latest prices

publicBitcoincoid.getTicker("btc_idr", function(err, data)
{
    console.log('bid ' + data.ticker.sell + ' ask ' + data.ticker.sell + ' last price ' + data.ticker.last);
});
