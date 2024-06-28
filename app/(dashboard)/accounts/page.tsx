"use client"

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-accounts";

import {
    Card,
    CardContent,
    CardTitle,
    CardHeader

} from "@/components/ui/card"
import { Plus } from "lucide-react";
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";


const AccountPage =()=>{

    const newAccount = useNewAccount();
    return(
        <div className="max-w-screen-2xl mx-auto  w-full pb-10 -mt-24 ">
            <Card className="border-none drop-shadow-sm">
                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                    <CardTitle className="text-xl line-clamp-1">
                        Account Page
                    </CardTitle>
                 <Button onClick={newAccount.onOpen} size="sm">
                    <Plus className="size-4 m-2"/>
                    Add New
                 </Button>

                </CardHeader>
                <CardContent>
                    <DataTable 
                    filterKey="email" 
                    columns={columns} 
                    data={[]}
                    onDelete={()=>{}}
                    disabled={false}
                    />
                </CardContent>


            </Card>
        </div>
    )
}
export default AccountPage;