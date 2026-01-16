import { Router } from "express";
import { pool } from "../database/db.js";
import { authAdmin } from "../middlewares/auth.js";

const router = Router();

/* =========================
   LISTAR usuários (ADMIN)
========================= */
router.get("/", authAdmin, async (req, res) => {
  try {
    const query = `
      SELECT
        id,
        nome,
        email,
        telefone,
        cpf,
        data_nascimento,
        ultima_visita,
        frequencia,
        status_cliente,

        CASE
          WHEN frequencia >= 10 THEN 'gold'
          WHEN frequencia >= 5 THEN 'silver'
          ELSE 'none'
        END AS engagement_rank,

        criado_em
      FROM users
      ORDER BY
        frequencia DESC,
        ultima_visita DESC NULLS LAST;
    `;

    const result = await pool.query(query);
    return res.json(result.rows);
  } catch (error) {
    console.error("Erro ao listar usuários (admin):", error);
    return res.status(500).json({ error: "Erro interno" });
  }
});

/* =========================
   ATUALIZAR dados (ADMIN)
========================= */
router.put("/:id", authAdmin, async (req, res) => {
  const { id } = req.params;
  const { ultima_visita, frequencia, status_cliente } = req.body;

  if (frequencia < 0) {
    return res.status(400).json({ error: "Frequência inválida" });
  }

  if (
    status_cliente &&
    !["never_visited", "active", "inactive"].includes(status_cliente)
  ) {
    return res.status(400).json({ error: "Status inválido" });
  }

  try {
    const query = `
      UPDATE users
      SET
        ultima_visita = $1,
        frequencia = $2,
        status_cliente = $3
      WHERE id = $4
      RETURNING *;
    `;

    const values = [
      ultima_visita ?? null,
      frequencia ?? 0,
      status_cliente ?? "never_visited",
      id
    ];

    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    return res.json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao atualizar usuário (admin):", error);
    return res.status(500).json({ error: "Erro interno" });
  }
});

export default router;
