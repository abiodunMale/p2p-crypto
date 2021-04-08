const { queryBlockIO } =  require('../utils/blockIo');

exports.CreateWallet = async (req, res) => {

    const { walletType, label } = req.body;

    try {

        const userId = req.user;

        const {data} =  await queryBlockIO(walletType).get_new_address({ label: label });

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({message: `An Error Occured: ${error}`});
    }

};

