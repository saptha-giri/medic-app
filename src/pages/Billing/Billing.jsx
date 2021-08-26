import React from 'react';
import "../styles/style.css";

const Billing = () => {
    return (
        <div className="position-container">
            <h3>Patient Billing</h3>
            <div className="root-container">
                <div className="left-split">
                    <h4>Current Billing Status</h4>
                    <table style={{ borderCollapse: "collapse", width: "98%", textAlign: "left" }}>
                        <tr>
                            <td>Paitent Name</td>
                            <td>Hari Haran</td>
                        </tr>
                        <tr>
                            <td>PaitentID</td>
                            <td>ADY1242</td>
                        </tr>
                        <tr>
                            <td>Age/Gender</td>
                            <td>27Y/Male</td>
                        </tr>

                        <tr>
                            <td>Total Amount</td>
                            <td>370 INR</td>
                        </tr>
                        <tr>
                            <td>Discount</td>
                            <td>10 INR</td>
                        </tr>
                        <tr>
                            <td>Paid Amount</td>
                            <td>130 INR</td>
                        </tr>
                        <tr>
                            <td>Balance</td>
                            <td>230 INR</td>
                        </tr>
                    </table>
                    <div className="root-container left-split" style={{ marginTop: '20px' }}>
                        <div className="label-split">
                            <label>Payable Amount</label>
                        </div>
                        <div className="content-split">
                            <input type="text" id="amount" name="payabaleAmount" />
                        </div>
                    </div>
                    <div className="root-container left-split">
                        <div className="label-split">
                            <label>Payable Mode</label>
                        </div>
                        <div className="content-split">
                            <select style={{ width: "40%",height: "30px" }} name="paymentmode" id="payment">
                                <option value="card">Card</option>
                                <option value="cash">Cash</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <button>Save</button>
                    </div>
                </div>
                <div style={{ flex: 2 }}>
                    <h4>Previous Transactions</h4>
                    <table className="mytable">
                        <tr>
                            <th>Sno</th>
                            <th>Date</th>
                            <th>Paid Amount</th>
                            <th>Payment Mode</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>3rd Feb 2020</td>
                            <td>25 INR</td>
                            <td>card</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>6th Feb 2020</td>
                            <td>105 INR</td>
                            <td>Cash</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Billing;