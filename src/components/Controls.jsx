import React, { useState } from "react";
import axios from "axios"; // HTTP 요청을 보내기 위해 axios 사용

const Controls = ({ onCopyImage, imageUrl }) => {
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleNumberChange = (e) => {
    console.log(e.target.value);
    setSelectedNumber(Number(e.target.value));
  };

  const copyImage = () => {
    axios
      .post(`http://localhost:3001/copy-image/${selectedNumber}`, { imageUrl })
      .then((response) => {
        console.log(response.data.message); // 성공적으로 복사됨
        onCopyImage(); // 이미지 복사가 성공하면 다음 이미지 표시
      })
      .catch((error) => {
        console.error(error.response.data.error);
      });
  };

  return (
    <div>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((number) => (
        <label key={number}>
          <input
            type="radio"
            name="number"
            value={number}
            checked={selectedNumber == parseInt(number)}
            onChange={handleNumberChange}
          />
          {number}
        </label>
      ))}
      {/* <input
        type="number"
        value={selectedNumber}
        onChange={handleNumberChange}
      /> */}
      <button onClick={copyImage}>이미지 복사</button>
    </div>
  );
};

export default Controls;
