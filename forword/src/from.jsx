import { useActionState } from "react";
import { useFormState, useFormStatus } from 
"react-dom";
import Tri from "./use tri";

function From() {
  const handle = async (event) => {
    // event.preventDefault();

    await new Promise((resolve) => {
      setTimeout(() => {
        console.log("hello");
        resolve();
      }, 2000);
    });

    console.log("Form submitted!");
  };

  const Host = () => {
    const { pending } = useFormStatus();
    console.log(pending);

    return (
      <>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <button disabled={pending}>{pending?"Submiting":"Submit"}</button>
       
      </>
    );
  };

  return (
    <><div>
      <h1>Form</h1>
      <form action={handle}>
        <Host />
      </form>
     
    </div>
      <Tri/>
      </>
  );
}

export default From;
