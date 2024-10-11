import pool from '../../utils/db';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    let client;
    try {
      client = await pool.connect();
      const result = await client.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
      );

      const user = result.rows[0];

      if (user) {
        // Verificar a senha hasheada usando bcrypt
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          res.status(200).json({ message: 'Login bem-sucedido', user });
        } else {
          res.status(401).json({ error: 'Credenciais inválidas' });
        }
      } else {
        res.status(401).json({ error: 'Credenciais inválidas' });
      }
    } catch (error) {
      console.error('Erro ao autenticar usuário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } finally {
      if (client) {
        client.release();
      }
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
