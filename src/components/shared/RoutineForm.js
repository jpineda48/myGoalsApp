import { Form, Button, Container } from 'react-bootstrap'



const RoutineForm = (props) => {
    const { routine, handleChange, handleSubmit } = props
  return (
    <div>
        <Container className='justify-content-center'>
        <h3>Add an Task</h3>
        <Form onSubmit={handleSubmit}>
                <Form.Group className="m-2">
                    <Form.Label>Task:</Form.Label>
                    <Form.Control 
                        placeholder="title of task?"
                        id="task"
                        name="task"
                        value={ routine.task }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-2">
                <Form.Label>Goal Status:</Form.Label>
                    <Form.Select 
                        aria-label="time_of_day"
                        name="time_of_day"
                        defaultValue={ routine.time_of_day }
                        onChange={handleChange}
                    >
                        <option>Open this select menu</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                    </Form.Select>
                </Form.Group>
                
              
               
                <Button className='m-2' type='submit'> Submit</Button>
                

        </Form>

      </Container>
      
    </div>
  )
}

export default RoutineForm