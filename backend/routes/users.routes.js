import { Router } from "express";
import { pool } from "../database/db.js";
import { validateCpf } from "../utils/validateCpf.js";
import { validateEmail } from "../utils/valideEmail.js";

const router = Router();

/* =========================
   Criar usuário
========================= */
router.post("/", async (req, res) => {
  const {
    nome,
    cpf,
    telefone,
    email,
    data_nascimento
  } = req.body;

  // valida campos obrigatórios
  if (!nome || !cpf || !email || !data_nascimento) {
    return res.status(400).json({
      error: "Dados obrigatórios não informados",
    });
  }

  // valida CPF
  if (!validateCpf(cpf)) {
    return res.status(400).json({
      error: "CPF inválido",
    });
  }

  // valida email
  if (!validateEmail(email)) {
    return res.status(400).json({
      error: "Email inválido",
    });
  }

  try {
    const query = `
      INSERT INTO users (
        nome,
        cpf,
        telefone,
        email,
        data_nascimento,
        ultima_visita,
        frequencia,
        status_cliente,
        rank
      )
      VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        NULL,
        0,
        'never_visited',
        'Rank bronze'
      )
      RETURNING
        id,
        criado_em;
    `;

    const values = [
      nome.trim(),
      cpf.replace(/\D/g, ""),
      telefone || null,
      email.toLowerCase().trim(),
      data_nascimento,
    ];

    const result = await pool.query(query, values);

    return res.status(201).json({
      id: result.rows[0].id,
      nome,
      cpf,
      telefone,
      email,
      data_nascimento,
      ultima_visita: null,
      frequencia: 0,
      status_cliente: "never_visited",
      rank: 0,
      criado_em: result.rows[0].criado_em,
    });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        error: "CPF ou email já cadastrado",
      });
    }

    console.error("Erro ao criar usuário:", error);
    return res.status(500).json({
      error: "Erro interno do servidor",
    });
  }
});

export default router;
