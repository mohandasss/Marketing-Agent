import { TextInput } from "@mantine/core";

const Login = () => {
  return (
    <div>
      <TextInput
        className="text-"
        label="Email"
        placeholder="Enter your email"
        required
      />
      <h3 className="text-xl  mt-2 text-text-primary ">Hello</h3>
      <h3 className="text-xs   text-text-secondary ">
        Best HEllo from ourside
      </h3>
    </div>
  );
};

export default Login;
