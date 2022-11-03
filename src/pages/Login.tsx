import { useForm } from "react-hook-form";
import Header from "@/components/Header";

const Login = (): JSX.Element => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e: any): void => {
    alert(JSON.stringify(e));
  };

  return (
    <div className="font-lato">
      <Header />
      <main className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center w-[306px] h-[420px] justify-center border-b-black border-b"
        >
          <h2 className="font-medium">Entrar</h2>
          <input
            {...register("email")}
            placeholder="Introduce tu email"
            className="w-[250px] m-3 text-center rounded-[100px] h-[70px] border-2 border-gray-600  focus:outline-none focus:border-2 focus:border-sky-500 transition duration-300"
          />
          <input
            {...register("password")}
            placeholder="Introduce tu contraseña"
            className="w-[250px] m-3 text-center rounded-[100px] h-[70px] border-2 border-gray-600  focus:outline-none focus:border-2 focus:border-sky-500 transition duration-300"
          />
          <button
            className="w-[250px] text-white m-3 text-center rounded-[100px] h-[70px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
