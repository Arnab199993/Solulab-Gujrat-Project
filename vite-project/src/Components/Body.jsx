import React from 'react'

const Body = () => {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <div>
                    <img style={{ marginLeft: "67px", marginTop: "36px" }} src={"Model.png"} />
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        <p style={{ marginLeft: "133px", marginTop: "67px", color: "#6B6B6B" }}>Gender</p>
                        <p style={{ marginLeft: "133px", lineHeight: "6px" }}>Female</p>
                    </div>
                    <div>
                        <p style={{ marginLeft: "138px", marginTop: "67px", color: "#6B6B6B" }}>Birthday</p>
                        <p style={{ marginLeft: "138px", lineHeight: "6px" }}>Feb 24th,1997</p>
                    </div>
                    <div>
                        <p style={{ marginLeft: "139px", marginTop: "67px", color: "#6B6B6B" }}>Phone Number</p>
                        <p style={{ marginLeft: "139px", lineHeight: "6px" }}>(239) 555-0108</p>
                    </div>
                    <div>
                        <p style={{ marginLeft: "138px", marginTop: "58px", color: "#6B6B6B" }}>Registered Date</p>
                        <p style={{ marginLeft: "138px", lineHeight: "6px" }}>Feb 24th,1997</p>
                    </div>
                </div>
            </div>


            <div style={{ display: "flex" }}>
                <div >
                    <h2 style={{ marginLeft: "44px", lineHeight: "4px" }}>Diane Cooper</h2>
                    <p style={{ color: "#6B6B6B", marginLeft: "42px", lineHeight: "5px" }}>diane.cooper@example.com</p>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>

                        <div >
                            <div style={{ fontSize: "20px" }}>
                                <span>15</span>
                            </div>
                            <div style={{ fontSize: "12px", color: "#6B6B6B" }}>
                                Past
                            </div>
                        </div>


                        <div >
                            <div style={{ fontSize: "20px" }}>
                                <span>02</span>
                            </div>
                            <div style={{ fontSize: "12px", color: "#6B6B6B" }}>
                                Upcoming
                            </div>
                        </div>



                    </div>

                </div>


                <div style={{ display: "flex" }}>
                    <div>
                        <p style={{ marginLeft: "65px", color: "#6B6B6B" }}>Street Address</p>
                        <p style={{ marginLeft: "65px", fontSize: "14px" }}>Jl.Diponegoro No.21</p>
                    </div>
                    <div>
                        <p style={{ marginLeft: "70px", color: "#6B6B6B" }}>City</p>
                        <p style={{ marginLeft: "70px", fontSize: "14px" }}>Cilacap</p>
                    </div>
                    <div>
                        <p style={{ marginLeft: "190px", color: "#6B6B6B" }}>Zip Code</p>
                        <p style={{ marginLeft: "190px", fontSize: "14px" }}>655849</p>
                    </div>
                    <div>
                        <p style={{ marginLeft: "175px", color: "#6B6B6B" }}>Member Status</p>
                        <p style={{ marginLeft: "175px", fontSize: "14px" }}>Active Member</p>
                    </div>
                </div>
            </div>


            <div style={{ display: "flex", marginTop: "25px" }} >
                <div style={{ border: "3px solid #F5F5F5", width: "180PX", height: "20px", marginTop: "8px", marginLeft: "20px", padding: '5px', borderRadius: "5px" }}>
                    <span style={{ display: "flex", justifyContent: "center", fontSize: "14px" }}>Send Message</span>
                </div>
                <div style={{ display: "flex", marginLeft: "103px", backgroundColor: "#F8F8F8" }}>
                    <div style={{ border: "3px solid #F5F5F5", width: "180PX", height: "20px", padding: '5px', borderRadius: "5px" }}>
                        <span style={{ display: "flex", justifyContent: "center", color: "#4469BA", fontSize: "12px", backgroundColor: "#FFFFFF", padding: "7px" }}>Upcoming Assignment</span>
                    </div>
                    <div style={{ marginLeft: "10px", border: "3px solid #F5F5F5", width: "160PX", height: "20px", padding: '5px', borderRadius: "5px" }}>
                        <span style={{ display: "flex", justifyContent: "center", color: "#6B6B6B", fontSize: "12px" }}>Past Appointments</span>
                    </div>
                    <div style={{ marginLeft: "10px", border: "3px solid #F5F5F5", width: "160PX", height: "20px", padding: '5px', borderRadius: "5px", backgroundColor: "#F8F8F8" }}>
                        <span style={{ display: "flex", justifyContent: "center", color: "#6B6B6B", fontSize: "12px", }}>Medical Records</span>
                    </div>
                </div>
            </div>


            <div style={{ marginLeft: "100px" }}>
                <div>
                    Files
                </div>
                <div>
                    a
                </div>
                <div>
                    b
                </div>

                <div>
                    c
                </div>
                <div>
                    d
                </div>
            </div>






        </div>
    )
}

export default Body