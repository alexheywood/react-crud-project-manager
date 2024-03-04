import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs";

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
    const [url, setUrl] = useState();

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
                setUrl(res.data.url)
            })
            .catch(err => console.log(err))

    }, [])


    return (
        <div className="container w-75">
            <div className="container-md h-auto my-5">
                <Link className="mb-2" to="/" alt="Go back"><BsArrowLeftSquareFill size={30} /></Link>
                <Link to={`/update/${id}`} className="btn btn-success mx-4 btn-sm">Update</Link>
                <div className="my-3">
                    <h1>Process Details</h1>
                    <small>Process ID: {id}</small><br />
                    <small>URL: <a href={url}>{url}</a></small>
                </div>
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">Name:</th>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <th scope="row">Description:</th>
                            <td>{description}</td>
                        </tr>
                        <tr>
                            <th scope="row">Service Area:</th>
                            <td>{serviceArea}</td>
                        </tr>
                        <tr>
                            <th scope="row">Owner:</th>
                            <td>{owner}</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Checklist:</h3>
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">Build completed?</th>
                            <td>{hasBuild ? <BsCheckCircleFill color='green' /> : <BsFillXCircleFill color='red' />}</td>
                        </tr>
                        <tr>
                            <th scope="row">Tests completed?</th>
                            <td>{hasTests ? <BsCheckCircleFill color='green' /> : <BsFillXCircleFill color='red' />}</td>
                        </tr>
                        <tr>
                            <th scope="row">Content confirmed?</th>
                            <td>{hasContent ? <BsCheckCircleFill color='green' /> : <BsFillXCircleFill color='red' />}</td>
                        </tr>
                        <tr>
                            <th scope="row">Translations complete?</th>
                            <td>{hasTranslation ? <BsCheckCircleFill color='green' /> : <BsFillXCircleFill color='red' />}</td>
                        </tr>
                        <tr>
                            <th scope="row">Passed the verify script?</th>
                            <td>{passedVerify ? <BsCheckCircleFill color='green' /> : <BsFillXCircleFill color='red' />}</td>
                        </tr>
                        <tr>
                            <th scope="row">Has the process been successfully migrated?</th>
                            <td>{hasMigrated ? <BsCheckCircleFill color='green' /> : <BsFillXCircleFill color='red' />}</td>
                        </tr>

                    </tbody>
                </table>


            </div>
        </div>
    )
}