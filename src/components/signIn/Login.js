import React, { useState } from "react";

const Login = () => {
  const DataInit = { name: "", password: "" };
  const [DataForm, setDataForm] = useState(DataInit);
  const HandleSubmint = (event) => {
    event.preventDefault();
    if (DataForm.password !== "") {
      console.log(DataForm);
    }

    setDataForm(DataInit);
  };
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...DataForm,
      [name]: value,
    });
  };
  return (
    <form onSubmit={(e) => HandleSubmint(e)}>
      <input
        type="text"
        placeholder="Ingrese su nombre"
        name="name"
        value={DataForm.name}
        onChange={(e) => HandleChange(e)}
        required
      />
      <input
        type="password"
        placeholder="ingrese su contraseña"
        name="password"
        value={DataForm.password}
        onChange={(e) => HandleChange(e)}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};
export default Login;
