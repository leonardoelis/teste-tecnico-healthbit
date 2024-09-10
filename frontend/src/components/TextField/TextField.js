import { Form } from "react-bootstrap";

function TextField(props){
    
    return (
        <Form.Group className="my-3">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                required 
                type="text" 
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                pattern={props.pattern}
            />
            <Form.Control.Feedback type="invalid">
                Preencha com um valor válido para {props.label}
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export default TextField;