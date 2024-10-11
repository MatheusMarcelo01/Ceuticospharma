import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../utils/db'; // Certifique-se de que o caminho está correto

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Consulta SQL para obter todos os produtos
      const result = await pool.query('SELECT * FROM products ORDER BY id');

      // Enviar resposta com os produtos
      res.status(200).json({ products: result.rows });
    } catch (error) {
      console.error('Erro ao obter produtos:', error);
      
      // Verificação do tipo do erro
      const errorMessage = (error instanceof Error) ? error.message : 'Erro desconhecido';
      res.status(500).json({ error: 'Erro interno do servidor', details: errorMessage });
    }
  } else {
    // Método não permitido
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
