import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export interface ChannelProps {
  name: string;
  id: string;
  type: "messages" | "notes" | "assignments";
}

const initialValues: ChannelProps = {
  name: "",
  id: "",
  type: "messages",
};

const ChannelForm = () => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <Field
            name="name"
            type="text"
            className="w-full border border-gray-400 p-2 rounded-lg"
            placeholder="Enter channel name"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 text-xs italic"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="id">
            ID
          </label>
          <Field
            name="id"
            type="text"
            className="w-full border border-gray-400 p-2 rounded-lg"
            placeholder="Enter channel ID"
          />
          <ErrorMessage
            name="id"
            component="div"
            className="text-red-500 text-xs italic"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="type"
          >
            Type
          </label>
          <Field
            as="select"
            name="type"
            className="w-full border border-gray-400 p-2 rounded-lg"
          >
            <option value="messages">Messages</option>
            <option value="notes">Notes</option>
            <option value="assignments">Assignments</option>
          </Field>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </Form>
    )}
  </Formik>
);

export default ChannelForm;
