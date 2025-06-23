import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // For form validation schema

const DepartmentForm = () => {
    const initialValues = {
        departmentName: '',
        hodName: '',
        hodMessage: '',
        description: '',
        departmentImage: '',
        startingDateAdmission: '',
        endingDateAdmission: '',
        coursesOffered: [], // Initialize as an empty array
        facultyMembers: [], // Initialize as an empty array
    };


    const validationSchema = Yup.object({
        departmentName: Yup.string().required('Required'),
        hodName: Yup.string().required('Required'),
        hodMessage: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        departmentImage: Yup.string().required('Required'),
        startingDateAdmission: Yup.date().required('Required'),
        endingDateAdmission: Yup.date().required('Required'),
        coursesOffered: Yup.array().of(
            Yup.object().shape({
                courseCode: Yup.string().required('Required'),
                courseTitle: Yup.string().required('Required'),
            })
        ),
        facultyMembers: Yup.array().of(
            Yup.object().shape({
                facultyName: Yup.string().required('Required'),
                facultyEmail: Yup.string().required('Required').email('Invalid email'),
            })
        ),
    });

    const onSubmit = (values, { setSubmitting }) => {
        // Perform API call to submit department data
        console.log(values);
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                {/* Department Name */}
                <div>
                    <label htmlFor="departmentName">Department Name</label>
                    <Field type="text" id="departmentName" name="departmentName" />
                    <ErrorMessage name="departmentName" component="div" />
                </div>

                {/* HOD Name */}
                <div>
                    <label htmlFor="hodName">HOD Name</label>
                    <Field type="text" id="hodName" name="hodName" />
                    <ErrorMessage name="hodName" component="div" />
                </div>

                {/* Hod Message */}
                <div>
                    <label htmlFor="hodMessage">HOD Message</label>
                    <Field as="textarea" id="hodMessage" name="hodMessage" />
                    <ErrorMessage name="hodMessage" component="div" />
                </div>

                {/* Description */}
                <div>
                    <label htmlFor="description">Description</label>
                    <Field as="textarea" id="description" name="description" />
                    <ErrorMessage name="description" component="div" />
                </div>

                {/* Department Image */}
                <div>
                    <label htmlFor="departmentImage">Department Image URL</label>
                    <Field type="text" id="departmentImage" name="departmentImage" />
                    <ErrorMessage name="departmentImage" component="div" />
                </div>

                {/* Starting Date Admission */}
                <div>
                    <label htmlFor="startingDateAdmission">Starting Date Admission</label>
                    <Field type="date" id="startingDateAdmission" name="startingDateAdmission" />
                    <ErrorMessage name="startingDateAdmission" component="div" />
                </div>

                {/* Ending Date Admission */}
                <div>
                    <label htmlFor="endingDateAdmission">Ending Date Admission</label>
                    <Field type="date" id="endingDateAdmission" name="endingDateAdmission" />
                    <ErrorMessage name="endingDateAdmission" component="div" />
                </div>
                {/* <div>
                    <label>Courses Offered</label>
                    <FieldArray name="coursesOffered">
                        {({ insert, remove, push }) => (
                            <div>
                                {values.coursesOffered.length > 0 &&
                                    values.coursesOffered.map((course, index) => (
                                        <div key={index}>
                                            <Field
                                                name={`coursesOffered.${index}.courseCode`}
                                                placeholder="Course Code"
                                            />
                                            <ErrorMessage
                                                name={`coursesOffered.${index}.courseCode`}
                                                component="div"
                                            />
                                            <Field
                                                name={`coursesOffered.${index}.courseTitle`}
                                                placeholder="Course Title"
                                            />
                                            <ErrorMessage
                                                name={`coursesOffered.${index}.courseTitle`}
                                                component="div"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => remove(index)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                <button
                                    type="button"
                                    onClick={() => push({ courseCode: '', courseTitle: '' })}
                                >
                                    Add Course
                                </button>
                            </div>
                        )}
                    </FieldArray>
                </div>
                <div>
                    <label>Faculty Members</label>
                    <FieldArray name="facultyMembers">
                        {({ insert, remove, push }) => (
                            <div>
                                {values.facultyMembers.length > 0 &&
                                    values.facultyMembers.map((faculty, index) => (
                                        <div key={index}>
                                            <Field
                                                name={`facultyMembers.${index}.facultyName`}
                                                placeholder="Faculty Name"
                                            />
                                            <ErrorMessage
                                                name={`facultyMembers.${index}.facultyName`}
                                                component="div"
                                            />
                                            <Field
                                                name={`facultyMembers.${index}.facultyEmail`}
                                                placeholder="Faculty Email"
                                            />
                                            <ErrorMessage
                                                name={`facultyMembers.${index}.facultyEmail`}
                                                component="div"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => remove(index)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                <button
                                    type="button"
                                    onClick={() => push({ facultyName: '', facultyEmail: '' })}
                                >
                                    Add Faculty
                                </button>
                            </div>
                        )}
                    </FieldArray>
                </div> */}
                <div>
                    <button type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    );
};

export default DepartmentForm;
