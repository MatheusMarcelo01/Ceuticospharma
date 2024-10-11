import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({

  connectionString: "postgres://default:uAbP5tfogOd0@ep-cold-rice-a4nc2rjp.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
})

export default pool;
