import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().required("Password is required").min(6, "Password is too short"),
});


export const registerSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().required("Password is required").min(6, "Password is too short"),
    username: Yup.string().required("Username is required"),
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    role: Yup.string().required("Role is required"),
});

export const writeBlogSchema = Yup.object().shape({
    cover: Yup.string().required("Cover Image is required"),
    title: Yup.string().required("Title is required").min(20,"Title is too short"),
    content: Yup.string().required("Content is required").min(500, "Content is too short"),
});

export const postajobSchema = Yup.object().shape({
    title: Yup.string().required("Title is required").min(3, "Title must contain at least 3 Characters!").max(30, "Title cannot exceed 30 Characters!"),
    description: Yup.string().required("Description is required").min(30, "Description must contain at least 30 Characters!").max(1000, "Description cannot exceed 500 Characters!"),
    category: Yup.string().required("Category is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    location: Yup.string().required("Location is required"),
    company: Yup.string().required("Company is required"),
})
