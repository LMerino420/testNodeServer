// IMPORTACION DE MODULOS
import mysql from 'promise-mysql';

// IMPORTACION DE CREDENCIALES
import keys from './keys';

// CREACION DE CONEXION
const pool = mysql.createPool(keys.database);
pool.getConnection().then((con) => {
	// INICIALIZA LA CONEXION
	pool.releaseConnection(con);
	console.log('DB CONNECTED');
});

// EXPORTAR LA CONEXION
export default pool;
