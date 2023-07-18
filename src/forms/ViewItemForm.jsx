import { useState } from "react";
import { InputElement } from "../components/InputElement";
import { TextArea } from "../components/TextArea";

export function ViewItemForm({ data , isEdit }) {
  const [name, setName] = useState(data?.name);
  const [id, setId] = useState(data?.unique_id);
  const [description, setDescription] = useState(data?.description);
  const [image, setImage] = useState("");

  return (
    <>
      <div class="flex">
        <div className={` ${isEdit ? "w-full " : " w-1/2"}`}>
          <div className="grid grid-cols-6 ">
            <div className="col-span-6  p-2">
              <InputElement
                type="text"
                label="Item Id"
                placeHolder="Id of sticker attached "
                required={true}
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="col-span-6  p-2">
              <InputElement
                type="text"
                label="Item Name"
                placeHolder="Item Name"
                required={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col-span-6 p-2">
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
        </div>
        { !isEdit && (
        <div className="flex flex-col items-center justify-center pl-10 ">
          <p> Item QR Code </p>
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://kekaprecision.com" className="p-5" />
        </div> )}
      </div>
    </>
  );
}
