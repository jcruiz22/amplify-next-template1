import { Pagination } from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import styles from "../../ui/dashboard/entrevistas/entrevistas.module.css";

const EntrevistasPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Buscar Entrevista..." />
        <div className={styles.buttonGroup}>
          <Link href="/dashboard/entrevistas/addManual">
            <button className={styles.addButton}>Agregar Nueva</button>
          </Link>
          <Link href="/dashboard/entrevistas/addIA">
            <button className={styles.addButton}>Agregar IA</button>
          </Link>
        </div>
      </div>
      <table className={styles.table}> 
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Empresa</td>
            <td>Puntualidad</td>
            <td>Calificacion</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>Jean Carlo Ruiz</div>
            </td>
            <td>Amazon</td>
            <td>A tiempo</td>
            <td>4/5</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    Ver
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Borrar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};
export default EntrevistasPage;
