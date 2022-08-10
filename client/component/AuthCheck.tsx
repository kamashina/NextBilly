import { useRouter } from "next/router";
import { FC } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import Login from "../pages/Login";
import LoadingImage from "./LoadingImage";
import MainContainer from "./MainContainer";
interface IAuth {
  children: React.ReactNode;
}

const AuthCheck: FC<IAuth> = ({ children }) => {
  const { data, loading } = useAppSelector((state) => state.authorization);
  const route = useRouter();
  if (typeof window !== "undefined" && data === null) route.push("/Login");
  if (data.id === "") {
    if (loading === true) {
      return (
        <MainContainer>
          <LoadingImage url="/loading-5.gif" />
        </MainContainer>
      );
    }
    return (
      <MainContainer>
        <Login />
      </MainContainer>
    );
  }
  return <div>{children}</div>;
};

export default AuthCheck;
