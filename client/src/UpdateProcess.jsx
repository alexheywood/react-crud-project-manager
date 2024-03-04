import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UpdateProcess() {

    const { id } = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [serviceArea, setServiceArea] = useState('');
    const [owner, setOwner] = useState('');
    const [hasBuild, setHasBuild] = useState();
    const [hasTests, setHasTests] = useState();
    const [hasContent, setHasContent] = useState();
    const [hasTranslation, setHasTranslation] = useState();
    const [passedVerify, setPassedVerify] = useState();
    const [hasMigrated, setHasMigrated] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/getProcess/' + id)
            .then(res => {
                console.log(res)
                setName(res.data.name);
                setDescription(res.data.description)
                setServiceArea(res.data.serviceArea)
                setOwner(res.data.owner)
                setHasBuild(res.data.hasBuild)
                setHasTests(res.data.hasTests)
                setHasContent(res.data.hasContent)
                setHasTranslation(res.data.hasTranslation)
                setPassedVerify(res.data.passedVerify)
                setHasMigrated(res.data.hasMigrated)
            })
            .catch(err => console.log(err))

    }, [])

    function updateData(e) {
        e.preventDefault();
        axios.put("http://localhost:3001/updateProcess/" + id, { name, description, serviceArea, owner, hasBuild, hasTests, hasContent, hasTranslation, passedVerify, hasMigrated })
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => res.json(err))
    }


    return (
        <div className="container min-vh-100 mt-5 w-md-50">
            <form onSubmit={updateData} className="w-md-50">
                <h1>Update Process</h1>
                <div className="mb-2">
                    <label htmlFor="">Name:</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Process Name" className="form-control"></input>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Description:</label>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Process Description" className="form-control"></input>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Owner:</label>
                    <input value={owner} onChange={(e) => setOwner(e.target.value)} type="text" placeholder="Process Owner" className="form-control"></input>
                </div>

                <div className="mb-2">
                    <label className="d-block" htmlFor="">Service Area:</label>
                    <select value={serviceArea} className="w-100 p-1 rounded" onChange={(e) => setServiceArea(e.target.value)}>
                        <option value="C1V">C1V</option>
                        <option value="Highways Management">Highways Maintenance</option>
                        <option value="Waste Management">Waste Management</option>
                        <option value="Benefits">Benefits</option>
                        <option value="Council Tax">Council Tax</option>
                        <option value="Social Services">Social Services</option>
                        <option value="Enforcement">Enforcement</option>
                    </select>
                </div>
                <h3>Checklist:</h3>
                <div className="mb-2">
                    <label htmlFor="hasBuild">Build completed?</label>
                    <div className="form-check">
                        <input onChange={(e) => setHasBuild(e.target.value)} className="form-check-input" type="checkbox" id="hasBuild" name="Yes" value={true}></input>
                        <label className="form-check-label">Yes</label>
                    </div>
                </div>

                <div className="d-flex mt-3">
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                    <button className="btn btn-large btn-success mx-2" type="submit">Submit</button>

                </div>
            </form >
        </div >
    )
}