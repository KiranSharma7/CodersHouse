import styles from './Register.module.css'
import { useState } from 'react'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepOTP from '../Steps/StepOTP/StepOTP'
import StepName from '../Steps/StepName/StepName'
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
import StepUserName from '../Steps/StepUserName/StepUserName'     


const steps={
    1:StepPhoneEmail,
    2:StepOTP,
    3:StepName,
    4:StepAvatar,
    5:StepUserName,
}



const Register = (onNext) => {

    const [step ,setStep]=useState(1)
    const Step=steps[step]

    function onNext(){
        setStep(step + 1)
    }

    
    return (
        <div>
            <Step onNext={onNext}/>
            </div>
    )
}

export default Register
