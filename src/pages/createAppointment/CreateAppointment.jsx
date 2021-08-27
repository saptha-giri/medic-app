import React, { useState } from "react";
import '../styles/style.css';

const CreateAppointment = () => {

    const [salutation, setSalutation] = useState("mr");
    const [gender, setGender] = useState("male");
    const [name, setName] = useState("");
    const [dob, setDob] = useState(new Date());
    const [age, setAge] = useState("");
    const [appointmentDate, setAppointmentDate] = useState(new Date());
    const [phoneNo, setPhoneNo] = useState('');
    const [country, setCountry] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postal, setPostal] = useState("");
    const [scanlist, setScanlist] = useState("");
    const [scanAmount, setScanAmount] = useState(0);
    const [discount, setDiscount] = useState("");
    const [selectedScan, setSelectedScan] = useState({});
    const [scans, setScans] = useState([]);


    function calculateAge(birthday) {
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    const validateField = (event) => {
        console.log(event.target.name, event.target.value);
        if (event.target.name === "salutation") {
            setSalutation(event.target.value);
            if (event.target.value === "mr") {
                setGender("male");
            } else {
                setGender("female");
            }
        }

        if (event.target.name === "gender") {
            setGender(event.target.value);

            if (event.target.value === "male") {
                setSalutation("mr");
            } else {
                setSalutation("mrs/ms");
            }
        }

        if (event.target.name === "name") {
            setName(event.target.value);
        }

        if (event.target.name === "dob") {
            let selectDob = event.target.value;
            let calCulatedAge = calculateAge(new Date(selectDob));

            setDob(selectDob);
            setAge(calCulatedAge);
        }

        if (event.target.name === "age") {
            setAge(event.target.value);
        }

        if (event.target.name === "appointmentDate") {
            setAppointmentDate(event.target.value);
        }

        if (event.target.name === "phoneno") {
            setPhoneNo(event.target.value);
        }

        if (event.target.name === "country") {
            setCountry(event.target.value);
        }

        if (event.target.name === "address1") {
            setAddress1(event.target.value);
        }
        if (event.target.name === "address2") {
            setAddress2(event.target.value);
        }
        if (event.target.name === "state") {
            setState(event.target.value);
        }
        if (event.target.name === "city") {
            setCity(event.target.value);
        }
        if (event.target.name === "postal") {
            setPostal(event.target.value);
        }

        if (event.target.name === "scanlist") {
            let scanItem = event.target.value;
            setScanlist(scanItem);
            let selectedObj;
            for (var i = 0; i < autoSuggest.length; i++) {
                for (let key in autoSuggest[i]) {
                    if (autoSuggest[i][key].indexOf(scanItem) !== -1) {
                        selectedObj = autoSuggest[i];
                        setSelectedScan(selectedObj);
                    }
                }
            }

            setScanAmount(selectedObj.amount);
        }

        if (event.target.name === "discount") {
            setDiscount(event.target.value);
        }
    }

    const handleAddClick = () => {

        if (scanlist === "" && discount === '') return

        let scanlistObject = JSON.parse(JSON.stringify(selectedScan));
        scanlistObject.discount = discount;
        scanlistObject.total = scanlistObject.amount - discount;
        setScans(oldArray => [...oldArray, scanlistObject]);
    }

    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        console.log("event");
    }


    const autoSuggest = [
        {
            "id": "1",
            "medicalBillName": "CT Brain",
            "amount": "2000",
            "maxDiscount": "100 INR",
            "modality": "CT"
        },
        {
            "id": "2",
            "medicalBillName": "CT PNS",
            "amount": "1000",
            "maxDiscount": "200 INR",
            "modality": "CT"
        },
        {
            "id": "3",
            "medicalBillName": "MRI Brain",
            "amount": "3000",
            "maxDiscount": "300 INR",
            "modality": "MRI"
        },
        {
            "id": "4",
            "medicalBillName": "MRI PNS",
            "amount": "2400",
            "maxDiscount": "30 %",
            "modality": "MRI"
        },
        {
            "id": "5",
            "medicalBillName": "GLUCOSE FASTING",
            "amount": "130",
            "maxDiscount": "10 %",
            "modality": "LAB"
        },
        {
            "id": "6",
            "medicalBillName": "SUGAR TESTING",
            "amount": "300",
            "maxDiscount": "5 %",
            "modality": "LAB"
        }
    ];

    const options = autoSuggest.map((number) =>
        <option key={number.id}>{number.medicalBillName}</option>
    );


    const tr = scans.map((scan, index) =>
        <tr key={scan.id}>
            <td>{(index + 1)}</td>
            <td>{scan.medicalBillName}</td>
            <td>{scan.amount}</td>
            <td>{scan.discount}</td>
            <td>{scan.total}</td>
        </tr>
    )

    return (
        <form className="position-container" onSubmit={handleSubmit}>
            <h3>Patient Details</h3>

            <div className="root-container">

                <div className="left-split">
                    <div className="root-container">
                        <div className="root-container left-split">
                            <div className="label-split">
                                <label>Patient name</label>
                            </div>
                            <div className="content-split">
                                <select name="salutation" required id="salutation" value={salutation} onChange={validateField}>
                                    <option value="mr">Mr</option>
                                    <option value="mrs/ms">Mrs/Ms</option>
                                </select>
                                <input type="text" placeholder="Enter name" required value={name} name="name" style={{ width: "68%", marginLeft: "10px" }} onChange={validateField} />
                            </div>
                        </div>
                        <div className="root-container right-split">
                            <div className="label-split">
                                <label>Gender</label>
                            </div>
                            <div className="content-split">
                                <div onChange={validateField}>
                                    <input type="radio" id="male" name="gender" required checked={gender === "male"} value="male" onChange={validateField} />
                                    <label htmlFor="male">Male</label>
                                    <input type="radio" id="female" name="gender" required checked={gender === "female"} value="female" onChange={validateField} />
                                    <label htmlFor="female">Female</label>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="root-container">
                        <div className="root-container left-split">
                            <div className="label-split">
                                <label>DOB</label>
                            </div>
                            <div className="content-split">
                                <input type="date" id="dob" value={dob} required name="dob" style={{ width: "90%" }} onChange={validateField} />
                            </div>
                        </div>
                        <div className="root-container right-split">
                            <div className="label-split">
                                <label>Age</label>
                            </div>
                            <div className="content-split">
                                <input type="text" name="age" value={age} required style={{ width: "90%", marginRight: "10px" }} onChange={validateField} />
                                <select name="dobyears" id="dobyears" required>
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
                                <input type="date" id="appointmentDate" name="appointmentDate" required value={appointmentDate} style={{ width: "90%" }} onChange={validateField} />
                            </div>
                        </div>
                        <div className="root-container right-split">
                            <div className="label-split">
                                <label>Phone No</label>
                            </div>
                            <div className="content-split">
                                <input type="text" name="phoneno" style={{ width: "98%" }} required value={phoneNo} onChange={validateField} />
                            </div>
                        </div>
                    </div>
                    <div className="root-container">
                        <div className="root-container left-split">
                            <div className="label-split">
                                <label>Address</label>
                            </div>
                            <div className="content-split" style={{ flex: 5, flexDirection: 'column', justifyContent: "space-between" }}>
                                <input type="text" placeholder="Street Address" required name="address1" style={{ marginBottom: "5px" }} value={address1} onChange={validateField} />
                                <input type="text" placeholder="Street Address2" required name="address2" value={address2} onChange={validateField} />
                                <div className="root-container right-split">
                                    <div className="label-split">
                                        <input type="text" placeholder="city" required name="city" style={{ width: "95%" }} value={city} onChange={validateField} />
                                    </div>
                                    <div className="label-split">
                                        <input type="text" placeholder="state" required name="state" style={{ width: "98%" }} value={state} onChange={validateField} />
                                    </div>
                                </div>
                                <div className="root-container right-split">
                                    <div className="label-split">
                                        <input type="text" placeholder="Postal/Zip Code" required name="postal" value={postal} onChange={validateField} style={{ width: "95%" }} />
                                    </div>
                                    <div className="label-split">
                                        <select name="country" required id="country" style={{ width: "100%", height: "100%" }} value={country} onChange={validateField}>
                                            <option value="india">India</option>
                                            <option value="usa">USA</option>
                                            <option value="china">China</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="right-split"></div>

            </div>

            <div>
                <h3>Medical Scan Details</h3>
                <div className="medical-scan-container">
                    <label>Scan List</label>
                    <div>
                        <input type="text" required name="scanlist" value={scanlist} onChange={validateField} list="scanlists" />
                        <datalist id="scanlists">
                            {options}
                        </datalist>
                    </div>
                    <label>Scan Amount</label>
                    <h3>{scanAmount}</h3>
                    <label>Discount</label>
                    <input type="text" required name="discount" value={discount} onChange={validateField} />
                    <input type="button" onClick={handleAddClick} value="Add" className="primary-btn" />
                </div>


                {

                    (scans.length > 0) ?
                        <div className="table-container">
                            <table className="mytable">
                                <thead>
                                    <tr>
                                        <th>Sno</th>
                                        <th>Scan Name</th>
                                        <th>Scan Amount</th>
                                        <th>Discount</th>
                                        <th>Total Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tr}
                                </tbody>
                            </table>
                            <input type="submit" onClick={() => { }} value="save" className="primary-btn" />
                            {/* <button style={{ textAlign: "center" }}>Save</button> */}
                        </div>
                        : <></>
                }
            </div>

        </form>
    )
}

export default CreateAppointment;