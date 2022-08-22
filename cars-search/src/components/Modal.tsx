import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { Alert, FormRow } from ".";
import {
  Button,
  SubmitButton,
  ButtonsContainer,
  ModalContainer,
  Form,
  ModalWrapper,
} from "../styledComponents";

type EditItem = {
  id: string;
  make: string;
  vin: string;
  plate_number: string;
  cost: string;
  photo: string;
};

const Modal = () => {
  const {
    editItem,
    isEdit,
    // replaceItem,
    // closeModal,
    // addItem,
    // displayAlert,
    showAlert,
  } = useContext(AppContext);

  const [details, setDetails] = useState<EditItem>(editItem);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let isEmptyValue: boolean = false;

    for (const key in details) {
      if (key !== "id") {
        if (!details[key as keyof EditItem]) {
          isEmptyValue = true;
        }
      }
    }

    if (isEmptyValue === false) {
      if (isEdit) {
        // replaceItem(details);
        // closeModal();
        console.log("isEdit");
      } else {
        // addItem(details);
        // closeModal();
        console.log("!isEdit");
      }
    } else {
      // displayAlert("Can't submit empty value");
      console.log("Can't submit empty value");
    }
  };

  return (
    <ModalContainer>
      <ModalWrapper>
        <h4>cars details</h4>
        <Form>
          <FormRow
            type="text"
            name="make"
            value={details.make}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="vin"
            value={details.vin}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="plate_number"
            value={details.plate_number}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="cost"
            value={details.cost}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="photo"
            value={details.photo}
            handleChange={handleChange}
          />
          <ButtonsContainer>
            <SubmitButton type="submit" onClick={handleSubmit}>
              execute
            </SubmitButton>
            <Button
              type="button"
              // onClick={closeModal}
              onClick={() => {
                console.log("close modal");
              }}
            >
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
