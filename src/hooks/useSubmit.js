import {useState} from "react";
import emailjs from "emailjs-com";

const apiServiceID = process.env.REACT_APP_SERVICE_ID;
const apiTemplateID = process.env.REACT_APP_TEMPLATE_ID;
const apiUserID = process.env.REACT_APP_USER_ID;


const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);

    const templateParams = {
      firstName: data.firstName,
      email: data.email,
      type: data.type,
      comment: data.comment,
    };
    
    emailjs.send(apiServiceID, apiTemplateID, templateParams, apiUserID)
      .then((response) => {
        console.log(response);
        setResponse({
          type: 'success',
          message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
        })
      })
      .catch((error) => {
        console.log(error);
        setResponse({
          type: 'error',
          message: 'Something went wrong, please try again later!',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { isLoading, response, submit };
}

export default useSubmit;
