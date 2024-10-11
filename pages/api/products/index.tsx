
// pages/api/products/index.tsx
import pool from '../../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, image, price } = req.body;

    let client;
    try {
      console.log('Recebendo dados:', { name, image, price });

      // Verificar se o produto já existe na tabela (opcional)
      const productExistsResult = await pool.query('SELECT * FROM products WHERE nome = $1', [name]);
      console.log('Resultado da verificação de produto existente:', productExistsResult.rows);

      if (productExistsResult.rows.length > 0) {
        return res.status(400).json({ error: 'Já existe um produto com este nome.' });
      }

      client = await pool.connect();
      const result = await client.query(
        'INSERT INTO products (nome, imagem, preco) VALUES ($1, $2, $3) RETURNING *',
        [name, image, price]
      );
      console.log('Produto criado:', result.rows[0]);

      const newProduct = result.rows[0];
      res.status(201).json({ product: newProduct });
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
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
