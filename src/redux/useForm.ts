import { useState } from "react";
import { StoreType } from "../pages/home/interfaces/store.interface";
import { BrandType } from "../pages/home/interfaces/brand.interface";

// CREATE USER HOOK

export const useForm = (
  initialForm: any,
  validateForm: any,
  stores: StoreType[]
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({
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
    storesIncludes: [],
    department: "",
    province: "",
    country: "",
    direction: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e: any) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length !== 0) {
      alert("Enviando formulario");
      setLoading(true);
      // ENVIAR FORMULARIO
    } else {
      alert("error");
      return;
    }
  };

  const handleChangeEmails = (e: any) => {
    e.preventDefault();
    if (e.target.value !== "Select a genre") {
      const updatedSet: any = new Set([...form.emails, e.target.value]);
      setForm({
        ...form,
        emails: [updatedSet],
      });
    }
  };

  const handleChangePhones = (e: any) => {
    e.preventDefault();
    if (e.target.value !== "Select a genre") {
      const updatedSet: any = new Set([...form.phones, e.target.value]);
      setForm({
        ...form,
        phones: [updatedSet],
      });
    }
  };

  const handleChangBrand = (e: any) => {
    e.preventDefault();
    if (e.target.value !== "Seleccione una marca") {
      let brands: BrandType[] = stores.map(
        (s: StoreType, index: number) => s.brand
      );
      const brand: BrandType | undefined = brands.find(
        (b: BrandType) => b.brandName === e.target.value
      );
      setForm({
        ...form,
        brand: brand?.id,
      });
    }
  };

  const handleChangeStore = (e: any) => {
    e.preventDefault();
    if (e.target.value !== "Seleccione una tienda") {
      const store: StoreType | undefined = stores.find(
        (store: StoreType) => store.storeName === e.target.value
      );
      const updatedSet: any = new Set([...form.storesIncludes, store?.id]);
      setForm({
        ...form,
        storesIncludes: [...updatedSet],
      });
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleChangBrand,
    handleChangeStore,
  };
};
