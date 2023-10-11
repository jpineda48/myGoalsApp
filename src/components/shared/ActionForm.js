import { Form, Button, Container } from 'react-bootstrap'







const ActionForm = (props) => {
  const { action, handleChange, handleSubmit, heading } = props
  return (
    <div>
      <Container className='justify-content-center'>
        <h3>{heading}</h3>
        <Form onSubmit={handleSubmit}>
                <Form.Group className="m-2">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control 
                        placeholder="Title of action?"
                        id="action"
                        name="action"
                        value={ action.action }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>Start Date:</Form.Label>
                    <Form.Control 
                        placeholder="how frequent"
                        id="frequency"
                        name="frequency"
                        value={ action.frequency }
                        onChange={handleChange}
                    />
                </Form.Group>  
                <Button className='m-2' type='submit'> Submit</Button>
                

        </Form>

      </Container>
      
    </div>
  )
}

export default ActionForm
