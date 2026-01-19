import { Router } from "express";
import { pool } from "../database/db.js";
import { authAdmin } from "../middlewares/auth.js";

const router = Router();

/* =========================
   Listar usuários (admin)
========================= */
router.get("/", authAdmin, async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      status,
      rank
    } = req.query;

    const offset = (page - 1) * limit;

    let where = [];
    let values = [];
    let idx = 1;

    // 🔍 BUSCA (nome, email ou CPF)
    if (search) {
      where.push(`
        (
          nome ILIKE $${idx}
          OR email ILIKE $${idx}
          OR cpf ILIKE $${idx}
        )
      `);
      values.push(`%${search}%`);
      idx++;
    }

    // 🟡 FILTRO STATUS
    if (status) {
      where.push(`status_cliente = $${idx}`);
      values.push(status);
      idx++;
    }

    // 🟣 FILTRO RANK
    if (rank) {
      where.push(`rank = $${idx}`);
      values.push(rank);
      idx++;
    }

    const whereSQL = where.length ? `WHERE ${where.join(" AND ")}` : "";

    // 🔢 TOTAL
    const totalResult = await pool.query(
      `SELECT COUNT(*) FROM users ${whereSQL}`,
      values
    );

    const total = Number(totalResult.rows[0].count);

    // 📄 DADOS
    const usersResult = await pool.query(
      `
      SELECT
        id,
        nome,
        cpf,
        telefone,
        email,
        data_nascimento,
        frequencia,
        status_cliente,
        rank,
        ultima_visita
      FROM users
      ${whereSQL}
      ORDER BY criado_em DESC
      LIMIT $${idx} OFFSET $${idx + 1}
      `,
      [...values, limit, offset]
    );

    res.json({
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
      users: usersResult.rows
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao listar usuários" });
  }
});




/* =========================
   Atualizar usuário (admin)
========================= */
router.get("/:id", authAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `
      SELECT
        id,
        nome,
        cpf,
        telefone,
        email,
        data_nascimento,
        frequencia,
        status_cliente,
        rank,
        ultima_visita
      FROM users
      WHERE id = $1
      `,
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro GET users/:id:", error);
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
});

/* =========================
   Atualizar usuário (admin)
========================= */
router.put("/:id", authAdmin, async (req, res) => {
  const { id } = req.params;

  const {
    nome,
    telefone,
    email,
    data_nascimento,
    frequencia,
    status_cliente,
    rank,
    ultima_visita
  } = req.body;

  try {
    const result = await pool.query(
      `
      UPDATE users
      SET
        nome = $1,
        telefone = $2,
        email = $3,
        data_nascimento = $4,
        frequencia = $5,
        status_cliente = $6,
        rank = $7,
        ultima_visita = $8
      WHERE id = $9
      RETURNING *
      `,
      [
        nome,
        telefone || null,
        email,
        data_nascimento,
        frequencia ?? 0,
        status_cliente ?? 'never_visited',
        rank ?? 'Bronze',
        ultima_visita || null,
        id
      ]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro PUT admin/users:", error);
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
});



export default router;
