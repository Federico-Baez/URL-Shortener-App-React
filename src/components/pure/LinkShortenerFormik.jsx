import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Item } from '../../models/Item.class';
import { shortenLink } from '../../services/axiosService';


const LinkShortenerFormik = ({ add }) => {

    useEffect(() => {
        // get all error message elements
        const errorMessages = document.getElementsByClassName("error-message");
    }, []);

    //axios usage for shortcode API
    const obtainShortenedLink = (OriginalURL) => {
        /* shortenLink(`/shorten?url=${OriginalURL}`) */
        shortenLink(`${OriginalURL}`)
            .then((response) => {
                if (response.status === 200) {
                return response.json();
                } else {
                throw new Error('Shortening link failed');
                }
            })
            .then((data) => {
                const newItem = new Item(OriginalURL, data.shortURL);
                add(newItem);
                return data;
            })
            .catch((error) => {
                alert(`Something went wrong shortening the link: ${error}`)
            })
    }

    const initialItemCredential = {
        URL: '',
        shortenedURL: '',
    }

    const ItemsFormSchema = Yup.object().shape(
        {
            URL: Yup.string()
                .required('Please add a link'),
        }
    )

    return (
        <div className='shortener' id='shortener'>
            <Formik
                // Initial values for the form
                initialValues={initialItemCredential}
                // Yup validation schema
                validationSchema={ItemsFormSchema}

                // onSubmit event
                onSubmit={(values, { resetForm }) => {
                    obtainShortenedLink(values.URL);
                    resetForm();
                }}
            >

                {({ errors, touched }) => (
                    <Form className='shortener-form'>
                        <div className='input'>
                            <Field className={(touched.URL && errors.URL) ? 'input-url-error' : 'input-url'} id="URL" name="URL" placeholder="Shorten a link here..." type="text" autoComplete="off" />
                            {/* URL errors */}
                            {errors.URL && touched.URL && (<ErrorMessage style={{ color: "hsl(0, 87%, 67%)", fontWeight: "500", fontStyle: "italic" }} name="URL" component="div" className="error-message mt-1 font-italic" />)}
                        </div>

                        <button className='primary-btn' type="submit">Shorten It!</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};


LinkShortenerFormik.propTypes = {
    add: PropTypes.func.isRequired
};


export default LinkShortenerFormik;
