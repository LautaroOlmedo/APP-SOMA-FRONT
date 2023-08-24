import React from 'react';
import { useGetAllUsers } from '../../api/user/useGetAllUsers';
import { UserCardComponent } from '../../components/UserCradComponent';

const UsersPage = () => {
    const allUsers = useGetAllUsers()

    if(allUsers.isLoading) return <>Cargando..</>

    if(allUsers.isError) return <>Error</>

    if(allUsers.data.length === 0) return <>No hay resultados</>

    return (
        <div>
            {/* <Sidebar /> */}

            <br />
            <br />
            <br />
            <div>
                {
                    allUsers.data.map(u => (
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
                            password={''}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default UsersPage
