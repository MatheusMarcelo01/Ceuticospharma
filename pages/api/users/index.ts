import pool from '../../../utils/db'; 

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM users');
      const users = result.rows;

      client.release();

      res.status(200).json({ users });
    } catch (error) {
        alert('Erro ao buscar usuários:')
      console.error('Erro ao buscar usuários:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
