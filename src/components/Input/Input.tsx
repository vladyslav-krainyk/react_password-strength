import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import './Input.css';
export const Input: React.FC = () => {
    const [password, setPassword] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const getPasswordStrength = () => {
        if (password.length === 0) {
            return ['gray', 'gray', 'gray'];
        }

        if (password.length < 8) {
            return ['red', 'red', 'red'];
        }

        const hasLetters = /[a-zA-z]/.test(password);
        const hasDigits = /[0-9]/.test(password);
        const hasSymbols = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/.test(password);

        switch (true) {
            case hasLetters && hasDigits && hasSymbols:
                return ['green', 'green', 'green'];

            case (hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols):
                return ['yellow', 'yellow', 'gray'];

            case hasDigits || hasSymbols || hasLetters:
                return ['red', 'gray', 'gray'];

            default:
                return ['red', 'red', 'red'];
        }
    };

    const [first, second, third] = getPasswordStrength();

    return (
        <div className='strength-wrapper'>
            <Helmet>
                <title>Password</title>
            </Helmet>
            <input
                type='password'
                value={password}
                onChange={handleInputChange}
                placeholder='Enter your password'
            />

            <div className='strength-meter'>
                <div className={`strength-indicator ${first}`} />
                <div className={`strength-indicator ${second}`} />
                <div className={`strength-indicator ${third}`} />
            </div>
        </div>
    );
};
