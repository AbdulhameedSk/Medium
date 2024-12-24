import { Hono } from 'hono'
import {cors} from 'hono/cors'
const app = new Hono();
import { UserRouter } from './routes/user/user'  
import { BlogRouter } from './routes/blog/blog'

app.use('/*',cors())
app.route('/api/v1/user',UserRouter)
app.route('/api/v1/blog',BlogRouter)

export default app
