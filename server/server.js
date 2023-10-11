const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const path = require("path");

const corsOptions = {
  origin: "http://localhost:3000", // 허용할 도메인
  methods: "GET,POST", // 허용할 HTTP 메서드
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cors());
app.options("*", cors(corsOptions));

const BASE_PATH = "C:/Users/CWS/Desktop/image-copier-app/public/images";

app.post("/copy-image/:number", (req, res) => {
  console.log(req.body);
  const number = req.params.number;
  const { imageUrl } = req.body; // 클라이언트에서 전송한 이미지 경로
  const imageFileName = path.basename(imageUrl);
  const sourcePath = `${BASE_PATH}/${imageFileName}`; // 원본 이미지 경로
  const destinationPath = `${BASE_PATH}/${number}/${imageFileName}`; // 대상 폴더 경로

  console.log(sourcePath, destinationPath, imageFileName);

  fs.copyFile(sourcePath, destinationPath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "이미지 복사에 실패했습니다." });
    } else {
      res.json({ message: "이미지가 복사되었습니다." });
    }
  });
});

app.listen(3001, () => {
  console.log("서버가 3001 포트에서 실행 중입니다.");
});
