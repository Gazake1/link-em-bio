import jwt from "jsonwebtoken";

export function authAdmin(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: "Token não enviado",
    });
  }

  // Espera: "Bearer token"
  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return res.status(401).json({
      error: "Token mal formatado",
    });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({
      error: "Token mal formatado",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // exemplo de verificação de admin
    if (!decoded.isAdmin) {
      return res.status(403).json({
        error: "Acesso negado",
      });
    }

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      error: "Token inválido ou expirado",
    });
  }
}
