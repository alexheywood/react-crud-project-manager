import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Processes() {

    const [processList, setProcessList] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(res => {
                const sortedData = res.data.sort((a, b) => a.name.localeCompare(b.name));
                setProcessList(sortedData);
            }
            )
            .catch(err => console.log(err))

        setProcessList(processList.toSorted());

    }, [])


    function handleDelete(id) {

        axios.delete('http://localhost:3001/deleteProcess/' + id)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }



    return (
        <>

            <div className="container vh-100">
                <div className="bg-white rounded">
                    <h1 className='mt-5'>Process List</h1>
                    <Link to="/create" className="btn btn-primary my-3">Create New</Link>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className="col-2">Name</th>
                                <th className="col-2">Description</th>
                                <th className="col-2">Service Area</th>
                                <th className="col-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                processList.map((process) => {

                                    return (
                                        <tr key={process.name}>
                                            <td><strong><Link className="text-black" to={`/process/${process._id}`}>{process.name}</Link></strong></td>
                                            <td>{process.description}</td>
                                            <td>{process.serviceArea}</td>
                                            <td className="my-3 text-center">
                                                <Link to={`/update/${process._id}`} className="my-md-0 my-3 btn btn-success mx-sm-1 mx-lg-3">Update</Link>
                                                <button onClick={(e) => handleDelete(process._id)} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}