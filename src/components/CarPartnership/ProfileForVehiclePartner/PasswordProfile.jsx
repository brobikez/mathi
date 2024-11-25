import React, { useState } from 'react';

const PasswordProfile = ({ profileTitle }) => {
    // States for the passwords
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // States for password visibility toggle
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showReEnterPassword, setShowReEnterPassword] = useState(false);

    // States to track if user has started typing
    const [isCurrentPasswordTyped, setIsCurrentPasswordTyped] = useState(false);
    const [isNewPasswordTyped, setIsNewPasswordTyped] = useState(false);
    const [isReEnterPasswordTyped, setIsReEnterPasswordTyped] = useState(false);

    const storedPassword = "123"; 

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (currentPassword !== storedPassword) {
            setErrorMessage("Current password is incorrect.");
            setTimeout(() => setErrorMessage(''), 2000);
            return;
        }

        if (newPassword !== reEnterPassword) {
            setErrorMessage("New passwords do not match.");
            setTimeout(() => setErrorMessage(''), 2000); 
            return;
        }

        setErrorMessage(""); 
        setSuccessMessage("Your password has been changed successfully!");
        setTimeout(() => setSuccessMessage(''), 2000);  
    };


    return (
        <div>
            <h1 className="text-xl font-semibold">{profileTitle}</h1>
            <div className="shadow-sm shadow-orange-300 p-1 md:p-2 md:m-2">
                <h1 className='text-xl font-medium text-center md:text-start md:pb-5 p-3'>Change password</h1>

                <form onSubmit={handleSubmit}>
                    {/* Current Password */}
                    <div className='flex flex-col md:flex-row m-2 md:my-4'>
                        <label htmlFor="currentpassword" className='p-1 w-full md:w-1/3 lg:w-1/4 text-black text-lg'>Current Password</label>
                        <div className="relative w-full md:w-3/4 xl:w-2/5">
                            <input 
                                type={showCurrentPassword ? "text" : "password"} 
                                className='w-full flex items-center p-2' 
                                value={currentPassword}
                                onChange={(e) => {
                                    setCurrentPassword(e.target.value);
                                    setIsCurrentPasswordTyped(e.target.value.length > 0); // Track if user is typing
                                }}
                                required
                            />
                            {isCurrentPasswordTyped && (
                                <button
                                    type="button"
                                    className="absolute right-2 top-2"
                                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                >
                                    {showCurrentPassword ? "Hide" : "Show"}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* New Password */}
                    <div className='flex flex-col md:flex-row m-2 md:my-4'>
                        <label htmlFor="newpassword" className='p-1 w-full md:w-1/3 lg:w-1/4 text-black text-lg'>New Password</label>
                        <div className="relative w-full md:w-3/4 xl:w-2/5">
                            <input 
                                type={showNewPassword ? "text" : "password"} 
                                className='w-full flex items-center p-2' 
                                value={newPassword}
                                onChange={(e) => {
                                    setNewPassword(e.target.value);
                                    setIsNewPasswordTyped(e.target.value.length > 0); // Track if user is typing
                                }}
                                required
                            />
                            {isNewPasswordTyped && (
                                <button
                                    type="button"
                                    className="absolute right-2 top-2"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                >
                                    {showNewPassword ? "Hide" : "Show"}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Re-enter New Password */}
                    <div className='flex flex-col md:flex-row m-2 md:my-4'>
                        <label htmlFor="reenternewpassword" className='p-1 w-full md:w-1/3 lg:w-1/4 text-black text-lg'>Re-Enter New Password</label>
                        <div className="relative w-full md:w-3/4 xl:w-2/5">
                            <input 
                                type={showReEnterPassword ? "text" : "password"} 
                                className='w-full flex items-center p-2' 
                                value={reEnterPassword}
                                onChange={(e) => {
                                    setReEnterPassword(e.target.value);
                                    setIsReEnterPasswordTyped(e.target.value.length > 0); // Track if user is typing
                                }}
                                required
                            />
                            {isReEnterPasswordTyped && (
                                <button
                                    type="button"
                                    className="absolute right-2 top-2"
                                    onClick={() => setShowReEnterPassword(!showReEnterPassword)}
                                >
                                    {showReEnterPassword ? "Hide" : "Show"}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Error and Success Messages */}
                    {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
                    {successMessage && <div className="text-green-500 text-sm">{successMessage}</div>}

                    {/* Submit Button */}
                    <div className="flex justify-center m-3 mb-5">
                        <button
                            type="submit"
                            className="mx-4 mt-10 p-2 w-44 text-lg bg-fuchsia-900 text-white font-semibold"
                            disabled={currentPassword === "" || newPassword === "" || reEnterPassword === ""}
                        >
                            Change Password
                        </button>
                    </div>
                </form>

                {/* Forgot Password Link */}
                <h1 className='text-center text-blue-900 text-lg font-semibold underline cursor-pointer'>Forgot Password</h1>
            </div>
        </div>
    );
};

export default PasswordProfile;
