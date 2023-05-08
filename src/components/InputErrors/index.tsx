import { iApiError } from "../../contexts/UserContext/types";
import { SpanInputError } from "./styles";

export const InputErrors = (response: iApiError) => {
  return (
    <>
      <SpanInputError>{response.message}</SpanInputError>
    </>
  );
};
