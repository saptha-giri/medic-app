import React from "react";
import './style.css';

const CreateAppointment = () => {
    return (
        <form className="root-container">
            <div className="left-split">

                <div className="root-container">
                    <div className="root-container left-split">
                        <div className="label-split">
                            <label>Patient name</label>
                        </div>
                        <div className="content-split">
                            <select name="cars" id="cars">
                                <option value="volvo">Mr</option>
                                <option value="saab">Mrs/Ms</option>
                            </select>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="root-container right-split">
                        <div className="label-split">
                            <label>Gender</label>
                        </div>
                        <div className="content-split">
                            <input type="radio" id="age1" name="age" value="male" />
                            <label for="age1">Male</label>
                            <input type="radio" id="age2" name="age" value="female" />
                            <label for="age2">Female</label>
                        </div>
                    </div>
                </div>


                <div className="root-container">
                    <div className="root-container left-split">
                        <div className="label-split">
                            <label>DOB</label>
                        </div>
                        <div className="content-split">
                            <input type="date" id="birthday" name="birthday" />
                        </div>
                    </div>
                    <div className="root-container right-split">
                        <div className="label-split">
                            <label>Age</label>
                        </div>
                        <div className="content-split">
                            <input type="text" />
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
                            <input type="date" id="birthday" name="birthday" />
                        </div>
                    </div>
                    <div className="root-container right-split">
                        <div className="label-split">
                            <label>Phone No</label>
                        </div>
                        <div className="content-split">
                            <input type="text" />
                        </div>
                    </div>
                </div>






            </div>
            <div className="right-split">

            </div>
        </form>
    )
}

export default CreateAppointment;