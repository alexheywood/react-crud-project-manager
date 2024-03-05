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
    const [hasDiscovery, setHasDiscovery] = useState(false);
    const [hasBuild, setHasBuild] = useState(false);
    const [hasTests, setHasTests] = useState(false);
    const [hasContent, setHasContent] = useState(false);
    const [hasTranslation, setHasTranslation] = useState(false);
    const [passedVerify, setPassedVerify] = useState(false);
    const [hasMigrated, setHasMigrated] = useState(false)


    const navigate = useNavigate();


    function submitData() {

        axios.post("http://localhost:3001/create",
            {
                name,
                description,
                serviceArea,
                owner,
                url,
                hasDiscovery,
                hasBuild,
                hasTests,
                hasContent,
                hasTranslation,
                passedVerify,
                hasMigrated
            }).then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }



    return (
        <form onSubmit={submitData}>
            <div className="container">
                <div className="row">
                    <div className="mt-5 col-12 col-md-6">
                        <h1>Create New</h1>
                        <div className="w-100">
                            <div className="mb-2">
                                <label htmlFor="name">Name:</label>
                                <input required onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="Process Name" className="form-control"></input>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="description">Description:</label>
                                <input required onChange={(e) => setDescription(e.target.value)} id="description" type="text" placeholder="Process Description" className="form-control"></input>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="url">URL:</label>
                                <input onChange={(e) => setUrl(e.target.value)} type="text" id="url" placeholder="Granicus Form URL" className="form-control"></input>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="owner">Owner:</label>
                                <input required onChange={(e) => setOwner(e.target.value)} id="owner" type="text" placeholder="Process Owner" className="form-control"></input>
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
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 col-12 col-md-6">

                        <h3 className="mt-0 mt-md-5">Checklist:</h3>
                        <small className="">Please check any actions that have already been completed:</small>
                        <hr />
                        <div className="mb-2">
                            <input
                                type="checkbox"
                                id="hasDiscovery"
                                onChange={(e) => setHasDiscovery(e.target.checked)}
                            />
                            <label className="mx-2" htmlFor="hasDiscovery">Discovery completed</label>
                        </div>
                        <div className="mb-2">
                            <input
                                type="checkbox"
                                id="hasBuild"
                                onChange={(e) => setHasBuild(e.target.checked)}
                            />
                            <label className="mx-2" htmlFor="hasTests">Process built</label>
                        </div>
                        <div className="mb-2">
                            <input
                                type="checkbox"
                                id="hasTests"
                                onChange={(e) => setHasTests(e.target.checked)}
                            />
                            <label className="mx-2" htmlFor="hasTests">Tests completed</label>
                        </div>
                        <div className="mb-2">
                            <input
                                type="checkbox"
                                id="hasContent"
                                onChange={(e) => setHasContent(e.target.checked)}
                            />
                            <label className="mx-2" htmlFor="hasContent">Content confirmed</label>
                        </div>
                        <div className="mb-2">
                            <input
                                type="checkbox"
                                id="hasTranslation"
                                onChange={(e) => setHasTranslation(e.target.checked)}
                            />
                            <label className="mx-2" htmlFor="hasTranslation">Translation confirmed</label>
                        </div>
                        <div className="mb-2">
                            <input
                                type="checkbox"
                                id="passedVerify"
                                onChange={(e) => setPassedVerify(e.target.checked)}
                            />
                            <label className="mx-2" htmlFor="passedVerify">Passed verification scripts</label>
                        </div>
                        <div className="mb-2">
                            <input
                                type="checkbox"
                                id="hasMigrated"
                                onChange={(e) => setHasMigrated(e.target.checked)}
                            />
                            <label className="mx-2" htmlFor="hasMigrated">Successfully migrated</label>
                        </div>
                    </div>


                    <div className="d-flex my-3">
                        <Link to="/" className="btn btn-danger">Cancel</Link>
                        <button className="btn btn-large btn-success mx-2" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </form >
    )
}