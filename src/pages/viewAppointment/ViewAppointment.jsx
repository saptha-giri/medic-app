import React from "react";
import { Link } from "react-router-dom";
import '../styles/style.css';

const ViewAppointment = () => {
    return (
        <div className="position-container">
            <h3>View Appointment</h3>

            <div>
                <div className="medical-scan-container" style={{ marginBottom: "20px" }}>
                    <label>From Date</label>
                    <input type="date" id="from" name="from" />
                    <label>To Date</label>
                    <input type="date" id="to" name="to" />
                    <label>Status</label>
                    <select name="payment" id="payment" style={{height: "30px",width:"15%"}}>
                        <option value="volvo">FullyPaid</option>
                        <option value="saab">Mrs/Ms</option>
                    </select>
                    <label>Common Search</label>
                    <input type="text" placeholder="search" className="table-search" name="search" />
                    <input type="button" onClick={()=>{}} value="search" className="primary-btn"/>
                </div>
                <table className="mytable">
                    <tr>
                        <th>Sno</th>
                        <th>Patient Name</th>
                        <th>Age-Gender</th>
                        <th>Appointment Date</th>
                        <th>Balance Amount</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Hari Haran</td>
                        <td>27-male</td>
                        <td>12-Feb-2020</td>
                        <td>190 INR</td>
                        <td><Link to="/billing">Click to Pay</Link></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Siva Shankar</td>
                        <td>23-male</td>
                        <td>12-Feb-2020</td>
                        <td>240 INR</td>
                        <td><Link to="/billing">Click to Pay</Link></td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default ViewAppointment;