import { Form, Button, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'



const RoutineForm = (props) => {
    const { routine, handleChange, handleSubmit } = props
  return (
    <div>
        <Container className='justify-content-center'>
        <h3>Add to Your Routine</h3>
        <Form onSubmit={handleSubmit}>
                <Form.Group className="m-2">
                    <Form.Label>Action:</Form.Label>
                    <Form.Control 
                        style={{fontStyle: 'italic'}}
                        placeholder="title of action"
                        id="task"
                        name="task"
                        value={ routine.task }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-2">
                <Form.Label>Time of Day:</Form.Label>
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
                
              
               
                <Button className='m-2' style={{backgroundColor:'teal', border:'teal'}} type='submit'> Submit</Button>
                <Button className='m-2' style={{backgroundColor:'teal', border:'teal'}} type='submit'><Link to={'/'} style={{color:'white', textDecoration:'none'}}>View My Routine</Link></Button>

                

        </Form>

      </Container>
      
    </div>
  )
}

export default RoutineForm