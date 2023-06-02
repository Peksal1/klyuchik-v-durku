import React, { useState } from "react";
import "./DashboardTab.css";
import "bootstrap/dist/css/bootstrap.min.css";
interface Props {
  deviceName: string;
}

interface DashboardTabData {
  [key: string]: JSX.Element;
}

function getProgressBarColor(filledPercentage: number) {
  if (filledPercentage <= 40) {
    return "bg-success"; // Green color for 40% or below
  } else if (filledPercentage <= 70) {
    return "bg-warning"; // Yellow color for 41-70%
  } else {
    return "bg-danger"; // Red color for 71% and above
  }
}

const tabContentData: DashboardTabData = {
  Network: (
    <div className="network-tab">
      <div className="network-tab-header">
        <img src="Frame 3763.png" alt="Wide" className="wide-picture" />
      </div>
      <div className="network-tab-title">WAN Connection Status</div>
      <div className="network-tab-icon">
        Drag and drop row to arrange WAN priority
      </div>
      <table className="network-tab-table">
        <thead>
          <tr>
            <th className="dark-grey">WAN</th>
            <th className="dark-grey">Connection Status</th>
            <th className="dark-grey">IP Address</th>
          </tr>
        </thead>
        <tbody>
          <tr className="yellow">
            <td className="yellow">Priority 1 (Highest)</td>
            <td className="yellow">Example Status</td>
            <td className="yellow">Example IP</td>
          </tr>
          <tr>
            <td>WAN 1</td>
            <td>Example Status</td>
            <td>Example IP</td>
          </tr>
          <tr>
            <td>WAN 2</td>
            <td>Example Status</td>
            <td>Example IP</td>
          </tr>
          <tr className="yellow">
            <td className="yellow">Priority 2</td>
            <td className="yellow">Example Status</td>
            <td className="yellow">Example IP</td>
          </tr>
          <tr>
            <td>Cellular 1</td>
            <td>Example Status</td>
            <td>Example IP</td>
          </tr>
          <tr>
            <td>Cellular 2</td>
            <td>Example Status</td>
            <td>Example IP</td>
          </tr>
          <tr className="yellow">
            <td className="yellow">Priority 3</td>
            <td className="yellow">Example Status</td>
            <td className="yellow">Example IP</td>
          </tr>
          <tr className="yellow">
            <td className="yellow">Priority 4</td>
            <td className="yellow">Example Status</td>
            <td className="yellow">Example IP</td>
          </tr>
          <tr>
            <td>Disabled</td>
            <td>Example Status</td>
            <td>Example IP</td>
          </tr>
          <tr>
            <td>Virtual WAN 1</td>
            <td>Example Status</td>
            <td>Example IP</td>
          </tr>
        </tbody>
      </table>
      <div className="network-tab-wifi">
        <div className="wifi-header">Wi-Fi</div>
        <div className="wifi-rectangle">
          <div className="rectangle-header">Home Wi-Fi</div>
          <div className="rectangle-data">Peplink123456789...</div>
          <div className="rectangle-ghz">5 GHz</div>
        </div>
        <div className="wifi-rectangle">
          <div className="rectangle-header">Another Wi-Fi</div>
          <div className="rectangle-data">Some Wi-Fi Name</div>
          <div className="rectangle-ghz">2.4 GHz</div>
        </div>
        <div className="wifi-rectangle">
          <div className="rectangle-header">One More Wi-Fi</div>
          <div className="rectangle-data">Another Wi-Fi Name</div>
          <div className="rectangle-ghz">5 GHz</div>
        </div>
      </div>
    </div>
  ),
  "SpeedFusion Connect": <>This is the SpeedFusion Connect tab.</>,
  VPN: (
    <>
      <h2 className="orange-header">IPSec VPN</h2>
      <div className="rectangle-container">
        <div className="rectangle">
          <div className="bold-header">VPN name 1</div>
          <div className="status">
            <div className="green-square"></div>
            <span className="status-text">Established</span>
          </div>
        </div>
        <div className="rectangle">
          <div className="bold-header">VPN name 2</div>
          <div className="status">
            <div className="green-square"></div>
            <span className="status-text">Established</span>
          </div>
        </div>
        <div className="rectangle">
          <div className="bold-header">VPN name 3</div>
          <div className="status">
            <div className="green-square"></div>
            <span className="status-text">Established</span>
          </div>
        </div>
      </div>
      <h2 className="orange-header">GRE Tunnel</h2>
      <div className="rectangle-container">
        <div className="rectangle">
          <div className="bold-header">Tunnel name 1</div>
          <div className="status">
            <div className="green-square"></div>
            <span className="status-text">Established</span>
          </div>
        </div>
        <div className="rectangle">
          <div className="bold-header">Tunnel name 2</div>
          <div className="status">
            <div className="green-square"></div>
            <span className="status-text">Established</span>
          </div>
        </div>
      </div>
    </>
  ),
  "Device Information": (
    <>
      <img src="image 11.png" alt="Device" />
      <div className="row">
        <div className="col-md-6">
          <div>Device Name</div>
          <div>Model</div>
          <div>Product Code</div>
          <div>Serial Number</div>
          <div>Firmware</div>
          <div>Hardware Revision</div>
          <div>Uptime</div>
          <div>CPU Load</div>
          <div>Temperature</div>
          <div>Power Consumption</div>
          <div>DC Source A</div>
          <div>DC Source B</div>
          <div>DC Terminal Block</div>
        </div>
        <div className="col-md-6">
          <div>Balance_A59A</div>
          <div>Balance 20X</div>
          <div>BPL-021X-LTE-E-T-PRM</div>
          <div>293B-D878-A59A</div>
          <div>9.0.0.202209190019-af5aa72671 build</div>
          <div>3</div>
          <div>428 days 18 hours 47 minutes</div>
          <div>
            <div className="progress">
              <div
                className={`progress-bar ${getProgressBarColor(20)}`}
                role="progressbar"
                style={{ width: "20%" }}
                aria-valuenow={20}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            20%
          </div>
          <div>
            <div className="progress">
              <div
                className={`progress-bar ${getProgressBarColor(52)}`}
                role="progressbar"
                style={{ width: "52%" }}
                aria-valuenow={52}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            52.0 °C / 125.6 °F
          </div>
          <div>
            <div className="progress">
              <div
                className={`progress-bar ${getProgressBarColor(20)}`}
                role="progressbar"
                style={{ width: "20%" }}
                aria-valuenow={20}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            Connected 20%
          </div>
          <div>
            <div className="progress">
              <div
                className={`progress-bar ${getProgressBarColor(65)}`}
                role="progressbar"
                style={{ width: "65%" }}
                aria-valuenow={65}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            Connected 65%
          </div>
          <div>No Cable Detected</div>
        </div>
      </div>
    </>
  ),
};
const DashboardTabComponent: React.FC<{ selectedTab: string }> = ({
  selectedTab,
}) => {
  return <div className="tab-content">{tabContentData[selectedTab]}</div>;
};

const SystemTab: React.FC<Props> = ({ deviceName }) => {
  const [selectedTab, setSelectedTab] = useState<string>("Network");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="container">
      <h1>{deviceName}</h1>
      <div className="horizontal-menu">
        <div
          className={`menu-item ${selectedTab === "Network" ? "selected" : ""}`}
          onClick={() => handleTabClick("Network")}
        >
          Network
        </div>
        <div
          className={`menu-item ${
            selectedTab === "SpeedFusion Connect" ? "selected" : ""
          }`}
          onClick={() => handleTabClick("SpeedFusion Connect")}
        >
          SpeedFusion Connect
        </div>
        <div
          className={`menu-item ${selectedTab === "VPN" ? "selected" : ""}`}
          onClick={() => handleTabClick("VPN")}
        >
          VPN
        </div>
        <div
          className={`menu-item ${
            selectedTab === "Device Information" ? "selected" : ""
          }`}
          onClick={() => handleTabClick("Device Information")}
        >
          Device Information
        </div>
        <div className="underline"></div>
      </div>
      <DashboardTabComponent selectedTab={selectedTab} />
    </div>
  );
};

export default SystemTab;
