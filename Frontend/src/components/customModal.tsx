"use client"

import { ReactElement, useState } from "react";
import Input from "./input";
import { X } from "lucide-react";
import Button from "./buttons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { login, register } from "@/lib/features/auth/authSlice";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactElement;
  title?: string;
  isLogin?: boolean;
  isRegister?: boolean;
  isTicket?: boolean;
}

export default function CustomModal({
  isOpen = false,
  onClose,
  title,
  isLogin,
  isRegister,
  isTicket,
}: ModalProps) {


  const [mode, setMode] = useState<"login" | "register" | "ticket" | "">(
    isLogin ? "login" : isRegister ? "register" : isTicket ? "ticket" : ""
  );

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  async function handleLogin() {
    try {
      await dispatch(login({
        email,
        password
      })).unwrap();

    } catch (err) {
      alert("Error" + err)
    }


  }

  async function handleRegister() {

    try {
      await dispatch(register({
        username,
        email,
        password
      })).unwrap();

    } catch (err) {
      alert("Error" + err)
    }
  }

  async function handleTicket() {

  }
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center 
      bg-black/50 transition-opacity duration-300 
      ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <div
        className={`relative rounded-2xl w-96 h-auto bg-black/90 transition-all duration-500 transform 
        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
      >
        <div className="h-12 w-full mt-2 pt-2 text-center border-b-2 border-gray-100">
          <div className="text-xl">{title}</div>
          <X
            onClick={onClose}
            className="absolute w-6 h-6 mt-2 top-2 right-2 text-gray-500 hover:text-red-400 cursor-pointer"
          />
        </div>

        <div className="mt-4 flex flex-col gap-2 p-2 ">
          {mode === "register" && (
            <>
              <Input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
              <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </>
          )}
          {mode === "login" && <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />}
          <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </div>

        <div className="mt-2 p-2 pb-2">
          <Button className="w-full rounded-md" size="lg" variant="special" onClick={isLogin ? handleLogin : isRegister ? handleRegister : handleTicket}>
            {isLogin ? "Log In" : isRegister ? "Sign Up" : "Add Ticket"}
          </Button>

          {mode === "login" && (
            <p className="text-muted text-xs text-center p-4">
              New User?
              <span
                className="text-indigo-500 cursor-pointer hover:underline ml-2"
                onClick={() => setMode("register")}
              >
                Create Account
              </span>
            </p>
          )}

          {mode === "register" && (
            <p className="text-muted text-xs text-center p-4">
              Already A User?
              <span
                className="text-indigo-500 cursor-pointer hover:underline ml-2"
                onClick={() => setMode("login")}
              >
                Log In
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
