import { Form } from "react-bootstrap";

function Select(props){
    const options = props.options;
    console.log(options);
    return (
        <Form.Group controlId="uf" className="my-3">
            <Form.Label>{props.label}</Form.Label>
            <Form.Select
                required
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            >
                <option value="">- Nenhum -</option>
                {options.map((option, index) => {
                    return <option key={index} value={option}>
                        {option}
                    </option>
                })}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
                Selecione uma das opções do dropdown para {props.label}
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export default Select;