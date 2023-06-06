// import { Form, Modal, Button } from "react-bootstrap";
// import { useState } from "react";
// import { RcFile } from "antd/lib/upload";
// import { message } from "antd";
// import "./NewGuideCategoryModal.css";

// interface NewGuideCategoryModalProps {
//   visible: boolean;
//   onCancel: () => void;
// }

// const NewGuideCategoryModal: React.FC<NewGuideCategoryModalProps> = ({
//   visible,
//   onCancel,
// }) => {
//   const [fileList, setFileList] = useState<RcFile[]>([]);

//   const handleUploadChange = (info: any) => {
//     let fileList = [...info.fileList];

//     // Limit the number of files to 1
//     fileList = fileList.slice(-1);

//     // Only accept image files
//     fileList = fileList.filter((file) => {
//       if (
//         file.type !== "image/png" &&
//         file.type !== "image/jpeg" &&
//         file.type !== "image/gif"
//       ) {
//         message.error("You can only upload JPG, PNG, or GIF files!");
//         return false;
//       }
//       return true;
//     });

//     setFileList(fileList);
//   };

//   const handleCancel = () => {
//     setFileList([]);
//     onCancel();
//   };

//   const onFinish = async (values: any) => {
//     try {
//       const { name, description, tag } = values;
//       const guideCategory = await fetch("/guide-categories", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           description,
//           tag,
//         }),
//       }).then((response) => response.json());

//       if (fileList.length > 0) {
//         const formData = new FormData();
//         formData.append("image", fileList[0]);
//         formData.append("categoryId", guideCategory.id);

//         await fetch("/guide-images", {
//           method: "POST",
//           body: formData,
//         }).then((response) => response.json());
//       }

//       handleCancel();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Modal
//       show={visible}
//       onHide={handleCancel}
//       centered
//       className="new-guide-modal"
//     >
//       <Modal.Header closeButton>
//         <Modal.Title>Create New Guide Category</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={onFinish}>
//           <Form.Group controlId="name">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="name"
//               placeholder="Enter the name of the guide category"
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="description">
//             <Form.Label>Description</Form.Label>
//             <Form.Control
//               type="text"
//               name="description"
//               placeholder="Enter a description for the guide category"
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="tag">
//             <Form.Label>Tag</Form.Label>
//             <Form.Control
//               type="text"
//               name="tag"
//               placeholder="Enter a tag for the guide category"
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="image">
//             <Form.Label>Image</Form.Label>
//             <div className="upload-container">
//               <label className="custom-file-upload">
//                 <input
//                   type="file"
//                   accept=".jpg,.png,.gif"
//                   onChange={handleUploadChange}
//                 />
//                 {fileList.length === 0 ? "+ Upload" : "File Uploaded"}
//               </label>
//             </div>
//           </Form.Group>
//           <div className="modal-footer">
//             <Button variant="secondary" onClick={handleCancel}>
//               Cancel
//             </Button>
//             <Button variant="primary" type="submit">
//               Create
//             </Button>
//           </div>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default NewGuideCategoryModal;
