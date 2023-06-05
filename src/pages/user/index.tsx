import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { loadUsersAction } from "../../redux/actions/users.actions";
import { UserType } from "../home/interfaces/user.interface";
import { UserCardComponent } from "../../components/UserCradComponent";

export const UsersPage: React.FC<{}> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsersAction() as any);
  }, [dispatch]);

  const selectIsOn = (state: RootState) => state.user;
  const user = useSelector(selectIsOn);
  let allUsers = user.users;
  console.log(allUsers);
  return (
    <div>
      {/* <Sidebar /> */}

      <br />
      <br />
      <br />
      <div>
        {allUsers?.length !== 0 ? (
          allUsers?.map((u: UserType) => (
            <UserCardComponent // Ajusta el nombre del componente
              key={u.id}
              id={u.id}
              firstname={u.firstname}
              lastname={u.lastname}
              username={u.username}
              age={u.age}
              dni={u.dni}
              role={u.role}
              brand={u.brand}
              storesIncludes={u.storesIncludes}
              createdAt={u.createdAt}
              updatedAt={u.updatedAt}
              password={""}
            />
          ))
        ) : (
          <div>No hay resultados</div>
        )}
      </div>
    </div>
  );
};
