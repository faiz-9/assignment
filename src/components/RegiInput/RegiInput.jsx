import React, { useState } from 'react';
import './regiinput.scss';

export default function InputGroup({ name, type, label }) {
    const [showErr, setShowErr] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [inputText, setInputText] = useState("");
    const [confirmPwdText, setConfirmPwdText] = useState("");

    const validateEmail = () => {
        if (inputText.length > 0)
            if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(inputText))) {
                setErrMsg("Please Enter Valid Email Address");
                setShowErr(true);
            } else {
                setErrMsg("");
                setShowErr(false);
            }
    }
    const validatePwd = () => {
        if (confirmPwdText.length > 0)
            if (inputText !== confirmPwdText) {
                setErrMsg("Password Did Not Match.")
                setShowErr(true);
            } else {
                setErrMsg("");
                setShowErr(false);
            }
    }
    const validatePhone = () => {
        if (inputText.length > 0)
            if (!(/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/.test(inputText))) {
                setErrMsg("Please Enter Valid Phone Number.")
                setShowErr(true);
            } else {
                setErrMsg("");
                setShowErr(false);
            }
    }

    const handleFocusOut = () => {
        if (name === "email") {
            validateEmail();
        } else if (name === "password") {
            validatePwd();
        } else if (name === "tel") {
            validatePhone();
        }
    }
    return (
        <>

            <label htmlFor={type}>{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                value={inputText}
                onBlur={handleFocusOut}
                onChange={(e) => {
                    setInputText(e.target.value)
                }} />

            {name === "password" &&
                <>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type={"password"}
                        name={"confirmPassword"}
                        id={"confirmPassword"}
                        value={confirmPwdText}
                        onBlur={handleFocusOut}
                        onChange={(e) => {
                            setConfirmPwdText(e.target.value)
                        }} />
                </>
            }

            {
                showErr &&
                <p className="error_msg">{errMsg}</p>
            }
        </>
    )
}
