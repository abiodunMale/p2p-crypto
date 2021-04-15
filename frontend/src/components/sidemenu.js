import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className="vertical-nav bg-light sidebar">
            <div className="px-3 mb-4 bg-light">
            </div>
            <p className="text-center">MENU</p>
            <div style={{alignItems: 'flex-start', marginLeft: 30, marginTop: 50}} className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"> Wallet</button>
                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"> Transaction</button>
            </div>
        </div>
    );
};

export default SideMenu;