import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ADMIN_EMAIL = "admin@enkonix.in";
const ADMIN_PASSWORD = "admin123";

const AuthPage = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isForgot, setIsForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState("");

  // Registration handler
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lastname || !firstName || !email || !password) {
      setError("Please fill all fields.");
      return;
    }
    // Save user to localStorage with registration time
    const registerTime = new Date().toISOString();
    localStorage.setItem(
      "user",
      JSON.stringify({ lastname, firstName, email, password, registerTime }),
    );

    setError("");
    alert("Registration successful! You can now login.");
    setIsLogin(true);
  };

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    // Admin login
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");

      router.push("/admin-dashbord");
      return;
    }
    // User login
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user = JSON.parse(userStr);
      if (user.email === email && user.password === password) {
        localStorage.setItem("isAdmin", "false");
        const updatedUser = { ...user, loginTime: new Date().toISOString() };
        localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
        localStorage.setItem("user", JSON.stringify(updatedUser));
        router.push("/home1");
        return;
      }
    }
    setError("Invalid credentials.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950">
      <div className="w-full  max-w-3xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 border-2 border-blue-100 dark:border-blue-800">
        <Image
          src="/logo-stackly.png"
          alt="Auth Image"
          className="mb-6 rounded-lg justify-center mx-auto"
          width={100}
          height={50}
        />
        <h2 className="text-3xl font-extrabold text-blue-900 dark:text-blue-200 mb-2   text-center">
          {isForgot ? "Reset Password" : isLogin ? "Login" : "Register"}
        </h2>
        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
        {forgotSuccess && (
          <div className="mb-4 text-green-600 text-center">{forgotSuccess}</div>
        )}
        {/* Forgot Password Form */}
        {isForgot ? (
          <div className="flex w-full">
            <div className="w-1/2">
              <Image
                src="https://i.pinimg.com/1200x/92/f2/98/92f2984ebd391d7e8c17a1e3cd673e46.jpg"
                alt="Forgot Password"
                className=""
                width={500}
                height={500}
              />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!forgotEmail || !newPassword) {
                  setError("Please fill all fields.");
                  return;
                }
                // Admin password reset
                if (forgotEmail === ADMIN_EMAIL) {
                  setError("Admin password cannot be reset here.");
                  return;
                }
                const userStr = localStorage.getItem("user");
                if (userStr) {
                  const user = JSON.parse(userStr);
                  if (user.email === forgotEmail) {
                    const updatedUser = { ...user, password: newPassword };
                    localStorage.setItem("user", JSON.stringify(updatedUser));
                    setForgotSuccess(
                      "Password reset successful! You can now login.",
                    );
                    setError("");
                    setForgotEmail("");
                    setNewPassword("");
                    setTimeout(() => {
                      setIsForgot(false);
                      setForgotSuccess("");
                      setIsLogin(true);
                    }, 2000);
                    return;
                  }
                }
                setError("Email not found.");
              }}
              className="flex flex-col gap-6 w-1/2 justify-center"
            >
              <input
                type="email"
                placeholder="Registered Email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full pr-12"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-700 dark:text-blue-300 text-sm focus:outline-none"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              <button
                type="submit"
                className="bg-blue-700 dark:bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 dark:hover:bg-blue-950 transition"
              >
                Reset Password
              </button>
              <p className="mt-2 text-center">
                Remembered your password?{" "}
                <span
                  className="text-blue-700 dark:text-blue-300 cursor-pointer"
                  onClick={() => {
                    setIsForgot(false);
                    setError("");
                    setForgotSuccess("");
                  }}
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        ) : isLogin ? (
          <div className=" flex w-full ">
            <div className=" w-1/2 ">
              <Image
                src="https://i.pinimg.com/1200x/92/f2/98/92f2984ebd391d7e8c17a1e3cd673e46.jpg"
                alt="Admin Login"
                className=" w-full h-full object-cover "
                width={500}
                height={500}
              />
            </div>
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-6 w-1/2 justify-center"
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full pr-12"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-700 dark:text-blue-300 text-sm focus:outline-none"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              <span
                className="text-blue-700 dark:text-blue-300 cursor-pointer mr-2"
                onClick={() => {
                  setIsForgot(true);
                  setError("");
                  setForgotSuccess("");
                }}
              >
                Forgot Password?
              </span>
              <button
                type="submit"
                className="bg-blue-700 dark:bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 dark:hover:bg-blue-950 transition"
              >
                Login
              </button>
              <p className="mt-2 text-center text-">
                Don't have an account?{" "}
                <span
                  className="text-blue-700 dark:text-blue-300 cursor-pointer"
                  onClick={() => {
                    setIsLogin(false);
                    setError("");
                  }}
                >
                  Register
                </span>
              </p>
            </form>
          </div>
        ) : (
          <div className="flex w-full">
            <div className=" w-1/2">
              <Image
                src="https://i.pinimg.com/1200x/92/f2/98/92f2984ebd391d7e8c17a1e3cd673e46.jpg"
                alt="Admin Register"
                className=" w-full h-full object-cover  "
                width={500}
                height={500}
              />
            </div>
            <form
              onSubmit={handleRegister}
              className="flex flex-col gap-6 w-1/2 justify-center"
            >
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full pr-12"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-700 dark:text-blue-300 text-sm focus:outline-none"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              <button
                type="submit"
                className="bg-blue-700 dark:bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 dark:hover:bg-blue-950 transition"
              >
                Register
              </button>
              <p className="mt-2  text-center ">
                Already have an account?{" "}
                <span
                  className="text-blue-700 dark:text-blue-300 cursor-pointer"
                  onClick={() => {
                    setIsLogin(true);
                    setError("");
                  }}
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
