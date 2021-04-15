const walletModel = require('../models/wallet');
const { queryBlockIO } =  require('../utils/blockIo');

exports.CreateWallet = async (req, res) => {

    const { network, label } = req.body;

    try {
        const userId = req.user;
        const labelExist = await walletModel.findOne({label:label});

        if(labelExist){
            return res.status(401).json({message: 'Label already used, try another name'});
        }
       
        const { data } =  await queryBlockIO(network).get_new_address({ label: label });
    
        const wallet = new walletModel();

        wallet.network = network;
        wallet.userid = userId;
        wallet.balance = '0.000000';
        wallet.address = data.address;
        wallet.label = label;

        const walletDetails = await wallet.save();

        return res.status(200).json({message: 'Wallet Created Successfully', data: walletDetails});
    } catch (error) {
        return res.status(500).json({message: `An Error Occured: ${error}`});
    }

};

