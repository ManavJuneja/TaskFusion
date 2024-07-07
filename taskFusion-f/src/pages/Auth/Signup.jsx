import { register } from "@/Redux/Auth/Action";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormMessage, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";


const Signup = () => {
  const dispatch = useDispatch();
  const form = useForm({
    
    defaultValues: {
      email: "",
      password: "",
      fullName: ""
    }
  });

  const onSubmit = (data) => {
    dispatch(register(data));
    console.log("Signup data", data);
  };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  className="border w-full border-gray-700 py-5 px-5"
                  placeholder="Full Name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                  placeholder="Email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  className="border w-full border-gray-700 py-5 px-5"
                  placeholder="Password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-5">
          Sign Up
        </Button>
      </form>
    </Form>
  );
};

export default Signup;
