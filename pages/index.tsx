//import React from 'react';
import Form from '@rjsf/core';
import { RJSFSchema, UiSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

const schema: RJSFSchema = {
  "title": "Registration",
  "description": "form example.",
  "type": "object",
  "required": [
    "firstName",
    "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First name",
      //"default": "Chuck"
    },
    "lastName": {
      "type": "string",
      "title": "Last name"
    },
    "age": {
      "type": "integer",
      "title": "Age"
    },
    "bio": {
      "type": "string",
      "title": "Bio"
    },
    "password": {
      "type": "string",
      "title": "Password",
      "minLength": 3
    },
    "telephone": {
      "type": "string",
      "title": "Telephone",
      "minLength": 10
    }
  }
};

const uiSchema: UiSchema = {
  "firstName": {
    "ui:autofocus": true,
    "ui:emptyValue": "",
    "ui:placeholder": "ui:emptyValue causes this field to always be valid despite being required",
    "ui:autocomplete": "family-name",
    "ui:enableMarkdownInDescription": true,
    "ui:description": "Make text **bold** or *italic*. Take a look at other options [here](https://probablyup.com/markdown-to-jsx/)."
  },
  "lastName": {
    "ui:autocomplete": "given-name",
    "ui:enableMarkdownInDescription": true,
    "ui:description": "Make things **bold** or *italic*. Embed snippets of `code`. <small>And this is a small texts.</small> "
  },
  "age": {
    "ui:widget": "updown",
    "ui:title": "Age of person",
    "ui:description": "(earth year)"
  },
  "bio": {
    "ui:widget": "textarea"
  },
  "password": {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!"
  },
  "telephone": {
    "ui:options": {
      "inputType": "tel"
    }
  }
}

const formData1 = {
  "firstName": "Venkat",
  "lastName": "Nagaram",
  "age": 34,
  "bio": "Full Stack Developer",
  "password": "123456",
  "telephone": "9949922244"
}

const onSubmit = (formData:any, e:any) => console.log('Data submitted: ', formData.formData);

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Form schema={schema} uiSchema={uiSchema} validator={validator} formData={formData1} onSubmit={onSubmit} />
      </div>
    </main>
  )
}
