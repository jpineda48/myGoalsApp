///form will take several props and be used by both create and update
import { Form, Button, Container } from 'react-bootstrap'







const GoalForm = (props) => {

 


  const { goal, handleChange, handleSubmit, heading } = props
  return (
    <div>
      <Container className='justify-content-center'>
        <h3>{heading}</h3>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
                    <Form.Select 
                        aria-label="catagory"
                        name="catagory"
                        defaultValue={ goal.catagory }
                        onChange={handleChange}
                    >
                        <option>Open this select menu</option>
                        <option value="Financial">Financial</option>
                        <option value="Personal">personal</option>
                        <option value="Health">Health</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control 
                        placeholder="Title of Goal?"
                        id="title"
                        name="title"
                        value={ goal.title }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>Progress Measurement:</Form.Label>
                    <Form.Control 
                        placeholder="When are you starting this goal?"
                        id="progress_measurement"
                        name="progress_measurement"
                        value={ goal.progress_measurement }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>Decription:</Form.Label>
                    <Form.Control 
                        placeholder="Describe this goal?"
                        id="description"
                        name="description"
                        value={ goal.description }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Select 
                        aria-label="status"
                        name="status"
                        defaultValue={ goal.status }
                        onChange={handleChange}
                    >
                        <option>Open this select menu</option>
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Finished">Finished</option>
                    </Form.Select>
                </Form.Group>
                <Button className='m-2' type='submit'> Submit</Button>
                

        </Form>

      </Container>
      
    </div>
  )
}

export default GoalForm
