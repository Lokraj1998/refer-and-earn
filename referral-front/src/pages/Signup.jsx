import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createUser } from '../api/apiCalls';
 
export const Signup = () => {
 
    const { ref } = useParams();
 
    const [values, setValues] = React.useState({
        userName: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        referBy: ref
    });
    const navigate = useNavigate();
 
    const [error, setError] = useState();
 
    const signUp = async () => {
        try {
            console.log(ref);
            const response = await createUser(values);
            setError()
            setValues({
                userName: "",
                email: "",
                firstName: "",
                lastName: "",
                password: "",
                referBy: ref
            });
            navigate('/');
        } catch (error) {
            const err = error.response.data
            const errorArray = Object.keys(err).map((x) => {
                return x + ": " + err[x]
            })
            setError(errorArray)
            console.log(errorArray);
        }
    };
 
    useEffect(() => {
        console.log({ values });
    }, [values]);
 
 
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
 
 
    return <div style={{ margin: "200px" }}>
 
 
 
        <div className='container' style={{ display: "flex", justifyContent: "center" }}>
            <div className='row'>
 
 
                <div className='row mb-3 mt-3' style={{ display: "flex", justifyContent: "center" }}>
 
                    <div className='col-md-8'>
 
                        < h1>Signup</h1>
 
                    </div>
                </div>
 
                <div className='row mb-3 mt-3' style={{ display: "flex", justifyContent: "center" }}>
                    <div className='col-md-4'>
 
                        <input onChange={handleChange("userName")} value={values.userName} required className="form-control" placeholder="Username" />
 
                    </div>
                    <div className='col-md-4'>
                        <input onChange={handleChange("email")} value={values.email} required className="form-control" placeholder="Email" />
                    </div>
                </div>
 
                <div className='row mt-3 mb-3' style={{ display: "flex", justifyContent: "center" }}>
                    <div className='col-md-4'>
                        <input required onChange={handleChange("firstName")} value={values.firstName} className="form-control" placeholder="Firstname" />
                    </div>
                    <div className='col-md-4'>
                        <input required onChange={handleChange("lastName")} value={values.lastName} className="form-control" placeholder="Lastname" />
                    </div>
                </div>
 
                <div className='row mt-3 mb-3' style={{ display: "flex", justifyContent: "center" }}>
                    <div className='col-md-4'>
                    <input type = 'password' required onChange={handleChange("password")} value={values.password} className="form-control" placeholder="Password" />
                    </div>
                    <div className='col-md-4'>
                        <input onChange={handleChange("referBy")}
                            value={values.referBy}
                            defaultValue={ref}
                            required className="form-control" placeholder="Referance code" />
                    </div>
                </div>
 
                <div className='row mt-3 mb-3' style={{ display: "flex", justifyContent: "center" }}>
                    <button type="submit" onClick={() => signUp()}
                        className="btn btn-primary btn-block col-md-3">Signup</button >
 
                </div> 
                {error && (<div style={{ display: "flex", justifyContent: "center", whiteSpace: "pre-line" }} >
                    <p style={{ color: "red", textAlign: "center" }}>{error.map((x) => {
                        return x + "\n";
                    })}</p>
                </div>)}
 
 
            </div>
        </div>
    </div>;
};