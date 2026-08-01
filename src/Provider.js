import { createContext, useState } from 'react';


export const contexto = createContext();
const { Provider } = contexto;

const CustomProvider = ({ children }) => {

      const [constacUs, setContactUs] = useState(false)


  const updateContactUs = (bool) => {
    setContactUs(bool)
  }

  return (
    <Provider
      value={{
        updateContactUs, constacUs
      }}
    >
      {children}
    </Provider>
  );
};

export default CustomProvider;
