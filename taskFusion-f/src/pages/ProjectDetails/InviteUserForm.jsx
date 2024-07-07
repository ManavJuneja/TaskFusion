import { inviteToProject } from "@/Redux/Project/Action";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormMessage, FormItem } from "@/components/ui/form"; // Added FormItem import
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const InviteUserForm = () => {
    const dispatch=useDispatch();
    const{id}=useParams();
    const form = useForm({
        // resolver: zodResolver(yourSchema), // Uncomment and add your resolver if needed
        defaultValues: {
            email: ""
        }
    });

    const onSubmit = (data) => {
        dispatch(inviteToProject({email:data.email,projectId:id}))
        
        console.log("Invite User data", data);
    };

    return (
        <div>
            <Form {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="email" 
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="email"
                                        className="border w-full border-gray-700 py-5 px-5"
                                        placeholder="User Email"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <DialogClose>
                        <Button type="submit" className="w-full mt-5">
                            Invite User
                        </Button>
                    </DialogClose>
                </form>
            </Form>
        </div>
    );
}

export default InviteUserForm;
