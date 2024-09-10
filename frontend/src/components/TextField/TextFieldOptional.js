import { Form } from "react-bootstrap";

function TextFieldOptional(props){
    
    return (
        <Form.Group className="my-3">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control 
                type="text" 
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </Form.Group>
    );
}

export default TextFieldOptional;