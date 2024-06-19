import { Hono } from "hono";
import { eq } from "drizzle-orm";
import { clerkMiddleware,getAuth } from "@hono/clerk-auth";
import { createId } from "@paralleldrive/cuid2";
import { db } from "@/db/dirzzle";
import { accounts, insertAccountSchema } from "@/db/schema";
import{zValidator} from "@hono/zod-validator"
const app = new Hono().get(
    "/",
    clerkMiddleware(),
    async(c)=>{
    const auth =getAuth(c)
    
    if(!auth?.userId){
        return c.json({error: "Authorized"},401);
    
    }
     const data =await db
     .select({
        id: accounts.id,
        name: accounts.name,
     })
     .from(accounts)
     .where(eq(accounts.userId, auth.userId));
     
    
    return c.json({data});
})
.post("/",
    clerkMiddleware(),
    zValidator( "json", insertAccountSchema.pick({
        name:true,
    })),
    async(c)=>{
        const auth = getAuth(c);
        const values = c.req.valid("json");

        if (!auth?.userId){
            return c.json({error : "Unauthorized"},401);
        }


        const [data] = await db.insert(accounts).values({
            id: createId(),
            userId: auth.userId,
            ...values,

        }).returning();

        return c.json({});


})


export default app;