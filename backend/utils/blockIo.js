const BlockIo = require('block_io');

exports.queryBlockIO = (network) => {
    let api_key;
    if(network === 'BTC') api_key = process.env.BTC;
    if(network === 'LTC') api_key = process.env.LTC;
    if(network === 'DOGE') api_key = process.env.DOGE;  
    return new BlockIo(api_key);
};



