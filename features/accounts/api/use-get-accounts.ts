import { useQuery } from "@tanstack/react-query"

import {client} from "@/lib/hono"


export const useGetAccounts=()=>{
    const query = useQuery({
        queryKey: ['accounts'],
        queryFn: async () => {
            queryFn: async ()=>{
            const x: AccountsType = fetch("/api/accounts");   
            const response = await client.api.accounts.$get();


            }
            
        }
    })
}