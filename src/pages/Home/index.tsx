import { TextInput } from '../../components/Inputs';
import DateInput from '../../components/DateInput';
import { Header } from './components/Header';

export const HomePage: React.FC = () => {
  return (
    <>
      <TextInput
        title="Nome"
        placeholder="Informe o nome do paciente"
      />
      <DateInput />
      <Header />
    </>
  );
};
