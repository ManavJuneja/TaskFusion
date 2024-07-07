import { createComment } from "@/Redux/Comment/Action";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormMessage, FormItem } from "@/components/ui/form"; // Added FormItem import
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const CreateCommentForm = ({issueId}) => {
    const dispatch=useDispatch();
    const form = useForm({
        // resolver: zodResolver(yourSchema), // Uncomment and add your resolver if needed
        defaultValues: {
            content : ""
        }
    });

    const onSubmit = (data) => {
        dispatch(createComment({content: data.content,issueId}))
        console.log("Invite User data", data);
        form.reset();//asdfasdf
    };
  return (
    <div>
         <Form {...form}>
                <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="content" 
                        render={({ field }) => (
                            <FormItem >
                                <div className='flex gap-2'>
                                <div >
                                    <Avatar>
                                        <AvatarFallback>M</AvatarFallback>
                                    </Avatar>
                                </div>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="w-[20rem]"
                                        placeholder="Add a comment.."
                                    />
                                </FormControl>

                                </div>
  
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                        <Button type="submit" >
                            Comment
                        </Button>
                   
                </form>
            </Form>


    </div>
  )
}

export default CreateCommentForm