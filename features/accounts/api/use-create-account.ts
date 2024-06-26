import { toast } from "sonner";
import { InferRequestType,InferResponseType } from "hono";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/hono";

//@ts-ignore
type ResponseType = InferResponseType<typeof client.api.accounts.$post>;//@ts-ignore
type RequestType = InferRequestType<typeof client.api.accounts.$post>["json"];


export const useCreateAccount =()=>{
    const queryClient = useQueryClient();
    const mutation = useMutation<
     ResponseType,
     Error,
     RequestType
    
    >({ 
        mutationFn: async(json) => {//@ts-ignore
            const response = await client.api.accounts.$post({ json }); 
            return await response.json();
        },
        onSuccess:()=>{
            toast.success("Account Created")
            queryClient.invalidateQueries({ queryKey:["accounts"]});
        },
        onError:()=>{
            toast.error("Failed to Create account")

            console.error("Error creating account");
        },
    });

    return mutation;
};