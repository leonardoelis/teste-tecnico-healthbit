import { Form } from "react-bootstrap";

function NumberField(props){
    return (
        <Form.Group className="my-3">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                required 
                type="number" 
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

export default NumberField;