import { Hono } from "hono";
import { eq } from "drizzle-orm";
import { clerkMiddleware,getAuth } from "@hono/clerk-auth";
import{HTTPException} from  "hono/http-exception"
import { db } from "@/db/dirzzle";
import { accounts } from "@/db/schema";


const app = new Hono().get(
    "/",
    clerkMiddleware(),
    async(c)=>{
    const auth =getAuth(c)
    
    if(!auth?.userId){
        // return c.json({error: "Authorized"},401);
        throw new HTTPException(401,{
            res: c.json({error: "unAuthorized"},401),
        })
    }
     const data =await db
     .select({
        id: accounts.id,
        name: accounts.name,
     })
     .from(accounts)
     .where(eq(accounts.userId, auth.userId));
     
    
    return c.json({data});
});


export default app;