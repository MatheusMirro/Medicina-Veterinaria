import React, { useState } from 'react'
import QuillEditor from '../../../editor/QuillEditor';
import { Typography, Button, Form, message } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";
const { Title } = Typography;

function CreatePage(props) {

  const user = useSelector(state => state.user);
  const [content, setContent] = useState("")
  const [files, setFiles] = useState([])

  const onEditorChange = (value) => {
    setContent(value)
    console.log(content)
  }

  const onFilesChange = (files) => {
    setFiles(files)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    setContent("");

    if (user.userData && !user.userData.isAuth) {
      return alert('Por favor, faça o login primeiro!');
    }

    const variables = {
      content: content,
      userID: user.userData._id
    }

    axios.post('/api/blog/createPost', variables)
      .then(response => {
        if (response) {
          message.success('Post Criado!');

          setTimeout(() => {
            props.history.push('/blog')
          }, 2000);
        }
      })
  }
  return (
    <div>
      <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center' }}>
          <Title level={2} > Editor</Title>
        </div>

        <QuillEditor
          placeholder={"Comece postando alguma coisa :)"}
          onEditorChange={onEditorChange}
          onFilesChange={onFilesChange}
        />

        <Form onSubmit={onSubmit}>
          <div style={{ textAlign: 'center', margin: '2rem', }}>
            <Button
              size="large"
              htmlType="submit"
              className=""
              onSubmit={onSubmit}
            >
              Publicar
                </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
export default CreatePage;