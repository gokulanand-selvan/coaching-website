import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode, useState } from "react";
import styles from "./styles.module.css"; // Make sure to import your CSS module
import { MdClose } from "react-icons/md";

type FormData = {
  name: string;
  email: string;
  mobileNumber: string;
  education: string;
  yearPassedOut: string;
};

const Register = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobileNumber: "",
    education: "",
    yearPassedOut: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputs = [
    { type: "text", name: "name", placeholder: "Name" },
    { type: "email", name: "email", placeholder: "Email" },
    { type: "tel", name: "mobileNumber", placeholder: "Mobile Number" },
    { type: "text", name: "education", placeholder: "Education" },
    { type: "text", name: "yearPassedOut", placeholder: "Year of Passed Out" },
  ];

  return (
    <Dialog.Root>
      <Dialog.Trigger className="cursor-pointer" asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.Overlay} />
        <Dialog.Content className={styles.Content}>
          <Dialog.Title className={styles.Title}>Register</Dialog.Title>
          <Dialog.Description className={styles.Description}>
            For Contact Please register
          </Dialog.Description>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 p-2 mb-4">
              <input
                type={inputs[0].type}
                name={inputs[0].name}
                placeholder={inputs[0].placeholder}
                value={formData[inputs[0].name as keyof FormData]}
                onChange={handleChange}
                required
                className={styles.Input}
              />
              <input
                type={inputs[1].type}
                name={inputs[1].name}
                placeholder={inputs[1].placeholder}
                value={formData[inputs[1].name as keyof FormData]}
                onChange={handleChange}
                required
                className={styles.Input}
              />
              <input
                type={inputs[2].type}
                name={inputs[2].name}
                placeholder={inputs[2].placeholder}
                value={formData[inputs[2].name as keyof FormData]}
                onChange={handleChange}
                required
                className={styles.Input}
              />
              <input
                type={inputs[3].type}
                name={inputs[3].name}
                placeholder={inputs[3].placeholder}
                value={formData[inputs[3].name as keyof FormData]}
                onChange={handleChange}
                required
                className={styles.Input}
              />
            </div>
            <div>
              <button
                type="submit"
                className={"bg-black text-white p-3 rounded-md w-full"}
              >
                Submit
              </button>
            </div>
          </form>

          <Dialog.Close asChild>
            <button className={styles.IconButton} aria-label="Close">
              <MdClose fontSize={24} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Register;
