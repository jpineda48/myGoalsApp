import { Form, Button, Container } from 'react-bootstrap'



const EntryForm = (props) => {
    const { entry, handleChange, handleSubmit } = props
  return (
    <div>
        <Container className='justify-content-center'>
        <h3>Add an Entry</h3>
        <Form onSubmit={handleSubmit}>
                <Form.Group className="m-2">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control 
                        placeholder="title of entry?"
                        id="title"
                        name="title"
                        value={ entry.title }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>body:</Form.Label>
                    <Form.Control 
                        as="textarea" rows={5}
                        placeholder="Title of Goal?"
                        id="body"
                        name="body"
                        value={ entry.body }
                        onChange={handleChange}
                    />
                </Form.Group>
                
              
               
                <Button className='m-2' type='submit'> Submit</Button>
                

        </Form>

      </Container>
      
    </div>
  )
}

export default EntryForm
