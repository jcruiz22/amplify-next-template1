'use client'
import { useAuth } from '@/app/context/AuthContext';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';


const AddCandidatoIA = () => {
    const { isAuthenticated } = useAuth();
    console.log('auth',isAuthenticated);
    return (
        <div>
          {isAuthenticated ? (
            <StorageManager
              acceptedFileTypes={['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']}
              path="candidatosSinProcesar/"
              maxFileCount={1}
              isResumable
              autoUpload
            />
          ) : (
            <p>Realizar login para cargar archivos</p>
          )}
        </div>
      );
    };
    
  export default AddCandidatoIA;