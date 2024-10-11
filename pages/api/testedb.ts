import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Tenta obter uma conexão do pool
    const client = await pool.connect();

    // Libera a conexão imediatamente para evitar bloqueios
    client.release();

    res.status(200).json({ message: 'Conexão com o banco de dados bem-sucedida!' });
  } catch (error) {
    console.error('Erro na conexão com o banco de dados:', error);
    res.status(500).json({ message: 'Erro na conexão com o banco de dados.' });
  }
}
