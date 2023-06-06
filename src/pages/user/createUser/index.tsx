import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createUserAction } from "../../../redux/actions/users.actions";
import { UserType } from "../../home/interfaces/user.interface";
import { loadBrandsAction } from "../../../redux/actions/brands.actions";
import { RootState } from "../../../redux/store";
import { BrandType } from "../../home/interfaces/brand.interface";

type errorsTYpe = {
  firstname: string;
  lastname: string;
};
//export const UsersPage: React.FC<{}> = (initialForm: any, validateForm: any) =>
export const useForm = (initialForm: any, validateForm: any) => {
  const dispatch = useDispatch();

  const [user, setUser] = React.useState(initialForm);
  const [errors, setErrors] = React.useState({
    firstname: "",
    lastname: "",
    age: 0,
    username: "",
    dni: "",
    brand: "",
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleBlur = (e: any) => {
    handleChange(e);
    setErrors(validateForm(user));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setErrors(validateForm(user));

    if (Object.keys(errors).length === 0) {
      dispatch(createUserAction(user) as any);
      alert("VideoGame created!!");
      setUser({
        firstname: "",
        lastname: "",
        age: 0,
        username: "",
        password: "",
        dni: "",
        role: "",
        brand: "",
        department: "",
        province: "",
        country: "",
        direction: "",
        emails: [],
        phones: [],
      });
    } else {
      return;
    }
  };

  //   const handleChangePlatform = (e: any) => {
  //     e.preventDefault();
  //     e.target.value !== "Select a platform"
  //       ? setGame({
  //           ...game,
  //           platforms: [...new Set([...game.platforms, e.target.value])],
  //         })
  //       : alert("platform unknow");
  //   };

  // const handleChangeGender = (e) => {
  //   e.preventDefault();
  //   e.target.value !== "Select a genre"
  //     ? setUser({
  //         ...user,
  //         genders: [...new Set([...game.genders, e.target.value])],
  //       })
  //     : alert("genre unknow");
  // };
  //   const handleDeletePlatform = (el) => {
  //     setGame({
  //       ...game,
  //       platforms: game.platforms.filter((oc) => oc !== el),
  //     });
  //   };
  //   const handleDeleteGender = (el) => {
  //     setGame({
  //       ...game,
  //       genders: game.genders.filter((oc) => oc !== el),
  //     });
  //   };
  return {
    user,
    errors,
    handleChange,
    // handleChangePlatform,
    // handleChangeGender,
    handleBlur,
    handleSubmit,
    // handleDeletePlatform,
    // handleDeleteGender,
  };
};

const initialGame = {
  firstname: "",
  lastname: "",
  age: 0,
  username: "",
  password: "",
  dni: "",
  role: "",
  brand: "",
  department: "",
  province: "",
  country: "",
  direction: "",
  emails: [],
  phones: [],
};
const validationsUser = (user: UserType) => {
  let errors = {
    name: "",
    description: "",
    age: "",
  };
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s0-9]+$/;
  let regexCommentsLen = /^.{1,255}$/;
  //parseFloat(game.rating);

  if (!user.firstname.trim()) {
    errors.description = "El campo NOMBRE es obligatorio";
  } else if (!regexName.test(user.firstname.trim())) {
    errors.name = "El campo NAME solo acepta letras y números";
  }

  if (!user.lastname.trim()) {
    errors.description = "El campo APELLIDO es obligatorio";
  } else if (!regexCommentsLen.test(user.lastname.trim())) {
    errors.description = "El campo APELLIDO solo acepta hasta 255 caracteres";
  }

  if (!user.age) {
    errors.age = "El campo RATING es obligatorio";
  } else if (user.age < 18 || user.age > 65) {
    errors.age = "El campo admite valores entre 0.1 y 10.0";
  }

  if (!user.username.trim()) {
    errors.description = "El campo USUARIO es obligatorio";
  } else if (!regexCommentsLen.test(user.lastname.trim())) {
    errors.description = "El campo USUARIO solo acepta hasta 255 caracteres";
  }

  //   if (!game.released.trim()) {
  //     errors.released = "El campo RELEASED es obligatorio";
  //   }

  return errors;
};

export default function CreateUser() {
  const {
    user,
    errors,
    handleChange,
    // handleChangePlatform,
    // handleChangeGender,
    handleBlur,
    handleSubmit,
    // handleDeletePlatform,
    // handleDeleteGender,
  } = useForm(initialGame, validationsUser);

  const dispatch = useDispatch();
  // const history = useHistory();

  useEffect(() => {
    dispatch(loadBrandsAction() as any);
  }, [dispatch]);

  const selectIsOn = (state: RootState) => state.brandReducer;
  const brand = useSelector(selectIsOn);
  let allBrands = brand.brands;
  console.log(allBrands);

  //   const totalPlatforms = useSelector((state) => state.platforms);
  //   const totalGenders = useSelector((state) => state.genders);
  //   console.log(totalGenders);
  //   console.log(totalPlatforms);

  let styles = {
    fontWeight: "bold",
    color: "#dc3545",
  };

  return (
    <div className="FormularioStyle">
      <div className="Title">CREATE YOUR OWN GAME</div>

      <form className="Form" onSubmit={handleSubmit}>
        <input
          type="text"
          name={"firstname"}
          placeholder="Nombre.."
          onBlur={handleBlur}
          onChange={handleChange}
          value={user.firstname}
          required
        />
        {errors.firstname && <p style={styles}>{errors.firstname}</p>}

        <br />

        <input
          type="text"
          name={"lastname"}
          placeholder="Apellido.."
          onBlur={handleBlur}
          onChange={handleChange}
          value={user.lastname}
        />
        {errors.lastname && <p style={styles}>{errors.lastname}</p>}

        <br />

        <input
          type="date"
          name={"age"}
          placeholder="Edad.."
          onBlur={handleBlur}
          onChange={handleChange}
          value={user.age}
        />
        {errors.age && <p style={styles}>{errors.age}</p>}

        <br />

        <input
          type="text"
          name={"username"}
          placeholder="Usuario.."
          onBlur={handleBlur}
          onChange={handleChange}
          value={user.username}
        />
        {errors.username && <p style={styles}>{errors.username}</p>}

        <br />

        <input
          type="text"
          name={"dni"}
          placeholder="DNI.."
          onBlur={handleBlur}
          onChange={handleChange}
          value={user.dni}
        />
        {errors.dni && <p style={styles}>{errors.dni}</p>}

        {/* <select className="GenderSelect" onChange={handleChangeGender}>
          <option>Select a genre</option>
          {allBrands &&
            allBrands.map((g: BrandType, index: any) => (
              <option key={index} value={g.brandName}>
                {g.brandName}
              </option>
            ))}
        </select> */}

        {/* <input
          type="text"
          name={"rating"}
          placeholder="Rating.."
          onBlur={handleBlur}
          onChange={handleChange}
          value={game.rating}
        />
        {errors.rating && <p style={styles}>{errors.rating}</p>}

        <br />

        
        {game.genders.map((el) => (
          <div key={el}>
            <label>{el}</label>
            <button onClick={() => handleDeleteGender(el)}>X</button>
          </div>
        ))}

        <br />

        <select className="GenderSelect" onChange={handleChangePlatform}>
          <option>Select a platform</option>
          {totalPlatforms &&
            totalPlatforms.map((p, index) => (
              <option key={index} value={p}>
                {p}
              </option>
            ))}
        </select>
        {game.platforms.map((el) => (
          <div key={el}>
            <label>{el}</label>
            <button onClick={() => handleDeletePlatform(el)}>X</button>
          </div>
        ))} */}

        <br />

        <input type="submit" value={"SEND"} />
      </form>
      <Link to={"/home"}>
        <button className="Boton">HOME</button>
      </Link>
    </div>
  );
}
