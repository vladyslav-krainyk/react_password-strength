import React, { useEffect, useState } from "react";
import {
  PasswordStrengthBarConfig,
  passwordStrengthToBarConfig,
} from "../../utils/password-strength/passwordStrengthUtils";
import { getPasswordStrength } from "../../utils/password-strength/getPasswordStrength";
import { Helmet } from "react-helmet";
import "./Input.css";

export const Input: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [strengthPasswordLevels, setStrengthPasswordLevels] =
    useState<PasswordStrengthBarConfig>(
      passwordStrengthToBarConfig[getPasswordStrength(password)],
    );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const newStrengthPasswordLevels: PasswordStrengthBarConfig =
      passwordStrengthToBarConfig[getPasswordStrength(password)];
    setStrengthPasswordLevels(newStrengthPasswordLevels);
    console.log(strengthPasswordLevels);
  }, [password]);

  return (
    <div className="strength-wrapper">
      <Helmet>
        <title>Password</title>
      </Helmet>
      <input
        type="password"
        value={password}
        onChange={handleInputChange}
        placeholder="Enter your password"
      />

      <div className="strength-meter">
        {strengthPasswordLevels.map((strength: string, index: number) => (
          <div key={index} className={`strength-indicator ${strength}`} />
        ))}
      </div>
    </div>
  );
};
