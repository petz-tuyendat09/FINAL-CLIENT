import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const MyEditor = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageDelete = (imageUrl: string) => {
    // Gửi yêu cầu DELETE đến server để xóa ảnh bằng fetch
    fetch("http://localhost:8888/api/product/ckdelete-img", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: imageUrl, // Gửi URL của ảnh cần xóa
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Image deleted from server:", data);
      })
      .catch((error) => {
        console.error("Error deleting image:", error);
      });
  };

  return (
    <>
      <p>Mô tả: </p>
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "blockQuote",
            "imageUpload",
            "insertTable",
            "mediaEmbed",
            "undo",
            "redo",
          ],
          ckfinder: {
            uploadUrl: "http://localhost:8888/api/product/ckupload-img", // Đường dẫn API upload ảnh
          },
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, "text/html");
          const images = Array.from(doc.querySelectorAll("img")).map((img) =>
            img.getAttribute("src"),
          );

          // Tìm những ảnh đã bị xóa
          const deletedImages = uploadedImages.filter(
            (url) => !images.includes(url),
          );

          console.log(deletedImages);
          console.log(images);

          // Cập nhật lại danh sách ảnh đã upload
          //   setUploadedImages(images);

          // Xóa các ảnh đã bị xóa
          deletedImages.forEach(handleImageDelete);
        }}
      />
    </>
  );
};

export default MyEditor;
