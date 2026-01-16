import jwt from "jsonwebtoken";

export function authAdmin(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não enviado" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // aqui você pode validar role depois
    req.user = decoded;

    next();
  } catch {
    return res.status(401).json({ error: "Token inválido" });
  }
}
