import { Form, Button, Container } from 'react-bootstrap'



const EntryForm = (props) => {
    const { entry, handleChange, handleSubmit } = props
  return (
    <div>
        <Container className='justify-content-center'>
        <h5>CREATE AN ENTRY</h5>
        <Form onSubmit={handleSubmit}>
                <Form.Group className="m-2">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control 
                        style={{fontStyle: 'italic'}}
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
                        style={{fontStyle: 'italic'}}
                        as="textarea" rows={5}
                        placeholder="what do you want to write about?"
                        id="body"
                        name="body"
                        value={ entry.body }
                        onChange={handleChange}
                    />
                </Form.Group>
                
              
               
                <Button className='m-2' style={{backgroundColor:'teal', border:'teal'}} type='submit'> Submit</Button>
                

        </Form>

      </Container>
      
    </div>
  )
}

export default EntryForm
