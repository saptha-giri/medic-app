import React from "react";
import '../styles/style.css';

const CreateAppointment = () => {
    return (
        <div className="position-container">
            <h3>Patient Details</h3>

            <div className="root-container">

                <div className="left-split">
                    <div className="root-container">
                        <div className="root-container left-split">
                            <div className="label-split">
                                <label>Patient name</label>
                            </div>
                            <div className="content-split">
                                <select name="mstatus" id="mstatus">
                                    <option value="volvo">Mr</option>
                                    <option value="saab">Mrs/Ms</option>
                                </select>
                                <input type="text" placeholder="" name="name" style={{width:"68%",marginLeft:"10px"}} />
                            </div>
                        </div>
                        <div className="root-container right-split">
                            <div className="label-split">
                                <label>Gender</label>
                            </div>
                            <div className="content-split">
                                <input type="radio" id="male" name="gender" value="male" />
                                <label for="male">Male</label>
                                <input type="radio" id="female" name="gender" value="female" />
                                <label for="female">Female</label>
                            </div>
                        </div>
                    </div>


                    <div className="root-container">
                        <div className="root-container left-split">
                            <div className="label-split">
                                <label>DOB</label>
                            </div>
                            <div className="content-split">
                                <input type="date" id="dob" name="dob" style={{width:"90%"}}/>
                            </div>
                        </div>
                        <div className="root-container right-split">
                            <div className="label-split">
                                <label>Age</label>
                            </div>
                            <div className="content-split">
                                <input type="text" name="age" style={{width:"90%",marginRight:"10px"}}/>
                                <select name="cars" id="cars">
                                    <option value="Year">Year</option>
                                    <option value="Month">Month</option>
                                    <option value="Day">Day</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className="root-container">
                        <div className="root-container left-split">
                            <div className="label-split">
                                <label>Appointment Date</label>
                            </div>
                            <div className="content-split">
                                <input type="date" id="date" name="ap_date" style={{width:"90%"}}/>
                            </div>
                        </div>
                        <div className="root-container right-split">
                            <div className="label-split">
                                <label>Phone No</label>
                            </div>
                            <div className="content-split">
                                <input type="text" name="phoneno" style={{width:"98%"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="root-container">
                        <div className="root-container left-split">
                            <div className="label-split">
                                <label>Address</label>
                            </div>
                            <div className="content-split" style={{ flex: 7, flexDirection: 'column', justifyContent: "space-between" }}>
                                <input type="text" placeholder="Street Address" name="address1" style={{ marginBottom: "5px" }} />
                                <input type="text" placeholder="Street Address2" name="address2" />
                                <div className="root-container right-split">
                                    <div className="label-split">
                                        <input type="text" placeholder="city" name="city" style={{width:"95%"}} />
                                    </div>
                                    <div className="label-split">
                                        <input type="text" placeholder="state" name="state" style={{width:"98%"}}/>
                                    </div>
                                </div>
                                <div className="root-container right-split">
                                    <div className="label-split">
                                        <input type="text" placeholder="Postal/Zip Code" style={{width:"95%"}}/>
                                    </div>
                                    <div className="label-split">
                                        <select name="Country" id="cars" style={{width:"100%",height:"100%"}}>
                                            <option value="Year">Year</option>
                                            <option value="Month">Month</option>
                                            <option value="Day">Day</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="right-split">

                </div>

            </div>

            <div>
                <h3>Medical Scan Details</h3>
                <div className="medical-scan-container">
                    <label>Scan List</label>
                    <input type="text" />
                    <label>Scan Amount</label>
                    <h3>250</h3>
                    <label>Discount</label>
                    <input type="text" />
                    <button>Add</button>
                </div>
                <table className="mytable">
                    <tr>
                        <th>Sno</th>
                        <th>Scan Name</th>
                        <th>Scan Amount</th>
                        <th>Discount</th>
                        <th>Total Amount</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>CT Brain</td>
                        <td>200</td>
                        <td>10</td>
                        <td>190</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>CT Brain</td>
                        <td>200</td>
                        <td>10</td>
                        <td>190</td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default CreateAppointment;