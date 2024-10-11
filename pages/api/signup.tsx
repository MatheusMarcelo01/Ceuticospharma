import pool from '../../utils/db';
import bcrypt from 'bcrypt';

const saltRounds = 10; // Número de salt rounds para o bcrypt

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, email, password } = req.body;

    let client;
    try {
      // Verificar se o email já existe na tabela
      const emailExistsResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

      if (emailExistsResult.rows.length > 0) {
        // Se o email já existe, retornar um erro
        return res.status(400).json({ error: 'Já existe um usuário com este email.' });
      }

      // Hash da senha usando bcrypt
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      client = await pool.connect();
      const result = await client.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [nome, email, hashedPassword]
      );

      const newUser = result.rows[0];

      res.status(201).json({ user: newUser });
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } finally {
      if (client) {
        client.release(); // Garante que a conexão seja liberada
      }
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
