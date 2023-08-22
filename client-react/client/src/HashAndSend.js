import React, { useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

function HashAndSend() {
  const [password, setPassword] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleHashPassword = () => {
    const salt = generateSalt();
    const hashed = hashPassword(password, salt);
    console.log(hashed);
    setHashedPassword(hashed);
  };

  const handleSendHashedPassword = async () => {
    try {
      const response = await axios.post('/api/register', { hashedPassword });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const generateSalt = () => {
    const salt = CryptoJS.lib.WordArray.random(16); // 16 字节的随机盐值
    const saltHex = salt.toString(CryptoJS.enc.Hex);
    return saltHex;
  };

  const hashPassword = (rawPassword, salt) => {
    const dataToHash = rawPassword + salt;
    return CryptoJS.SHA256(dataToHash).toString();
  };

  return (
    <div>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <button onClick={handleHashPassword}>Hash Password</button>
      <button onClick={handleSendHashedPassword}>Send Hashed Password</button>
    </div>
  );
}

export default HashAndSend;
