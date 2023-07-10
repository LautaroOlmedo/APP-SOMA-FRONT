import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createUserAction } from "../../../redux/actions/users.actions";
import { UserType } from "../../home/interfaces/user.interface";
import { loadStoresAction } from "../../../redux/actions/stores.actions";
import { RootState } from "../../../redux/store";
import { StoreType } from "../../home/interfaces/store.interface";
import { useForm } from "../../../redux/useForm";

const initialForm = {
  firstname: "",
  lastname: "",
  age: "",
  username: "",
  dni: "",
  password: "",
  role: "",
  brand: "",
  emails: [],
  phones: [],
  storesIncludes: [], // MODIFICAR POR INTERFACE DE STORES
  department: "",
  province: "",
  country: "",
  direction: "",
};

const validationsForm = (form: any) => {
  let errors = {
    firstname: "",
    lastname: "",
    age: "",
    dni: "",
  };
  //parseInt(form.age);

  if (!form.firstname.trim()) {
    errors.firstname = "El campo 'Nombre' es requerido";
  }

  if (!form.lastname.trim()) {
    errors.firstname = "El campo 'Apellido' es requerido";
  }

  if (!form.age.trim()) {
    errors.age = "El campo 'Edad' es requerido";
  } else if (form.age < 18 || form.age > 50) {
    errors.age = "La edad no puede ser menor a '18' ni mayor que '50'";
  }

  if (!form.dni.trim()) {
    errors.dni = "El campo 'DNI' es requerido";
  }

  return errors;
};
let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};
//export const UsersPage: React.FC<{}> = (initialForm: any, validateForm: any) =>

export default function CreateUser() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadStoresAction() as any);
  }, [dispatch]);

  const selectIsOn = (state: RootState) => state.storeReducer;
  const store = useSelector(selectIsOn);
  let allStores = store.stores;
  console.log(allStores);

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleChangBrand,
    handleChangeStore,
  } = useForm(initialForm, validationsForm, allStores);

  return (
    <div>
      <div>
        <h2>Crear Usuario</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            placeholder="Nombre.."
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.firstname}
            required
          />
          {errors.firstname && <p style={styles}>{errors.firstname}</p>}

          <input
            type="text"
            name="lastname"
            placeholder="Apellido.."
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.lastname}
            required
          />

          <input
            type="text"
            name="age"
            placeholder="Edad.."
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.age}
            required
          />

          <input
            type="text"
            name="username"
            placeholder="Nombre de usuario.."
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.username}
            required
          />

          <input
            type="text"
            name="dni"
            placeholder="DNI.."
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.dni}
            required
          />

          <input
            type="text"
            name="password"
            placeholder="Contraseña.."
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.password}
            required
          />

          <input
            type="text"
            name="role"
            placeholder="Rol.."
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.role}
            required
          />

          <select onChange={handleChangBrand}>
            <option>Seleccione una marca</option>
            {allStores &&
              allStores.map((s: StoreType, index: number) => (
                <option key={index} value={s.brand.brandName}>
                  {s.brand.brandName}
                </option>
              ))}
          </select>

          <select onChange={handleChangeStore}>
            <option>Seleccione una tienda</option>
            {allStores &&
              allStores.map((s: StoreType, index: number) => (
                <option key={index} value={s.storeName}>
                  {s.storeName}
                </option>
              ))}
          </select>

          <input type="submit" value={"Enviar"} />
        </form>
      </div>
    </div>
  );
}
