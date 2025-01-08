import multer from 'multer';
import fs from 'fs';
import path from 'path';

// 폴더 존재 여부 확인 및 생성
const ensureFolderExists = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
};

// 고유 파일 이름 생성 함수
const getUniqueFileName = (originalName, uploadFolder) => {
  const ext = path.extname(originalName);
  const baseName = path.basename(originalName, ext);
  let uniqueName = originalName;
  let counter = 1;

  while (fs.existsSync(path.join(uploadFolder, uniqueName))) {
    uniqueName = `${baseName}(${counter})${ext}`;
    counter++;
  }
  return uniqueName;
};

// Multer 설정 함수
export const createMulter = (uploadFolder) => {
  ensureFolderExists(uploadFolder);

  return multer({
    storage: multer.diskStorage({
      destination(req, file, done) {
        done(null, uploadFolder); // 동적 폴더 경로 설정
      },
      filename(req, file, done) {
        const uniqueFileName = getUniqueFileName(file.originalname, uploadFolder);
        done(null, uniqueFileName); // 고유 파일 이름 설정
      },
    }),
  });
};
