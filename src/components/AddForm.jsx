import { useState } from "react";
import { InputElement } from "./InputElement";
import { TextArea } from "./TextArea";
import { FileUpload } from "primereact/fileupload";

export function AddForm({ onSubmit, data }) {
  const [name, setName] = useState(data?.type);
  const [id, setId] = useState(data?.type);
  const [description, setDescription] = useState(data?.description);
  const [image, setImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-6 ">
        <div className="col-span-6 md:col-span-3 p-5">
          <InputElement
            type="text"
            label="Item Id"
            placeHolder="Id of sticker attached "
            required={true}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="col-span-6 md:col-span-3 p-5">
          <InputElement
            type="text"
            label="Item Name"
            placeHolder="Item Name"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col-span-6 md:col-span-3 p-5">
          <div className=" card text-sm flex justify-content-center">

            <div className="mb-3">
              <label className="block mb-1 text-sm font-semibold  text-gray-600">
                Upload item image
              </label>
              <input
                type="file"
                className="shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="choose file"
                onChange={(e) => { setImage(e.target.files[0]); console.log(e.target.files)}}
              

              />
            </div>
          </div>
        </div>
        <div className="col-span-6 p-5">
          <TextArea
            type="text"
            label=" Description"
            placeHolder=".."
            required={true}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="text-right">
        <button
          onClick={() => onSubmit({ name, image, description, id })}
          className="bg-kekaBlue rounded-full text-white px-4 py-2 text-lg shadow-md"
        >
          <p className="flex items-center">Submit</p>
        </button>
      </div>
    </>
  );
}
