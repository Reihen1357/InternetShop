import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Form} from "react-bootstrap";

const BrandBar = observer (() => {
    const {device} = useContext(Context)
    return (
        <Form className={"d-flex flex-wrap"}>
            {device.brands.map(brand =>
                <Card
                    style={{cursor: 'pointer'}}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    key={brand.id}
                    className={"m-lg-2-2 p-3"}
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </Card>
            )}
        </Form>
    );
});

export default BrandBar;