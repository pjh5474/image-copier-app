import React, { useState, useEffect } from "react";
import ImageDisplay from "./components/ImageDisplay";
import Controls from "./components/Controls";

const App = () => {
  const [imageUrl, setImageUrl] = useState("/images/X.png"); // 디폴트 이미지 경로
  const [imageIndex, setImageIndex] = useState(0);
  const imageList = [
    "/images/X.png",
    "/images/O.png",
    "/images/dog.jpg" /* ... */,
  ];

  const loadNextImage = () => {
    if (imageIndex < imageList.length - 1) {
      setImageIndex(imageIndex + 1); // 다음 이미지 인덱스로 이동
      setImageUrl(imageList[imageIndex + 1]); // 이미지 경로 변경
    } else {
      // 이미지 목록의 끝에 도달하면 처음 이미지로 돌아감
      setImageIndex(0);
      setImageUrl(imageList[0]);
    }
  };

  useEffect(() => {
    // 앱 초기화 시, 처음 이미지 로드
    setImageUrl(imageList[0]);
  }, []);

  return (
    <div>
      <ImageDisplay imageUrl={imageUrl} />
      <Controls onCopyImage={loadNextImage} imageUrl={imageUrl} />
    </div>
  );
};

export default App;
