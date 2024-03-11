import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export default function Processes() {

    const [processList, setProcessList] = useState([])
    const [searchTerm, setSearchTerm] = useState('')


    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(res => {
                const sortedData = res.data.sort((a, b) => a.name.localeCompare(b.name));

                setProcessList(sortedData);

            }
            )
            .catch(err => console.log(err))

        setProcessList(processList.toSorted())

        countCompleted()

    }, [])


    function countCompleted() {

        let complete = 0;
        let incomplete = 0;

        processList.forEach((item) => item['complete'] ? complete++ : incomplete++)

        setCompleted(complete)
        setIncomeplete(incomplete)

    }


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

            <div className="container">

                <h1 className='mt-5'>Projects List</h1>
                <div className="d-flex row">
                    <div className="col">
                        <Link to="/create" className="btn btn-primary my-3">Create New</Link>
                    </div>
                    <div className="col">
                        <form className="form-inline float-right">
                            <input value={searchTerm} onChange={(e) => {
                                setSearchTerm(e.target.value)
                            }} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        </form>
                    </div>
                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="col-2">Name</th>
                            <th className="col-2">Description</th>
                            <th className="col-2">Service Area</th>
                            <th className="col-1 text-center">Status</th>
                            <th className="col-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            processList.filter(item => item['name'].toLowerCase().includes(searchTerm)).map((process) => {

                                return (
                                    <tr key={process.name}>
                                        <td><strong><Link className="text-black" to={`/process/${process._id}`}>{process.name}</Link></strong></td>
                                        <td>{process.description}</td>
                                        <td>{process.serviceArea}</td>
                                        <td className="text-center">{process.complete ? <BsCheckCircleFill color='green' /> : <BsFillXCircleFill color='red' />} </td>
                                        <td className="my-3 text-center">
                                            <Link to={`/update/${process._id}`} className="my-md-0 my-3 mx-sm-1 mx-lg-3"><MdModeEdit size={20} /></Link>
                                            <button className="btn" onClick={(e) => handleDelete(process._id)}><MdDeleteForever color='red' size={22} /></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div >
        </>
    )
}