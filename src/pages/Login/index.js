import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import authApi from "../../axios/authApi";

function Login() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const email = localStorage.getItem("email");

  //state
  const [data, setData] = useState("");
  const [valueForm, setValueForm] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (email) {
      setValueForm(email);
    }
  }, [email]);

  useEffect(() => {
    if (token) {
      return history.push("/");
    }
  }, [token, data]);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    let dataForm = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    setData(dataForm);
    try {
      const login = await authApi.login(dataForm);
      if (login.accessToken) {
        localStorage.setItem("token", login.accessToken);
        return history.push("/");
      }
    } catch (error) {
      if (error.response.status == 401) {
        setMessage("Tài khoản hoặc mật khẩu không chính xác");
      }
    }
  };

  return (
    <div className="login flex justify-center items-center">
      <form onSubmit={handleSubmitLogin} className="max-w-md w-full">
        <div className="flex-col w-full space-y-8 p-10 login__background rounded-lg">
          <div className="text-3xl">Đăng Nhập</div>
          {message && (
            <React.Fragment>
              <div
                class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span class="block sm:inline">{message}</span>
                <span
                  onClick={() => setMessage("")}
                  class="absolute top-0 bottom-0 right-0 px-4 py-3"
                >
                  <svg
                    class="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            </React.Fragment>
          )}
          <div class="w-full px-3 ">
            <input
              value={valueForm}
              name="email"
              class="appearance-none block w-full bg-gray-500 text-gray-200 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none"
              id="grid-last-name"
              type="text"
              placeholder="Email của bạn"
            />
          </div>
          <div class="w-full px-3">
            <input
              name="password"
              class="appearance-none block w-full bg-gray-500 text-gray-200 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none"
              id="grid-last-name"
              type="password"
              placeholder="Mật khẩu"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              class="bg-red-600 text-white w-[250px] text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Đăng nhập
            </button>
          </div>

          <div className="flex space-x-2">
            <span>Bạn mới tham gia?</span>
            <Link to="/register" className="cursor-pointer">
              <span>Đăng kí ngay</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
