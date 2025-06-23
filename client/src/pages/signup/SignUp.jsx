import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './SignUp.css'
const SignUp = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        fatherName: '',
        gender: '',
        city: '',
        cnic: '',
        username: '',
        address: '',
        email: '',
        password: '',
        mobileNumber: '',
        userImage: '',
        userType: '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        fatherName: Yup.string().required('Required'),
        gender: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        cnic: Yup.string().required('Required'),
        username: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
        mobileNumber: Yup.string(),
        userImage: Yup.string(),
        userType: Yup.string().required('Required'),
    });


    const onSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await axios.post('http://localhost:3000/user/register', values);
            if (response.status === 201) {
                toast.success('User registered successfully'); // Show success toast
            }
        } catch (error) {
            console.error('Error occurred:', error);
            toast.error('An error occurred during registration'); // Show error toast
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <div className="signupContainer">
            <div className='image_Container_signup'>
                <img src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-diploma-education-day_23-2149241011.jpg?w=740&t=st=1692854608~exp=1692855208~hmac=b63b417952693f38ed8baf9c572b775c2ac2eb5af90ee89eb87466316a3546bf" alt="signupimage" className='singup_form_image' />
            </div>
            <div className="context_Container_singup">
                <div className="logo_Container_signup">
                    <img src="https://a6e8z9v6.stackpathcdn.com/kingster/wp-content/themes/kingster/images/logo.png" alt="" />
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form className="form_container_signup">
                        <div className="input_row_signup">
                            <div className="input_container_signup">
                                <Field className="input_box_singup" type="text" name="firstName" placeholder="First Name" />
                                <ErrorMessage name="firstName" component="div" className="error_message_signup" />
                            </div>
                            <div className="input_container_signup">
                                <Field className="input_box_singup" type="text" name="lastName" placeholder="Last Name" />
                                <ErrorMessage name="lastName" component="div" className="error_message_signup" />
                            </div>
                        </div>
                        <div className="input_row_signup">
                            <div className="input_container_signup">
                                <Field className="input_box_singup" type="text" name="fatherName" placeholder="Father's Name" />
                                <ErrorMessage name="fatherName" component="div" className="error_message_signup" />
                            </div>
                            <div className="input_container_signup">
                                <Field className="input_box_singup" type="text" name="gender" placeholder="Gender" />
                                <ErrorMessage name="gender" component="div" className="error_message_signup" />
                            </div>
                        </div>
                        <div className="input_row_signup">
                            <div className="input_container_signup">
                                <Field className="input_box_singup" type="text" name="city" placeholder="City" />
                                <ErrorMessage name="city" component="div" className="error_message_signup" />
                            </div>
                            <div className="input_container_signup">
                                <Field className="input_box_singup" type="text" name="cnic" placeholder="CNIC" />
                                <ErrorMessage name="cnic" component="div" className="error_message_signup" />
                            </div>
                        </div>
                        <div className="input_row_signup">
                            <div className="input_container_signup">
                                <Field className="input_box_singup" type="text" name="username" placeholder="Username" />
                                <ErrorMessage name="username" component="div" className="error_message_signup" />
                            </div>
                            <div className="input_container_signup">
                                <Field className="input_box_singup" type="text" name="address" placeholder="Address" />
                                <ErrorMessage name="address" component="div" className="error_message_signup" />
                            </div>
                        </div>
                        <div className="input_row_signup">
                            <div className="input_container_signup">
                                <Field className="input_box_singup" type="email" name="email" placeholder="Email" />
                                <ErrorMessage name="email" component="div" className="error_message_signup" />
                            </div>
                            <div className="input_container_signup">
                                <Field className="input_box_singup" type="password" name="password" placeholder="Password" />
                                <ErrorMessage name="password" component="div" className="error_message_signup" />
                            </div>
                        </div>
                        <div className="input_row_signup">
                            <div className="input_container_signup">
                                <Field className="input_box_singup" type="text" name="mobileNumber" placeholder="Mobile Number" />
                                <ErrorMessage name="mobileNumber" component="div" className="error_message_signup" />
                            </div>
                            <div className="input_container_signup">
                                <Field className="input_box_singup" type="text" name="userImage" placeholder="User Image URL" />
                                <ErrorMessage name="userImage" component="div" className="error_message_signup" />
                            </div>
                        </div>
                        <div className="input_row_signup">
                            <div className="input_container_signup">
                                <Field className="input_box_singup" as="select" name="userType">
                                    <option value="" label="Select a User Type" />
                                    <option value="admin" label="Admin" />
                                    <option value="teacher" label="Teacher" />
                                    <option value="student" label="Student" />
                                </Field>
                                <ErrorMessage name="userType" component="div" className="error_message_signup" />
                            </div>
                        </div>
                        <div className="submit_container_signup">
                            <button id="submit" type="submit">Create your account</button>
                        </div>
                    </Form>
                </Formik>
            </div>

        </div>
    )
}

export default SignUp