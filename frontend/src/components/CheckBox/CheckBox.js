import { Form } from "react-bootstrap";

function CheckBox(props){
    const items = props.items;
    return (
        <Form.Group>
            <Form.Label>{props.label}</Form.Label>
            {items !== undefined ? (
                items.map((item, index) => {
                    return <Form.Check
                                type="checkbox"
                                name={props.name}
                                label={item}
                                key={index}
                                value={item}
                                checked={props.value.includes(item)}
                                onChange={props.onChange}></Form.Check>
                })
            ) : (
                <p>Nenhuma opção disponível</p> 
            )}
        </Form.Group>
    );
}

export default CheckBox;