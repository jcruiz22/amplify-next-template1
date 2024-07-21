"use client";

import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdPeople,
  MdWork,
  MdHelpCenter,
  MdOutlineSettings,
  MdLaptop,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import { Amplify } from 'aws-amplify';
import { signOut } from "aws-amplify/auth"
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

const menuItems = [
  {
    title: "Paginas",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Candidatos",
        path: "/dashboard/candidatos",
        icon: <MdPeople />,
      },
      {
        title: "Entrevistas",
        path: "/dashboard/entrevistas",
        icon: <MdLaptop />,
      },
      {
        title: "Ofertas",
        path: "/dashboard/ofertas",
        icon: <MdWork />,
      },
    ],
  },
  {
    title: "Usuario",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          className={styles.userLogo}
          src="/logo.png"
          alt="logo"
          width="50%"
          height="50%"
        />
      </div>
      <div className={styles.user}>
        <img
          className={styles.userImage}
          src="/noavatar.png"
          alt="logo"
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.userName}>ADMINISTRADOR</span>
          <span className={styles.userTitle}>Administrador</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title} className={styles.categoryItem}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button onClick={signOut} className={styles.logout}>
        <MdLogout />
        Cerrar Sesion
        </button>
    </div>
  );
};

export default Sidebar;
