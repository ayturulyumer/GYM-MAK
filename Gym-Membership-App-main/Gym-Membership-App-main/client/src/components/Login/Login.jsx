import { useForm } from "../../hooks/useForm.js";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";
import InfoMessage from "../InfoMessage/InfoMessage.jsx";

export default function Login() {
  const { onLoginHandler, message, warningMessage, errorMessage } =
    useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    onLoginHandler
  );

  return (
    <div className="flex h-screen bg-primary">
      <div className="w-full max-w-xs m-auto bg-secondary rounded p-5">
        <header>
          {message === "success" ? (
            <InfoMessage statusMessage={message} />
          ) : message === "warning" ? (
            <InfoMessage statusMessage={message} textMessage={warningMessage} />
          ) : message === "error" ? (
            <InfoMessage statusMessage={message} textMessage={errorMessage} />
          ) : (
            <>
              <h1 className="text-center text-primary font-bold mb-4 ">
                Влезте в вашият акаунт
              </h1>
            </>
          )}
        </header>
        <form method="POST" onSubmit={onSubmit}>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="email">
              Имейл
            </label>
            <input
              className="w-full p-2 mb-6 bg-primary text-secondary border-b-2 border-indigo-500 outline-none"
              type="text"
              name="email"
              value={values.email}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="password">
              Парола
            </label>
            <input
              className="w-full p-2 mb-6 bg-primary text-secondary border-b-2 border-indigo-500 outline-none"
              type="password"
              name="password"
              value={values.password}
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              className="w-full bg-slate-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
              value="Влизане"
            />
          </div>
        </form>
        <footer>
          <a
            className="text-indigo-700 text-center hover:text-primary text-sm float-left"
            href="#"
          >
            Забравена парола?
          </a>
        </footer>
      </div>
    </div>
  );
}
