import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CreateIcon from "@mui/icons-material/Create";

export default function ProfileForVehiclePartnerBeforeRegister({ profileTitle }) {
  const navigate = useNavigate();
  const [profilePhoto, setProfilePhoto] = useState("");
  const [error, setError] = useState("");
  const [userDetails, setUserDetails] = useState({
    username: "bharathi",
    email: "bharathi.1234@gmail.com",
    pno: "5551234567",
  });

  const bookingregister = () => {
    navigate("/stepperform");
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png"];
      if (!validTypes.includes(file.type)) {
        setError("Only .png and .jpg files are allowed");
        return;
      }
      setError("");

      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("file-upload").click();
  };

  const logoutaftersignout = () => {
    navigate("/");
  };

  const [editField, setEditField] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  const handleEditClick = (field) => {
    setEditField(field);
    setEditedValue(userDetails[field]); // Set initial value for editing
  };

  const handleSave = () => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [editField]: editedValue,
    }));
    setEditField(null); // Exit editing mode
  };

  const handleCancel = () => {
    setEditField(null);
  };

  return (
    <div className="h-screen flex flex-col justify-center">
      <h1 className="text-2xl flex justify-center p-2 md:pb-5 font-semibold">Your Profile</h1>
      <div className="flex justify-center items-center w-full xl:w-3/4 mx-auto">
        <div className="shadow-sm shadow-orange-300 p-1 md:p-2 md:m-2 lg:pb-10 w-full xl:w-3/4 flex justify-center flex-col md:flex-row">
          <div className="order-2 md:order-1 w-full md:w-3/5">
            {[
              { label: "User Name", value: "username" },
              { label: "Email", value: "email" },
              { label: "Phone no", value: "pno" },
            ].map((item, index) => (
              <div className="flex flex-col md:flex-row p-2 justify-start lg:justify-center" key={index}>
                <div className="w-full md:w-1/3 lg:w-1/4">
                  <span className="pb-1">
                    <strong className="text-lg">{item.label}:</strong>
                  </span>
                </div>

                <div className="w-full md:w-3/4 xl:w-3/5 flex items-center border border-gray-400">
                  {editField === item.value ? (
                    <>
                    <input
                      type="text"
                      value={editedValue}
                      onChange={(e) => setEditedValue(e.target.value)}
                      className="text-lg text-gray-800 md:py-1 px-2 flex-grow "
                    />
                    </>
                    
                  ) : (
                    <span className="text-lg text-gray-800 md:py-1 px-2 flex-grow">
                      {userDetails[item.value]}
                    </span>
                  )}

                  {item.value === "username" && (
                    <span className="ps-2">
                      {editField === "username" ? (
                        <>
                          <button
                            className="text-green-500 px-2"
                            onClick={handleSave}
                          >
                            Save
                          </button>
                          <button
                            className="text-red-500 px-2"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <CreateIcon
                          onClick={() => handleEditClick(item.value)}
                          className="cursor-pointer"
                        />
                      )}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="profiletop order-1 md:order-2 w-full md:w-2/5 flex flex-col items-center justify-center">
            <Stack direction="row" spacing={2} className="items-center justify-center relative ">
              <div className="flex flex-col items-center">
                <Avatar alt="Bharathi" src={profilePhoto} sx={{ width: 56, height: 56 }} className="border-2 border-gray-500" />
                <p className="text-2xl lg:ml-2">Bharathi</p>
                <p className="p-1 text-base md:text-sm lg:text-lg">bharathi@123455gmail.com</p>
              </div>
            </Stack>

            <div className="text-center mt-1">
              <input
                type="file"
                accept="image/png, image/jpeg"
                id="file-upload"
                onChange={handlePhotoChange}
                style={{ display: "none" }}
              />
              <button
                type="button"
                className="bg-orange-400 text-white p-1 px-3"
                onClick={triggerFileInput}
              >
                Edit Profile Photo
              </button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center m-3 mb-5">
        <button
          type="submit"
          className="mx-4 mt-10 p-2 w-44 text-lg bg-fuchsia-900 hover:bg-fuchsia-950 text-white font-semibold"
          onClick={bookingregister}
        >
          Add Your Vehicle
        </button>
      </div>
      <h1
        className="text-center text-red-600 text-lg font-medium cursor-pointer p-2 mb-3"
        onClick={logoutaftersignout}
      >
        Logout
      </h1>
    </div>
  );
}
