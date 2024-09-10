import { Form } from "react-bootstrap";

function Radio(props){
    const radios = props.radios;
    
    return (
        <Form.Group className="my-3">
            <Form.Label>{props.label}</Form.Label>
            {radios.map((radio, index) => {
                return <Form.Check
                            required 
                            type="radio" 
                            name={props.name} 
                            label={radio} 
                            key={index}
                            value={radio}
                            checked={props.value === radio}
                            onChange={props.onChange}
                            isInvalid={radio === "Não" && props.value === radio}></Form.Check>
            })}
            <Form.Control.Feedback type="invalid">
                Escolha uma das opções para {props.label} {props.pattern}
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export default Radio;