import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function CreateProcess() {


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [serviceArea, setServiceArea] = useState('');
    const [owner, setOwner] = useState('');
    const [url, setUrl] = useState('');
    const navigate = useNavigate();


    function submitData() {

        axios.post("http://localhost:3001/create",
            {
                name,
                description,
                serviceArea,
                owner,
                url
            }).then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }



    return (
        <form onSubmit={submitData}>
            <div className="container-md">
                <div className="mt-5">
                    <h1>Create New</h1>
                    <div className="w-50">
                        <div className="mb-2">
                            <label htmlFor="">Name:</label>
                            <input required onChange={(e) => setName(e.target.value)} type="text" placeholder="Process Name" className="form-control"></input>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Description:</label>
                            <input required onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Process Description" className="form-control"></input>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Owner:</label>
                            <input required onChange={(e) => setOwner(e.target.value)} type="text" placeholder="Process Owner" className="form-control"></input>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">URL:</label>
                            <input onChange={(e) => setUrl(e.target.value)} type="text" placeholder="Granicus Form URL" className="form-control"></input>
                        </div>
                        <div className="mb-2">
                            <label className="d-block" htmlFor="">Service Area:</label>
                            <select required onChange={(e) => setServiceArea(e.target.value)} className="w-100 p-1 rounded">
                                <option value="C1V">C1V</option>
                                <option value="Highways Management">Highways Maintenance</option>
                                <option value="Waste Management">Waste Management</option>
                                <option value="Benefits">Benefits</option>
                                <option value="Council Tax">Council Tax</option>
                                <option value="Social Services">Social Services</option>
                                <option value="Enforcement">Enforcement</option>
                            </select>

                            <div className="d-flex mt-3">
                                <Link to="/" className="btn btn-danger">Cancel</Link>
                                <button className="btn btn-large btn-success mx-2" type="submit">Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </form >
    )
}