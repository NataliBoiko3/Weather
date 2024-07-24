//import './myInput.css'
import styles from './myInput.module.css'


// interface IMyInputProps{
//     label: string
//     type?: string
//     name: string
//     placeholder: string;

// }
//Второй вариант интерфейса
// interface IInputProps {
//     label?: string;
//     name?: string;
//     type?: 'text' | 'password' | 'email' | 'number';
//     placeholder?: string;
//   }
  
//   export default function MyInput({ label = 'default', name='input', type='text', placeholder='default' }: IInputProps) {
  
//     return (
//       <>
//         <label className={styles.label}>{label}</label>
//         <input type={type} name={name} placeholder={placeholder} />
//       </>
//     );
//   }


interface IInputProps {
  label?: string;
  name?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MyInput({ 
  label = 'default', 
  name='input', 
  type='text', 
  placeholder='default',
  value,
  onChange
}: IInputProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
}
