import { Hono } from "hono";
import { handle } from "hono/vercel";
import {z} from "zod";
import { zValidator } from '@hono/zod-validator'

export const runtime ="edge";
const app =new Hono().basePath('/api')
app

.get(
    "/hello",
    (c)=>{
    return c.json({
        message:"hello Next.js"
    })
})
.get(
    "/hello/:test",
    (c)=>{
    return c.json({
        message:"hello world"
    })
})

.post(
    "/create/:postId",
zValidator("json",z.object({
    name:z.string(),
    userId:z.string(),
})),
zValidator("param",z.object({
    postId: z.number(),
})),
(c)=>{

    const {name, userId} = c.req.valid("json");
    const {postId} = c.req.valid("param");
    return c.json({
         
    })
})

export const GET = handle(app);
export const POST = handle(app);