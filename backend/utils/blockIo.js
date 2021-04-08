const BlockIo = require('block_io');

exports.queryBlockIO = (walletType) => {
    let api_key;
    if(walletType === 'BTC') api_key = process.env.BTC;
    if(walletType === 'LTC') api_key = process.env.LTC;
    if(walletType === 'DOGE') api_key = process.env.DOGE;  
    return new BlockIo(api_key);
};



