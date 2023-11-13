import { useState } from "react";
import Input from "../../Form/Input/Index";
import SubmitButton from "../../Form/SubmitButton/Index";

const ServiceForm = () => {

  const [] = useState();

  function submit() {

  }

  return (
    <form action={submit}
      className="border-2 border-black">
      <Input
        type='text'
        text='Service name' />
      <SubmitButton />
    </form>
  )
}

export default ServiceForm;