import React from "react";
import { useGetAllBrands } from "../../../api/brand/getAllBrands";
import { BrandCartComponent } from "../../../components/Card";

const BrandsManagementPage = () => {
    const allBrands = useGetAllBrands()

    if (allBrands.isLoading) return <>cargando...</>

    if (allBrands.isError){ 
        return <>
          error
        </>
    }
    if (allBrands.data?.length) return <>No hay resultados</>

    return (
        <div>
            <div>ADMINISTRAR MARCAS</div>
            <br />
            <br />
            <br />
            <div>
                {allBrands.data.map(b => (
                    <BrandCartComponent
                        key={b.id}
                        id={b.id}
                        brandName={b.brandName}
                        webSite={b.webSite}
                        createdAt={b.createdAt}
                        updatedAt={b.updatedAt}
                        image={b.image}
                        users={b.users}
                        stores={b.stores}
                    />
                ))
                }
            </div>
        </div>
    );
};

export default BrandsManagementPage
