import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MdFileDownloadDone } from "react-icons/md";

export default function UpdateProcess() {

    const { id } = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [serviceArea, setServiceArea] = useState('');
    const [owner, setOwner] = useState('');
    const [url, setUrl] = useState('')
    const [hasDiscovery, setHasDiscovery] = useState(false);
    const [hasBuild, setHasBuild] = useState(false);
    const [hasTests, setHasTests] = useState(false);
    const [hasContent, setHasContent] = useState(false);
    const [hasTranslation, setHasTranslation] = useState(false);
    const [passedVerify, setPassedVerify] = useState(false);
    const [hasMigrated, setHasMigrated] = useState(false);
    const [notes, setNotes] = useState([])
    const [user, setUser] = useState('')
    const [note, setNote] = useState('');
    const [noteAdded, setNoteAdded] = useState(false);

    const navigate = useNavigate();
    let formattedDate = ''

    useEffect(() => {
        axios.get('http://localhost:3001/getProcess/' + id)
            .then(res => {
                console.log(res)
                setName(res.data.name);
                setDescription(res.data.description)
                setServiceArea(res.data.serviceArea)
                setOwner(res.data.owner)
                setUrl(res.data.url)
                setHasDiscovery(res.data.hasDiscovery)
                setHasBuild(res.data.hasBuild)
                setHasTests(res.data.hasTests)
                setHasContent(res.data.hasContent || false)
                setHasTranslation(res.data.hasTranslation)
                setPassedVerify(res.data.passedVerify)
                setHasMigrated(res.data.hasMigrated)
                setNotes(res.data.notes)

            }).catch(err => console.log(err))

    }, [])


    function addNote() {


        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0'); // Day
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Month (January is 0)
        const yyyy = today.getFullYear(); // Year

        formattedDate = dd + '/' + mm + '/' + yyyy;


        if (note) {

            setNotes((prevNotes) => [
                {
                    date: formattedDate.toString(),
                    user: user,
                    content: note
                },
                ...prevNotes,
            ]
            )
        }

        setNoteAdded(true)

    }

    function updateData(e) {

        e.preventDefault();
        axios.put("http://localhost:3001/updateProcess/" + id, {
            name,
            description,
            serviceArea,
            owner,
            hasDiscovery,
            hasBuild,
            hasTests,
            hasContent,
            hasTranslation,
            passedVerify,
            hasMigrated,
            notes,
            complete
        })
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => res.json(err))
    }


    const complete = hasBuild && hasDiscovery && hasContent && hasTranslation && hasTests && hasMigrated && passedVerify

    return (
        <form onSubmit={updateData}>
            <div className="container">
                <div className="row">
                    <div className="mt-5 col-12 col-md-6">
                        <h1>Update</h1>
                        <div className="w-100">
                            <div className="mb-2">
                                <label htmlFor="name">Name:</label>
                                <input required onChange={(e) => {
                                    setName(e.target.value)
                                }} value={name} id="name" type="text" placeholder="Process Name" className="form-control"></input>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="description">Description:</label>
                                <input required onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                                    value={description} id="description" type="text" placeholder="Process Description" className="form-control"></input>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="owner">Owner:</label>
                                <input required onChange={(e) => {
                                    setOwner(e.target.value)
                                }} id="owner" value={owner} type="text" placeholder="Process Owner" className="form-control"></input>
                            </div>
                            <div className="mb-2">
                                <label className="d-block" htmlFor="">Service Area:</label>
                                <select required onChange={(e) => {
                                    setServiceArea(e.target.value)
                                }} value={serviceArea} className="w-100 p-1 rounded">
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
                        <small className="">Please check any actions that have been completed:</small>
                        <hr />
                        <div className="mb-2">
                            <input
                                type="checkbox"
                                id="hasDiscovery"
                                checked={hasDiscovery}
                                onChange={(e) => {
                                    setHasDiscovery(e.target.checked)
                                }}
                            />
                            <label className="mx-2" htmlFor="hasDiscovery">Discovery completed</label>
                        </div>
                        <div className="mb-2">
                            <input
                                type="checkbox"
                                id="hasBuild"
                                onChange={(e) => {
                                    setHasBuild(e.target.checked)
                                }
                                }
                                checked={hasBuild}
                            />
                            <label className="mx-2" htmlFor="hasTests">Process built</label>
                        </div>
                        <div className="mb-2">
                            <input
                                type="checkbox"
                                id="hasTests"
                                onChange={(e) => {
                                    setHasTests(e.target.checked)
                                }}
                                checked={hasTests}
                            />
                            <label className="mx-2" htmlFor="hasTests">Tests completed</label>
                        </div>
                        <div className="mb-2">
                            <input
                                type="checkbox"
                                id="hasContent"
                                onChange={(e) => {
                                    setHasContent(e.target.checked)
                                }}
                                checked={hasContent}
                            />
                            <label className="mx-2" htmlFor="hasContent">Content confirmed</label>
                        </div>
                        <div className="mb-2">
                            <input
                                type="checkbox"
                                id="hasTranslation"
                                checked={hasTranslation}
                                onChange={(e) => {
                                    setHasTranslation(e.target.checked)
                                }}
                            />
                            <label className="mx-2" htmlFor="hasTranslation">Translation confirmed</label>
                        </div>
                        <div className="mb-2">
                            <input
                                type="checkbox"
                                id="passedVerify"
                                checked={passedVerify}
                                onChange={(e) => {
                                    setPassedVerify(e.target.checked)
                                }}
                            />
                            <label className="mx-2" htmlFor="passedVerify">Passed verification scripts</label>
                        </div>
                        <div className="">
                            <input
                                type="checkbox"
                                id="hasMigrated"
                                checked={hasMigrated}
                                onChange={(e) => {
                                    setHasMigrated(e.target.checked)
                                }}
                            />
                            <label className="mx-2" htmlFor="hasMigrated">Successfully migrated</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>Add note:</h3>
                        <div className="mb-2">
                            <div className="mb-2">
                                <label htmlFor="user">User:</label>
                                <input onChange={(e) => {
                                    setUser(e.target.value)
                                }}
                                    value={user} id="user" type="text" placeholder="" className="form-control w-md-50"></input>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="note">Note:</label>
                                <textarea onChange={(e) => {
                                    setNote(e.target.value)
                                }}
                                    value={note} id="date" placeholder="" className="form-control w-md-50"></textarea>
                            </div>
                            {noteAdded ? <MdFileDownloadDone size={30} color='green' /> : <button type="button" onClick={addNote}>Add note</button>}
                        </div>
                    </div>
                </div>
                <div className="d-flex my-3">
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                    <button className="btn btn-large btn-success mx-2" type="submit">Submit</button>
                </div>

            </div>
        </form >
    )
}