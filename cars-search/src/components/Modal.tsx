import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { Alert, FormRow } from ".";
import { Car } from "../types";
import {
  Button,
  SubmitButton,
  ButtonsContainer,
  ModalContainer,
  Form,
  ModalWrapper,
} from "../styledComponents";

const Modal = () => {
  const {
    editItem,
    isEdit,
    replaceItem,
    closeModal,
    addItem,
    displayAlert,
    showAlert,
  } = useContext(AppContext);

  const [car, setCar] = useState<Car>(editItem);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let isEmptyValue: boolean = false;

    for (const key in car) {
      if (key !== "id") {
        if (!car[key as keyof Car]) {
          isEmptyValue = true;
        }
      }
    }

    if (isEmptyValue === false) {
      if (isEdit) {
        replaceItem?.(car);
        closeModal?.();
      } else {
        addItem?.(car);
        closeModal?.();
      }
    } else {
      displayAlert?.("Can't submit empty value");
    }
  };

  return (
    <ModalContainer>
      <ModalWrapper>
        <h4>cars car</h4>
        <Form>
          <FormRow
            type="text"
            name="make"
            value={car.make}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="vin"
            value={car.vin}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="plate_number"
            value={car.plate_number}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="cost"
            value={car.cost}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="photo"
            value={car.photo}
            handleChange={handleChange}
          />
          <ButtonsContainer>
            <SubmitButton type="submit" onClick={handleSubmit}>
              execute
            </SubmitButton>
            <Button type="button" onClick={closeModal}>
              cancel
            </Button>
          </ButtonsContainer>
          {showAlert && <Alert />}
        </Form>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;
