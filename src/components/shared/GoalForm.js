///form will take several props and be used by both create and update
import { Form, Button, Container } from 'react-bootstrap'
import { DatePicker } from 'react-datepicker'
import { useState } from "react";






const GoalForm = (props) => {
  const [date, setDate] = useState(new Date());
  console.log("DATE", date);


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
                    <Form.Label>Start Date:</Form.Label>
                    <Form.Control 
                        placeholder="When are you starting this goal?"
                        DatePicker id="start_date"
                        name="start_date"
                        value={ goal.start_date }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>End Date:</Form.Label>
                    <Form.Control 
                        placeholder="When are you ending this goal?"
                        DatePicker id="end_date"
                        name="end_date"
                        value={ goal.end_date }
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
                        <option value="Started">Financial</option>
                        <option value="In Progress">personal</option>
                        <option value="Finished">Health</option>
                    </Form.Select>
                </Form.Group>
                <Button className='m-2' type='submit'> Submit</Button>
                

        </Form>

      </Container>
      
    </div>
  )
}

export default GoalForm
