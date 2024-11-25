import * as Yup from 'yup';

// Personal Details Validation Schema
export const personalDetailsSchema = Yup.object({
  name: Yup.string()
  .min(3, "Name must be at least 3 characters")
  .max(25, "Name must be at most 25 characters")
  .required("Name is required"),
  email: Yup.string()
  .email("Invalid email format")
  .matches(
    /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/,
    "Only gmail.com and yahoo.com are allowed"
  )
  .required("Email is required"),
  pno: Yup.string()
  .length(10, "Phone number must be exactly 10 digits")
  .matches(/^\d{10}$/, "Phone number must be a valid 10-digit number")
  .required("Phone number is required"),
  dob: Yup.date()
  .nullable()
  .required("Date of Birth is required")
  .typeError("Invalid date format")
  .max(new Date(), "Date of Birth cannot be in the future"),
  address: Yup.string()
  .min(10, "Address must be at least 10 characters")
  .max(40, "Address must be at most 40 characters")
  .required("Address is required"),
  gender: Yup.string().required("Gender is required"),
  photo: Yup.string()
  .required("photo is required"),
  proof: Yup.string()
  .required("proof is required"),


});

// Vehicle Info Validation Schema
export const vehicleInfoSchema = Yup.object({
  brand: Yup.string().required("Vehicle brand is required"),
  model: Yup.string().required("Vehicle model is required"),
  registrationnumber: Yup.string().required("Registration number is required"),
  mileage: Yup.number()
  .typeError("Mileage must be a number")
  .required("Vehicle mileage is required")
  .positive("Mileage must be a positive number")
  .test(
    "is-decimal",
    "Mileage must have up to two decimal places",
    (value) => value && /^\d+(\.\d{1,2})?$/.test(value.toString())
  ),
  seatingcapability: Yup.number() 
  .typeError("Seating capability must be a number")
  .required("Vehicle seating capability is required")
  .max(8, "Seating capability cannot exceed 8"),
  fueltype: Yup.string().required("Vehicle fuel type is required"),
  transmissiontype: Yup.string().required("Transmission type is required"),
  insurance: Yup.string().required("Insurance image is required"),
  rcbook: Yup.string().required("RC image is required"),
  rentaldurationstartdate: Yup.date()
    .nullable()
    .required("Starting date is required")
    .typeError("Starting date is required")
    .test('start-date-future', 'Start date must be in the future', function (startDate) {
      return startDate ? startDate > new Date() : true; // Ensure the start date is in the future
    }),

  rentaldurationenddate: Yup.date()
    .nullable()
    .required("Ending date is required")
    .typeError("Ending date is required")
    .test('end-date', 'End date must be later than start date', function (endDate) {
      const { rentaldurationstartdate } = this.parent; // Access the start date from the parent object
      return rentaldurationstartdate && endDate ? endDate > rentaldurationstartdate : true; // Ensure end date is after start date
    }),
    mainimage: Yup.array()
    .min(1, "At least one image is required")
    .max(3, "You can upload a maximum of 5 images.")
    .required("Image is required"),
    frontRearImage: Yup.array()
    .min(1, "At least one image is required")
    .max(5, "You can upload a maximum of 5 images.")
    .required("Image is required"),
    leftRightImage: Yup.array()
    .min(1, "At least one image is required")
    .max(5, "You can upload a maximum of 5 images.")
    .required("Image is required"),
    interiorImage: Yup.array()
    .min(1, "At least one image is required")
    .max(5, "You can upload a maximum of 5 images.")
    .required("Image is required"),
  drivinglicense: Yup.string().required("RC image is required"),
  expirydate: Yup.date()
    .nullable()
    .required("Expiry date is required")
    .typeError("Expiry date is required"),
});

// Payment Info Validation Schema
export const paymentInfoSchema = Yup.object({
  bankname: Yup.string().required("Bank name is required"),
  accnumber: Yup.string().required("Account number is required"),
  ifsccode: Yup.string().required("IFSC Code is required"),
  branchname: Yup.string().required("Branch name is required"),
});
