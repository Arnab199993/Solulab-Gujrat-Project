import React from 'react'


const Body = () => {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <div>
                    <img style={{ marginLeft: "67px", marginTop: "36px" }} src={"Model.png"} />
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ boxShadow: " 0 2px 3px -3px #6B6B6B" }}>
                        <p style={{ marginLeft: "133px", marginTop: "67px", color: "#6B6B6B", fontSize: "12px" }}>Gender</p>
                        <p style={{ marginLeft: "133px", lineHeight: "6px", fontWeight: "400", fontSize: "14px", color: "#242831" }}>Female</p>
                    </div>
                    <div style={{ boxShadow: " 0 2px 3px -3px #6B6B6B" }}>
                        <p style={{ marginLeft: "138px", marginTop: "67px", color: "#6B6B6B", fontSize: "12px" }}>Birthday</p>
                        <p style={{ marginLeft: "138px", lineHeight: "6px", fontWeight: "400", fontSize: "14px", color: "#242831" }}>Feb 24th,1997</p>
                    </div>
                    <div style={{ boxShadow: " 0 2px 3px -3px #6B6B6B" }}>
                        <p style={{ marginLeft: "139px", marginTop: "67px", color: "#6B6B6B", fontSize: "12px" }}>Phone Number</p>
                        <p style={{ marginLeft: "139px", lineHeight: "6px", fontWeight: "400", fontSize: "14px", color: "#242831" }}>(239) 555-0108</p>
                    </div>
                    <div style={{ boxShadow: " 0 2px 3px -3px #6B6B6B" }}>
                        <p style={{ marginLeft: "138px", marginTop: "58px", color: "#6B6B6B", fontWeight: "400", fontSize: "12px" }}>Registered Date</p>
                        <p style={{ marginLeft: "138px", lineHeight: "6px", fontSize: "14px", color: "#242831" }}>Feb 24th,1997</p>
                    </div>
                </div>
            </div>


            <div style={{ display: "flex" }}>
                <div >
                    <h2 style={{ marginLeft: "44px", lineHeight: "4px", }}>Diane Cooper</h2>
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
                    <div style={{ boxShadow: " 0 2px 3px -3px #6B6B6B" }}>
                        <p style={{ marginLeft: "65px", color: "#6B6B6B", fontSize: "12px", fontWeight: "400" }}>Street Address</p>
                        <p style={{ marginLeft: "65px", fontSize: "14px", color: "#242831", fontWeight: "400" }}>Jl.Diponegoro No.21</p>
                    </div>
                    <div style={{ boxShadow: " 0 2px 3px -3px #6B6B6B" }}>
                        <p style={{ marginLeft: "65px", color: "#6B6B6B", fontSize: "12px", fontWeight: "400" }}>City</p>
                        <p style={{ marginLeft: "65px", fontSize: "14px", color: "#242831", fontWeight: "400" }}>Cilacap</p>
                    </div>
                    <div style={{ boxShadow: " 0 2px 3px -3px #6B6B6B" }}>
                        <p style={{ marginLeft: "175px", color: "#6B6B6B", fontSize: "12px", fontWeight: "400" }}>Zip Code</p>
                        <p style={{ marginLeft: "175px", fontSize: "14px", color: "#242831", fontWeight: "400" }}>655849</p>
                    </div>
                    <div style={{ boxShadow: " 0 2px 3px -3px #6B6B6B" }}>
                        <p style={{ marginLeft: "180px", color: "#6B6B6B", fontSize: "12px", fontWeight: "400" }}>Member Status</p>
                        <p style={{ marginLeft: "180px", fontSize: "14px", color: "#242831", fontWeight: "400" }}>Active Member</p>
                    </div>
                </div>
            </div>


            <div style={{ display: "flex", marginTop: "25px" }} >
                <div style={{ border: "3px solid #F5F5F5", width: "180PX", height: "20px", marginTop: "8px", marginLeft: "20px", padding: '5px', borderRadius: "5px" }}>
                    <span style={{ display: "flex", justifyContent: "center", fontSize: "14px", fontWeight: "500" }}>Send Message</span>
                </div>
                <div style={{ display: "flex", marginLeft: "75px", backgroundColor: "#F8F8F8", }}>
                    <div style={{ border: "3px solid #F5F5F5", width: "180PX", height: "20px", padding: '5px', borderRadius: "5px" }}>
                        <span style={{ display: "flex", justifyContent: "center", color: "#4469BA", fontSize: "12px", backgroundColor: "#FFFFFF", padding: "7px", fontWeight: "500" }}>Upcoming Appointments</span>
                    </div>
                    <div style={{ marginLeft: "10px", border: "3px solid #F5F5F5", width: "160PX", height: "20px", padding: '5px', borderRadius: "5px", marginTop: "8px" }}>
                        <span style={{ display: "flex", justifyContent: "center", color: "#6B6B6B", fontSize: "12px", fontWeight: "400" }}>Past Appointments</span>
                    </div>
                    <div style={{ marginLeft: "10px", border: "3px solid #F5F5F5", width: "160PX", height: "20px", padding: '5px', borderRadius: "5px", marginTop: "8px", backgroundColor: "#F8F8F8" }}>
                        <span style={{ display: "flex", justifyContent: "center", color: "#6B6B6B", fontSize: "12px", fontWeight: "400" }}>Medical Records</span>
                    </div>
                </div>
            </div>


            <div style={{ display: "flex" }}>
                <div>
                    <div style={{ marginLeft: "24px", marginTop: "59px", fontSize: "16px" }}>
                        <div>
                            <span style={{ fontSize: "16px", fontWeight: "400" }}>Files/Documents</span>
                        </div>
                        <div style={{ marginTop: "29px", width: "185px", height: "49px", border: "1px solid #F9F9F9", backgroundColor: "#F9F9F9" }}>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <img style={{ marginTop: "17px", marginLeft: "20px" }} src={"PDF.png"} />
                                </div>
                                <div style={{ marginTop: "17px" }}>
                                    <span style={{ fontSize: "12px", marginLeft: "10px", fontFamily: "Source Serif 4", fontWeight: "400" }}>Check Up Results.pdf</span>
                                </div>
                            </div>

                        </div>
                        <div style={{ marginTop: "8px", width: "185px", height: "49px", border: "1px solid #F9F9F9", backgroundColor: "#F9F9F9" }}>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <img style={{ marginTop: "17px", marginLeft: "20px" }} src={"PDF.png"} />
                                </div>
                                <div style={{ marginTop: "17px" }}>
                                    <span style={{ fontSize: "12px", marginLeft: "10px", fontFamily: "Source Serif 4", fontWeight: "400" }}>Check Up Results.pdf</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: "8px", width: "185px", height: "49px", border: "1px solid #F9F9F9", backgroundColor: "#F9F9F9" }}>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <img style={{ marginTop: "17px", marginLeft: "20px" }} src={"PDF.png"} />
                                </div>
                                <div style={{ marginTop: "17px" }}>
                                    <span style={{ fontSize: "12px", marginLeft: "10px", fontFamily: "Source Serif 4", fontWeight: "400" }}>Medical Prescription.pdf</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: "8px", width: "185px", height: "49px", border: "1px solid #F9F9F9", backgroundColor: "#F9F9F9" }}>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <img style={{ marginTop: "17px", marginLeft: "20px" }} src={"PDF.png"} />
                                </div>
                                <div style={{ marginTop: "17px" }}>
                                    <span style={{ fontSize: "12px", marginLeft: "10px", fontFamily: "Source Serif 4", fontWeight: "400" }}>Dental X ray result.pdf</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div style={{ marginTop: "20px", marginLeft: "80px", width: "760px", height: "310px", border: "1px solid #F8F8F8", backgroundColor: "#F8F8F8" }}>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ marginLeft: "28px", marginTop: "22px" }}>
                            <span style={{ fontSize: "12px", fontWeight: "400", fontFamily: "Open Sans", color: "#242831" }}>Root Canal Treatment</span>
                        </div>

                        <div style={{ marginRight: "28px", marginTop: "15px" }}>
                            <div style={{ width: "170px", height: "33px", border: "1px solid #F8F8F8", backgroundColor: "#FFFFFF", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <span style={{ fontSize: "12px", fontWeight: "400", fontFamily: "Open Sans", color: "#6B6B6B" }}>Show Previous Treatment</span>
                            </div>
                        </div>
                    </div>



                    <div style={{ display: "flex", border: "1px solid #F8F8F8", marginLeft: "25px", width: "714px", height: "86px", justifyContent: "space-between", backgroundColor: "#FFFFFF", borderRadius: "3px" }}>
                        <div style={{ boxShadow: "2px 0 3px -3px #6B6B6B" }}>
                            <div style={{ marginTop: "13px" }}>
                                <span style={{ fontWeight: "700", fontSize: "24px", color: "#242831", marginLeft: "23px", }}>26th Nov'19</span>
                            </div>
                            <div >
                                <span style={{ marginLeft: "23px", fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>09.00-10.00</span>
                            </div>

                        </div>
                        <div >
                            <div style={{ marginTop: "23px" }}>
                                <span style={{ fontSize: "12px", color: "#6B6B6B" }} >Treatment</span>
                            </div>
                            <div>
                                <span style={{ fontSize: "16px", color: "#242831", fontWeight: "400" }}>Open Access</span>
                            </div>
                        </div>
                        <div>
                            <div style={{ marginTop: "23px", }}>
                                <span style={{ fontSize: "12px", color: "#6B6B6B" }} >Dentist</span>
                            </div>
                            <div>
                                <span style={{ fontSize: "14px", color: "#242831", fontWeight: "400", fontFamily: "open sans" }}>Drg Adam H</span>
                            </div>
                        </div>
                        <div>
                            <div style={{ marginTop: "23px" }}>
                                <span style={{ fontSize: "12px", color: "#6B6B6B" }}>Nurse</span>
                            </div>
                            <div>
                                <span style={{ fontSize: "14px", color: "#242831" }}>Jessicamila</span>
                            </div>
                        </div>







                        <div style={{ display: "flex", marginTop: "38.12px", marginRight: "26px" }}>
                            <div >
                                <img src={"Note.png"} />
                            </div>
                            <div>
                                <span style={{ marginLeft: "6px", color: "#3156C8", fontSize: "12px", fontWeight: "400" }}>Note</span>
                            </div>
                        </div>












                    </div>


                    <div style={{ display: "flex", border: "1px solid #F8F8F8", marginLeft: "25px", width: "714px", height: "86px", justifyContent: "space-between", backgroundColor: "#FFFFFF", marginTop: "15px", borderRadius: "5px" }}>
                        <div style={{ boxShadow: "2px 0 3px -3px #6B6B6B" }}>
                            <div style={{ marginTop: "13px" }}>
                                <span style={{ fontWeight: "700", fontSize: "24px", color: "#242831", marginLeft: "23px" }}>12th Nov'19</span>
                            </div>
                            <div>
                                <span style={{ marginLeft: "23px", fontSize: "12px", fontWeight: "400", color: "#6B6B6B" }}>09.00-10.00</span>
                            </div>

                        </div>
                        <div>
                            <div style={{ marginTop: "23px" }}>
                                <span style={{ fontSize: "12px", color: "#6B6B6B" }}>Treatment</span>
                            </div>
                            <div>
                                <span style={{ fontSize: "16px", color: "#242831", fontWeight: "400" }}>Root Canal</span>
                            </div>
                        </div>
                        <div>
                            <div style={{ marginTop: "23px" }}>
                                <span style={{ fontSize: "12px", color: "#6B6B6B" }} >Dentist</span>
                            </div>
                            <div>
                                <span style={{ fontSize: "14px", color: "#242831", fontWeight: "400", fontFamily: "open sans" }}>Drg Adam H</span>
                            </div>
                        </div>
                        <div>
                            <div style={{ marginTop: "23px" }}>
                                <span style={{ fontSize: "12px", color: "#6B6B6B" }}>Nurse</span>
                            </div>
                            <div >
                                <span style={{ fontSize: "14px", color: "#242831" }}>Jessicamila</span>

                            </div>
                        </div>
                        <div style={{ display: "flex", marginTop: "38.12px", marginRight: "26px" }}>
                            <div  >
                                <img src={"Note.png"} />
                            </div>
                            <div>
                                <span style={{ marginLeft: "6px", color: "#3156C8", fontSize: "12px", fontWeight: "400" }}>Note</span>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default Body