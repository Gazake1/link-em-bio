// db.js
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

// Cria o Pool de conexão
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});

// Evento de conexão
pool.on("connect", () => {
  console.log("PostgreSQL conectado");
});

// Evento de erro
pool.on("error", (err) => {
  console.error("Erro no pool de conexão:", err);
});
