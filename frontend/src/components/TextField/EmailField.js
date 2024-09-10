import { Form } from "react-bootstrap";

function EmailField(props){
    return (
        <Form.Group className="my-3">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                required 
                type="email" 
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
            <Form.Control.Feedback type="invalid">
                Preencha com um valor válido para {props.label}
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export default EmailField;