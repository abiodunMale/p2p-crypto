import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className="vertical-nav bg-white sidebar">
            <div className="py-4 px-3 mb-4 bg-light">
                <div className="media d-flex align-items-center">
                <div className="media-body">
                    <h4 className="m-0">Crypto</h4>
                    <p className="font-weight-light text-muted mb-0">BTC-LTC-DOGE</p>
                </div>
                </div>
            </div>
            <p>MAIN<p/>

            
        </div>
    );
};

export default SideMenu;