///form will take several props and be used by both create and update
import { Form, Button, Container } from 'react-bootstrap'







const GoalForm = (props) => {

 


  const { goal, handleChange, handleSubmit, heading } = props
  return (
    <div>
      <Container className='justify-content-center'>
        <h3 style={{fontFamily:'PT Serif, serif'}}>{heading}</h3>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="m-4">
                    <Form.Label style={{fontStyle: 'italic', color:'orange'}}>WHAT AREA OF LIFE ARE YOU FOCUSING ON?</Form.Label>
                    <Form.Select 
                        aria-label="catagory"
                        name="catagory"
                        defaultValue={ goal.catagory }
                        onChange={handleChange}
                    >
                        <option>select an area</option>
                        <option value="Personal">Personal</option>
                        <option value="Financial">Financial</option>
                        <option value="Learning">Learning</option>
                        <option value="Leisure">Leisure</option>
                        <option value="Health">Health</option>
                        <option value="Family">Family</option>
                        <option value="Relationship">Relationship</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Other">Other</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="m-4">
                    <Form.Label style={{fontStyle: 'italic', color:'orange'}}>TITLE YOURE GOAL TO BE MORE SPECIFIC</Form.Label>
                    <Form.Control 
                        placeholder="Title of Goal?"
                        id="title"
                        name="title"
                        value={ goal.title }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-4">
                    <Form.Label style={{fontStyle: 'italic', color:'orange'}}>HOW WILL YOU KEEP TRACK OF YOUR PROGRESS?</Form.Label>
                    <Form.Control 
                        placeholder="e.g., When I can bench 100lbs, I've achived this goal!"
                        id="progress_measurement"
                        name="progress_measurement"
                        value={ goal.progress_measurement }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-4">
                    <Form.Label style={{fontStyle: 'italic', color:'orange'}}>DESCRIBE YOUR GOAL</Form.Label>
                    <Form.Control 
                        as="textarea" rows={5}
                        placeholder="Describe this goal?"
                        id="description"
                        name="description"
                        value={ goal.description }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-4">
                <Form.Label style={{fontStyle: 'italic', color:'orange'}}>WHAT IS THE STATUS OF THIS GOAL?</Form.Label>
                    <Form.Select 
                        aria-label="status"
                        name="status"
                        defaultValue={ goal.status }
                        onChange={handleChange}
                    >
                        <option>select a status</option>
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Finished">Finished</option>
                    </Form.Select>
                </Form.Group>
                <Button className='m-4' style={{backgroundColor:'orange', border:'orange'}} type='submit'> Submit</Button>
                

        </Form>

      </Container>
      
    </div>
  )
}

export default GoalForm
