import React from 'react'
import Body from './Body'




const FrontPage = () => {
    return (
        <div style={{ border: "1px solid #FFFFFF", height: "681px", width: " 1171px", marginLeft: "200px", backgroundColor: "#FFFFFF" }}>
            <div style={{ display: "flex" }}>
                <div>
                    <div style={{ border: "1px solid #ECECEC", width: "87px", height: "680px" }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "85px", height: "71px", border: "1px solid #29B712", backgroundColor: "#29B712" }}>
                            <div style={{ border: "1px solid #29B712", width: "46px", height: "46px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={"./Vector.png"} />
                            </div>
                        </div>
                        <div style={{ width: "43px", height: "586px", border: "1px solid #FFFFFF", marginTop: "20px", marginLeft: "17px" }}>
                            <div style={{ marginTop: "5px", marginLeft: "10px" }}>
                                <img height={"25px"} width={"25px"} src={"./Plus.png"} />
                                <span style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.3)", fontWeight: "400" }}>New</span>
                            </div>
                            <div style={{ marginTop: "35px", marginLeft: "10px" }}>
                                <img height={"25px"} width={"25px"} src={"image.png"} />
                                <span style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.3)" }}>Patient</span>
                            </div>
                            <div style={{ marginTop: "35px", marginLeft: "10px" }}>
                                <img height={"25px"} width={"25px"} src={"Folder.png"} />
                                <span style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.3)" }}>Folder</span>
                            </div>
                            <div style={{ marginTop: "35px", marginLeft: "10px" }}>
                                <img height={"25px"} width={"25px"} src={"Upload.png"} />
                                <span style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.3)" }}>Upload</span>
                            </div>
                            <div style={{ marginTop: "35px", marginLeft: "10px" }}>
                                <img height={"25px"} width={"25px"} src={"Documents.png"} />
                                <span style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.3)" }}>Report</span>
                            </div>
                            <div style={{ marginTop: "35px", marginLeft: "10px" }}>
                                <img height={"25px"} width={"25px"} src={"Settings.png"} />
                                <span style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.3)" }}>Settings</span>
                            </div>
                            <div style={{ marginTop: "35px", marginLeft: "10px" }}>
                                <img height={"25px"} width={"25px"} src={"Exit.png"} />
                                <span style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.3)" }}>Loadout</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Body />
                </div>
            </div>

        </div>
    )
}

export default FrontPage