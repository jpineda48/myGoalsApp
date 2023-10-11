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
                    <Form.Label>Purpose:</Form.Label>
                    <Form.Control 
                        placeholder="Purpose of action?"
                        id="purpose"
                        name="purpose"
                        value={ action.purpose }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Select 
                        aria-label="priority"
                        name="priority"
                        defaultValue={ action.priority }
                        onChange={handleChange}
                    >
                        <option>Open this select menu</option>
                        <option value="High">High</option>
                        <option value="Med">Med</option>
                        <option value="Low">Low</option>
                    </Form.Select> 
                <Form.Select 
                        aria-label="frequency"
                        name="frequency"
                        defaultValue={ action.frequency }
                        onChange={handleChange}
                    >
                        <option>Open this select menu</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </Form.Select>
                <Button className='m-2' type='submit'> Submit</Button>
                

        </Form>

      </Container>
      
    </div>
  )
}

export default ActionForm
