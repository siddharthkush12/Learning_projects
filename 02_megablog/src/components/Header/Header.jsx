import React from "react";
import { Container, Logoutbtn } from "../index";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Header() {

  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Sign up",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Posts",
      slug: "/add-posts",
      active: authStatus,
    },

  ];
  return (
    <header className="py-3 shadow bg-gradient-to-b from-blue-400 to-purple-300">
      <Container>
        <nav className="flex">
          <div><Link to="/"><img src="Logo.png" className="w-30"/></Link></div>
          <ul className="flex list-none">
              {
                navItems.map((item)=>{
                  item.active && (
                    <li key={item.name}>
                      <button onClick={()=>navigate(item.slug)}>{item.name}</button>
                    </li>
                  )
                })
              }
          </ul>
          {
            authStatus && (
              <li className="list-none">
                <Logoutbtn/>
              </li>
            )
          }
        </nav>
      </Container>
    </header>
  );
}

export default Header;
